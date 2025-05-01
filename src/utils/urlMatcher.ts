/**
 * URL pattern matching utility for redirecting to proper gavinrozzi.com URLs
 */

// Define common URL patterns from gavinrozzi.com
const URL_PATTERNS = [
  { 
    pattern: /\/post\/([a-z0-9-]+)\/?$/i, 
    type: 'blog post',
    example: '/post/section-230-isnt-just-about-big-tech/'
  },
  { 
    pattern: /\/project\/([a-z0-9-]+)\/?$/i, 
    type: 'project',
    example: '/project/opramachine/'
  },
  { 
    pattern: /\/tag\/([a-z0-9-]+)\/?$/i, 
    type: 'tag',
    example: '/tag/data-visualization/'
  },
  { 
    pattern: /\/publication\/([a-z0-9-]+)\/?$/i, 
    type: 'publication',
    example: '/publication/opramachine-data-paper/'
  },
  { 
    pattern: /\/talk\/([a-z0-9-]+)\/?$/i, 
    type: 'talk',
    example: '/talk/using-data-and-emerging-technologies-to-improve-urban-life/'
  },
  { 
    pattern: /\/authors\/([a-z0-9-]+)\/?$/i, 
    type: 'author page',
    example: '/authors/gavin/'
  },
  { 
    pattern: /\/publication-type\/([0-9]+)\/?$/i, 
    type: 'publication type',
    example: '/publication-type/1/'
  },
  { 
    pattern: /\/slides\/([a-z0-9-]+)\/?$/i, 
    type: 'slides',
    example: '/slides/opiatecrisis/'
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
    const knownContentTypes = ['post', 'project', 'tag', 'publication', 'talk', 'authors', 'slides'];
    
    if (knownContentTypes.includes(segments[0])) {
      // This is likely a content path with the correct structure
      return {
        suggestedUrl: `https://www.gavinrozzi.com/${normalizedPath}`,
        contentType: segments[0],
        confidence: 'medium'
      };
    }
    
    // Check if any segment looks like a slug (contains hyphens, lowercase)
    const possibleSlug = segments.find(segment => /^[a-z0-9-]+$/.test(segment) && segment.includes('-'));
    
    if (possibleSlug) {
      // This might be a content slug, suggest as a blog post (most common)
      return {
        suggestedUrl: `https://www.gavinrozzi.com/post/${possibleSlug}`,
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
      { url: 'https://www.gavinrozzi.com/project/opramachine/', title: 'OPRAmachine', type: 'project' },
      { url: 'https://www.gavinrozzi.com/tag/opra/', title: 'OPRA Content', type: 'tag' },
      { url: 'https://www.gavinrozzi.com/post/om-1-year-later/', title: 'OPRAmachine: One Year Later', type: 'blog post' }
    ],
    'data': [
      { url: 'https://www.gavinrozzi.com/tag/data/', title: 'Data Content', type: 'tag' },
      { url: 'https://www.gavinrozzi.com/tag/data-visualization/', title: 'Data Visualization', type: 'tag' }
    ],
    'politics': [
      { url: 'https://www.gavinrozzi.com/tag/politics/', title: 'Politics Content', type: 'tag' },
      { url: 'https://www.gavinrozzi.com/tag/nj-politics/', title: 'NJ Politics', type: 'tag' }
    ],
    'tech': [
      { url: 'https://www.gavinrozzi.com/tag/civic-tech/', title: 'Civic Tech', type: 'tag' },
      { url: 'https://www.gavinrozzi.com/project/', title: 'Tech Projects', type: 'projects' }
    ],
    'research': [
      { url: 'https://www.gavinrozzi.com/publication/', title: 'Research Publications', type: 'publications' }
    ],
    'code': [
      { url: 'https://www.gavinrozzi.com/tag/r/', title: 'R Programming', type: 'tag' },
      { url: 'https://www.gavinrozzi.com/tag/open-source-software/', title: 'Open Source Software', type: 'tag' }
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