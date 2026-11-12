/**
 * Runs after `vite build`.
 *
 * 1. Renders the home page to HTML and writes it into dist/index.html, with
 *    the JSON-LD from src/seo.ts in the head. Search engines, link previews and
 *    AI crawlers that don't run JavaScript then get the full page, not an
 *    empty <div id="root">.
 * 2. Writes dist/404.html, which Netlify serves (with a 404 status) for any
 *    unknown path, so the app's own "page not found" screen can load and
 *    suggest the matching page on gavinrozzi.com.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
  ssr: { noExternal: ['@chriscourses/perlin-noise'] },
});

try {
  const { render } = await vite.ssrLoadModule('/src/prerender.tsx');
  const { html, schemas } = render();
  const shell = await readFile('dist/index.html', 'utf8');

  const ROOT = '<div id="root"></div>';
  if (!shell.includes(ROOT) || !shell.includes('</head>')) {
    throw new Error('dist/index.html does not have the expected root element or head');
  }

  const jsonLd = schemas
    .map((schema) => `    <script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`)
    .join('\n');

  const home = shell
    .replace('</head>', `${jsonLd}\n  </head>`)
    .replace(ROOT, `<div id="root">${html}</div>`);
  await writeFile('dist/index.html', home);

  // The 404 shell must not claim to be the home page.
  const notFound = shell
    .replace(/<title>[^<]*<\/title>/, '<title>Page Not Found - Gavin Rozzi</title>')
    .replace(/\s*<link rel="canonical"[^>]*>/, '')
    .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex" />')
    .replace(/\s*<meta (?:property="og:|name="twitter:)[^>]*>/g, '');
  await writeFile('dist/404.html', notFound);

  console.log(`prerender: wrote dist/index.html (${home.length} bytes, ${schemas.length} JSON-LD blocks) and dist/404.html`);
} finally {
  await vite.close();
}
