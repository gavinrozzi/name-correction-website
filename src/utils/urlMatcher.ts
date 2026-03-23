/**
 * URL pattern matching utility for redirecting to proper gavinrozzi.com URLs
 */

// Define common URL patterns from gavinrozzi.com
const URL_PATTERNS = [
  {
    pattern: /\/blog\/([a-z0-9-]+)\/?$/i,
    type: 'blog post',
    example: '/blog/digital-transformation-government/'
  },
  {
    pattern: /\/post\/([a-z0-9-]+)\/?$/i,
    type: 'blog post',
    example: '/post/section-230-isnt-just-about-big-tech/',
    redirect: '/blog/'
  },
  {
    pattern: /\/portfolio\/([a-z0-9-]+)\/?$/i,
    type: 'project',
    example: '/portfolio/opramachine/'
  },
  {
    pattern: /\/project\/([a-z0-9-]+)\/?$/i,
    type: 'project',
    example: '/project/opramachine/',
    redirect: '/portfolio/'
  },
  {
    pattern: /\/media\/([a-z0-9-]+)\/?$/i,
    type: 'media appearance',
    example: '/media/civic-tech-podcast/'
  },
  {
    pattern: /\/publications\/([a-z0-9-]+)\/?$/i,
    type: 'publication',
    example: '/publications/zipcoder-software-paper/'
  },
  {
    pattern: /\/publication\/([a-z0-9-]+)\/?$/i,
    type: 'publication',
    example: '/publication/opramachine-data-paper/',
    redirect: '/publications/'
  },
  {
    pattern: /\/talk\/([a-z0-9-]+)\/?$/i,
    type: 'talk',
    example: '/talk/using-data-and-emerging-technologies-to-improve-urban-life/',
    redirect: '/media/'
  },
  {
    pattern: /\/about\/?$/i,
    type: 'about page',
    example: '/about/'
  },
  {
    pattern: /\/contact\/?$/i,
    type: 'contact page',
    example: '/contact/'
  }
];

/**
 * Analyzes a URL path and suggests possible matches on gavinrozzi.com
 * @param path The current URL path that resulted in a 404
 * @returns An object with suggestion information or null if no match
 */
export function analyzePath(path: string): {
  suggestedUrl: string;
  contentType: string;
  confidence: 'high' | 'medium' | 'low';
} | null {
  // Remove leading slash if present for consistency
  const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Skip empty paths
  if (!normalizedPath) return null;
  
  // Check for direct pattern matches
  for (const { pattern, type } of URL_PATTERNS) {
    if (pattern.test('/' + normalizedPath)) {
      return {
        suggestedUrl: `https://www.gavinrozzi.com/${normalizedPath}`,
        contentType: type,
        confidence: 'high'
      };
    }
  }
  
  // Check for partial matches (segments of the path)
  const segments = normalizedPath.split('/').filter(Boolean);
  
  // If we have segments, check if any of them match known content types
  if (segments.length > 0) {
    const knownContentTypes = ['blog', 'portfolio', 'media', 'publications', 'about', 'contact', 'speaking'];
    // Map old content types to new ones
    const contentTypeRedirects: Record<string, string> = {
      'post': 'blog',
      'project': 'portfolio',
      'publication': 'publications',
      'talk': 'media'
    };

    const firstSegment = segments[0];
    const mappedType = contentTypeRedirects[firstSegment] || firstSegment;

    if (knownContentTypes.includes(mappedType)) {
      // This is likely a content path with the correct structure
      const newPath = contentTypeRedirects[firstSegment]
        ? normalizedPath.replace(firstSegment, contentTypeRedirects[firstSegment])
        : normalizedPath;
      return {
        suggestedUrl: `https://www.gavinrozzi.com/${newPath}`,
        contentType: mappedType,
        confidence: 'medium'
      };
    }

    // Check if any segment looks like a slug (contains hyphens, lowercase)
    const possibleSlug = segments.find(segment => /^[a-z0-9-]+$/.test(segment) && segment.includes('-'));

    if (possibleSlug) {
      // This might be a content slug, suggest as a blog post (most common)
      return {
        suggestedUrl: `https://www.gavinrozzi.com/blog/${possibleSlug}/`,
        contentType: 'blog post',
        confidence: 'low'
      };
    }
  }
  
  return null;
}

/**
 * Gets related content suggestions based on keywords in the path
 * @param path The current URL path
 * @returns Array of suggested URLs that might be relevant
 */
export function getRelatedContentSuggestions(path: string): Array<{
  url: string;
  title: string;
  type: string;
}> {
  const normalizedPath = path.toLowerCase();
  const suggestions: Array<{url: string; title: string; type: string}> = [];
  
  // Extract potential keywords from the path
  const keywords = normalizedPath
    .replace(/[^a-z0-9-]/g, ' ')
    .split(' ')
    .filter(word => word.length > 3);
  
  // Map of keywords to relevant content
  const keywordContentMap: Record<string, Array<{url: string; title: string; type: string}>> = {
    'opra': [
      { url: 'https://www.gavinrozzi.com/portfolio/opramachine/', title: 'OPRAmachine', type: 'project' },
      { url: 'https://www.gavinrozzi.com/opramachine/', title: 'OPRAmachine Overview', type: 'page' }
    ],
    'zipcoder': [
      { url: 'https://www.gavinrozzi.com/portfolio/zipcoder/', title: 'zipcodeR Package', type: 'project' },
      { url: 'https://www.gavinrozzi.com/zipcoder/', title: 'zipcodeR Overview', type: 'page' },
      { url: 'https://www.gavinrozzi.com/r-packages/', title: 'R Packages', type: 'page' }
    ],
    'data': [
      { url: 'https://www.gavinrozzi.com/portfolio/', title: 'Portfolio', type: 'projects' },
      { url: 'https://www.gavinrozzi.com/blog/data-visualization-public-policy/', title: 'Data Visualization', type: 'blog post' }
    ],
    'government': [
      { url: 'https://www.gavinrozzi.com/gavin-rozzi-nj-government/', title: 'NJ Government Work', type: 'page' },
      { url: 'https://www.gavinrozzi.com/portfolio/', title: 'Government Projects', type: 'projects' }
    ],
    'tech': [
      { url: 'https://www.gavinrozzi.com/portfolio/', title: 'Tech Projects', type: 'projects' },
      { url: 'https://www.gavinrozzi.com/blog/digital-transformation-government/', title: 'Digital Transformation', type: 'blog post' }
    ],
    'research': [
      { url: 'https://www.gavinrozzi.com/gavin-rozzi-publications/', title: 'Research Publications', type: 'publications' }
    ],
    'code': [
      { url: 'https://www.gavinrozzi.com/r-packages/', title: 'R Packages', type: 'page' },
      { url: 'https://www.gavinrozzi.com/gavin-rozzi-open-source/', title: 'Open Source Work', type: 'page' }
    ],
    'speaking': [
      { url: 'https://www.gavinrozzi.com/speaking/', title: 'Speaking Engagements', type: 'page' },
      { url: 'https://www.gavinrozzi.com/media/', title: 'Media Appearances', type: 'page' }
    ],
    'contact': [
      { url: 'https://www.gavinrozzi.com/contact/', title: 'Contact', type: 'page' }
    ],
    'about': [
      { url: 'https://www.gavinrozzi.com/about/', title: 'About Gavin Rozzi', type: 'page' },
      { url: 'https://www.gavinrozzi.com/who-is-gavin-rozzi/', title: 'Who is Gavin Rozzi?', type: 'page' }
    ]
  };
  
  // Add suggestions based on keywords
  for (const keyword of keywords) {
    // Check for partial keyword matches
    for (const [key, content] of Object.entries(keywordContentMap)) {
      if (keyword.includes(key) || key.includes(keyword)) {
        // Add content suggestions for this keyword
        for (const item of content) {
          // Avoid duplicates
          if (!suggestions.some(s => s.url === item.url)) {
            suggestions.push(item);
          }
        }
      }
    }
  }
  
  // Limit to 3 suggestions
  return suggestions.slice(0, 3);
}