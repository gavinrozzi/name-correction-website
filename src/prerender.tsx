import { renderToString } from 'react-dom/server';
import App from './App';
import { buildSchemas } from './seo';

/** Used only by scripts/prerender.mjs at build time. */
export function render() {
  return { html: renderToString(<App />), schemas: buildSchemas() };
}
