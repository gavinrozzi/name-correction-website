/**
 * URL matching for the 404 page: turns a path someone tried on gavinrossi.com
 * into the page they most likely wanted on gavinrozzi.com.
 *
 * The lists below mirror the main site's routes and its netlify.toml
 * redirects (grwebsite repo). Update them when pages move there.
 */

const SITE = 'https://www.gavinrozzi.com';

type Suggestion = {
  suggestedUrl: string;
  contentType: string;
  confidence: 'high' | 'medium' | 'low';
};

type RelatedLink = { url: string; title: string; type: string };

/** Standalone pages on the main site, keyed by their first path segment. */
const PAGES: Record<string, string> = {
  'about': 'about page',
  'contact': 'contact page',
  'who-is-gavin-rozzi': 'biography',
  'gavin-rozzi-resume': 'resume',
  'gavin-rozzi-speaker': 'speaking page',
  'gavin-rozzi-new-jersey': 'page',
  'gavin-rozzi-nj-government': 'page',
  'work-with-me': 'page',
  'expertise': 'page',
  'r-packages': 'page',
  'opramachine': 'project',
  'zipcoder': 'project',
  'nj-population-density-map': 'project',
  'nj-tax-abatements': 'page',
};

/** Content sections whose items live at /<section>/<slug>/. */
const SECTIONS: Record<string, string> = {
  blog: 'blog post',
  portfolio: 'project',
  media: 'media appearance',
  publications: 'publication',
};

/** Section names from the old site, mapped to where that content lives now. */
const LEGACY_SECTIONS: Record<string, string> = {
  post: 'blog',
  project: 'portfolio',
  publication: 'publications',
  talk: 'media',
  event: 'media',
};

/** Paths that moved to a different address on the main site. */
const MOVED: Record<string, string> = {
  'speaking': '/gavin-rozzi-speaker/',
  'resume': '/gavin-rozzi-resume/',
  'gavin-rozzi-publications': '/publications/',
  'gavin-rozzi-open-source': '/r-packages/',
  'portfolio/opramachine': '/opramachine/',
  'portfolio/zipcoder': '/zipcoder/',
  'portfolio/nj-population-map': '/nj-population-density-map/',
  'project/opramachine': '/opramachine/',
  'project/zipcoder': '/zipcoder/',
};

const withSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);

/**
 * Analyzes a URL path and suggests the matching page on gavinrozzi.com.
 * @param path The current URL path that resulted in a 404
 * @returns A suggestion, or null if nothing plausible matches
 */
export function analyzePath(path: string): Suggestion | null {
  const segments = path.toLowerCase().split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const joined = segments.join('/');
  const [first, ...rest] = segments;

  if (MOVED[joined]) {
    return {
      suggestedUrl: `${SITE}${MOVED[joined]}`,
      contentType: PAGES[MOVED[joined].replace(/\//g, '')] ?? 'page',
      confidence: 'high',
    };
  }

  if (PAGES[first]) {
    return {
      suggestedUrl: `${SITE}/${withSlash(joined)}`,
      contentType: PAGES[first],
      confidence: 'high',
    };
  }

  if (SECTIONS[first]) {
    return {
      suggestedUrl: `${SITE}/${withSlash(joined)}`,
      contentType: rest.length > 0 ? SECTIONS[first] : first,
      confidence: 'high',
    };
  }

  // Old-site sections: the slug often changed along with the section, so the
  // main site's own redirects make the final hop. Send the visitor there.
  const section = LEGACY_SECTIONS[first];
  if (section) {
    return {
      suggestedUrl: `${SITE}/${withSlash(joined)}`,
      contentType: rest.length > 0 ? SECTIONS[section] : section,
      confidence: 'medium',
    };
  }

  // Something slug-shaped with no section: blog posts are the most common.
  const possibleSlug = segments.find((segment) => /^[a-z0-9-]+$/.test(segment) && segment.includes('-'));
  if (possibleSlug) {
    return {
      suggestedUrl: `${SITE}/blog/${possibleSlug}/`,
      contentType: 'blog post',
      confidence: 'low',
    };
  }

  return null;
}

/** Keywords that might appear in a mistyped path, and the pages they point to. */
const KEYWORD_CONTENT: Record<string, RelatedLink[]> = {
  opra: [{ url: `${SITE}/opramachine/`, title: 'OPRAmachine (2017 to 2024)', type: 'project' }],
  zipcode: [
    { url: `${SITE}/zipcoder/`, title: 'zipcodeR Package', type: 'project' },
    { url: `${SITE}/r-packages/`, title: 'R Packages', type: 'page' },
  ],
  housing: [
    { url: `${SITE}/portfolio/njhomes-atlas/`, title: 'NJHOMES Atlas', type: 'project' },
    { url: `${SITE}/portfolio/nj-homes-choice-tool/`, title: 'NJHOMES Choice Tool', type: 'project' },
  ],
  njhomes: [
    { url: `${SITE}/portfolio/njhomes-atlas/`, title: 'NJHOMES Atlas', type: 'project' },
    { url: `${SITE}/portfolio/nj-homes-choice-tool/`, title: 'NJHOMES Choice Tool', type: 'project' },
  ],
  atlas: [{ url: `${SITE}/portfolio/njhomes-atlas/`, title: 'NJHOMES Atlas', type: 'project' }],
  veteran: [{ url: `${SITE}/portfolio/bringing-veterans-home/`, title: 'Bringing Veterans Home', type: 'project' }],
  eviction: [{ url: `${SITE}/portfolio/nj-eviction-guide/`, title: 'NJ Eviction Guide', type: 'project' }],
  civil: [{ url: `${SITE}/portfolio/nj-civil-service-navigator/`, title: 'NJ Civil Service Navigator', type: 'project' }],
  data: [
    { url: `${SITE}/portfolio/`, title: 'Portfolio', type: 'projects' },
    { url: `${SITE}/expertise/data-science/`, title: 'Data Science', type: 'page' },
  ],
  government: [
    { url: `${SITE}/gavin-rozzi-nj-government/`, title: 'NJ Government Work', type: 'page' },
    { url: `${SITE}/expertise/government-operations/`, title: 'Government Operations', type: 'page' },
  ],
  tech: [
    { url: `${SITE}/expertise/civic-technology/`, title: 'Civic Technology', type: 'page' },
    { url: `${SITE}/blog/digital-transformation-government/`, title: 'Digital Transformation', type: 'blog post' },
  ],
  research: [{ url: `${SITE}/publications/`, title: 'Research Publications', type: 'publication' }],
  publication: [{ url: `${SITE}/publications/`, title: 'Research Publications', type: 'publication' }],
  code: [{ url: `${SITE}/r-packages/`, title: 'R Packages', type: 'page' }],
  package: [{ url: `${SITE}/r-packages/`, title: 'R Packages', type: 'page' }],
  speak: [
    { url: `${SITE}/gavin-rozzi-speaker/`, title: 'Speaking', type: 'page' },
    { url: `${SITE}/media/`, title: 'Media Appearances', type: 'page' },
  ],
  talk: [
    { url: `${SITE}/gavin-rozzi-speaker/`, title: 'Speaking', type: 'page' },
    { url: `${SITE}/media/`, title: 'Media Appearances', type: 'page' },
  ],
  award: [
    { url: `${SITE}/media/nahro-awards-2026/`, title: '2026 NAHRO National Awards', type: 'media appearance' },
    { url: `${SITE}/media/governors-award-2025/`, title: "2025 Governor's Team of Excellence Award", type: 'media appearance' },
  ],
  resume: [{ url: `${SITE}/gavin-rozzi-resume/`, title: 'Resume', type: 'page' }],
  hire: [{ url: `${SITE}/work-with-me/`, title: 'Work With Me', type: 'page' }],
  work: [{ url: `${SITE}/work-with-me/`, title: 'Work With Me', type: 'page' }],
  contact: [{ url: `${SITE}/contact/`, title: 'Contact', type: 'page' }],
  about: [
    { url: `${SITE}/about/`, title: 'About Gavin Rozzi', type: 'page' },
    { url: `${SITE}/who-is-gavin-rozzi/`, title: 'Who is Gavin Rozzi?', type: 'page' },
  ],
  jersey: [{ url: `${SITE}/gavin-rozzi-new-jersey/`, title: 'New Jersey Work', type: 'page' }],
};

/**
 * Gets related content suggestions based on keywords in the path
 * @param path The current URL path
 * @returns Up to three main-site pages that might be relevant
 */
export function getRelatedContentSuggestions(path: string): RelatedLink[] {
  const words = path
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ' ')
    .split(' ')
    .filter((word) => word.length > 3);

  const suggestions: RelatedLink[] = [];
  for (const word of words) {
    for (const [key, content] of Object.entries(KEYWORD_CONTENT)) {
      if (!word.includes(key)) continue;
      for (const item of content) {
        if (!suggestions.some((s) => s.url === item.url)) suggestions.push(item);
      }
    }
  }

  return suggestions.slice(0, 3);
}
