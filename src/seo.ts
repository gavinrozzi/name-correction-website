/**
 * Search metadata for gavinrossi.com.
 *
 * The questions below are shown on the page (components/Faq.tsx) and emitted
 * as FAQPage structured data by scripts/prerender.mjs, so the two can't drift.
 * Facts follow gavinrozzi.com (grwebsite: src/data/profile.ts). Update there first.
 */

const MAIN_SITE = 'https://www.gavinrozzi.com';
const THIS_SITE = 'https://gavinrossi.com';
// Same Person @id the main site uses, so both sites describe one entity.
const PERSON_ID = `${MAIN_SITE}/#gavinrozzi`;

export const PAGE_TITLE = "Gavin Rossi? It's Gavin Rozzi, With Two Zs";
export const PAGE_DESCRIPTION =
  "Looking for Gavin Rossi? It's Gavin Rozzi, with two Zs: New Jersey government innovation and modernization executive and data scientist. Correct spelling, pronunciation and where to find his work.";

export type FaqLink = { text: string; href: string };
export type FaqItem = { question: string; answer: string; link?: FaqLink };

export const faq: FaqItem[] = [
  {
    question: 'Is it Gavin Rossi or Gavin Rozzi?',
    answer:
      "It's Gavin Rozzi with two Zs, not Rossi. While Rossi is a more common Italian surname, Rozzi is the correct spelling. The double Z is distinctive to the Rozzi family name.",
  },
  {
    question: 'How do you pronounce Rozzi?',
    answer:
      'Rozzi is pronounced ROZ-zee, rhyming with "paparazzi." Common mispronunciations include ROH-zee and ROSS-ee, but the correct pronunciation matches the double Z in the spelling.',
  },
  {
    question: 'Why do people spell it Rossi instead of Rozzi?',
    answer:
      'Rossi is one of the most common Italian surnames, while Rozzi is less common. People often default to the more familiar spelling. Both names have Italian origins, but they are distinct family names with different spellings.',
  },
  {
    question: 'Who is Gavin Rozzi?',
    answer:
      "Gavin Rozzi (pronounced ROZ-zee) is a government innovation and modernization executive and data scientist in New Jersey. He is the founding Director of the DHCR Data Center at the New Jersey Department of Community Affairs and a Certified Public Manager. His team built NJHOMES Atlas and the data systems behind Bringing Veterans Home, the initiative through which New Jersey reached Functional Zero for veteran homelessness in July 2026, and in October 2026 he accepted four NAHRO national awards on behalf of the Department.",
    link: { text: 'Read the full biography', href: `${MAIN_SITE}/who-is-gavin-rozzi/` },
  },
  {
    question: 'What is Gavin Rozzi known for?',
    answer:
      "Gavin Rozzi is known for leading the in-house team behind New Jersey's affordable housing data tools, including the NJ Eviction Guide, the NJHOMES Choice Tool and NJHOMES Atlas. He also created zipcodeR, an open-source R package with 124,000+ downloads and 53+ peer-reviewed citations, and founded OPRAmachine, New Jersey's first statewide public records request platform, which he ran from 2017 to 2024.",
    link: { text: 'See the portfolio', href: `${MAIN_SITE}/portfolio/` },
  },
  {
    question: "Where is Gavin Rozzi's official website?",
    answer:
      'His official website is gavinrozzi.com, with his biography, resume, portfolio, publications, media appearances and contact page. This site, gavinrossi.com, exists only to catch the common misspelling and send people there.',
    link: { text: 'Visit gavinrozzi.com', href: `${MAIN_SITE}/` },
  },
];

/** JSON-LD blocks for the page head. */
export function buildSchemas(): object[] {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Gavin Rozzi',
    alternateName: ['Gavin Rossi', 'Gavin Rozi', 'Gavin Rozy'],
    honorificSuffix: 'MS, CPM',
    description:
      'Gavin Rozzi (pronounced ROZ-zee) is a government innovation and modernization executive and data scientist from New Jersey, creator of the zipcodeR R package and founder of OPRAmachine. Not to be confused with Gavin Rossi or other people with similar names.',
    url: `${MAIN_SITE}/`,
    mainEntityOfPage: `${MAIN_SITE}/who-is-gavin-rozzi/`,
    image: `${MAIN_SITE}/images/gavin-rozzi-headshot.jpg`,
    jobTitle: 'Founding Director, DHCR Data Center',
    worksFor: {
      '@type': 'GovernmentOrganization',
      name: 'New Jersey Department of Community Affairs',
      url: 'https://www.nj.gov/dca/',
    },
    alumniOf: { '@type': 'CollegeOrUniversity', name: 'Stockton University', url: 'https://stockton.edu' },
    knowsAbout: [
      'Digital Transformation',
      'Civic Technology',
      'Data Science',
      'Public Policy',
      'Full Stack Development',
      'Open Data',
      'Government Technology',
    ],
    sameAs: [
      'https://github.com/gavinrozzi',
      'https://www.linkedin.com/in/gavin-rozzi/',
      'https://twitter.com/gavroz',
      'https://x.com/gavroz',
      'https://scholar.google.com/citations?user=slj82AIAAAAJ',
      'https://orcid.org/0000-0002-9969-8175',
      'https://policylab.rutgers.edu/people/rozzi/',
    ],
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${THIS_SITE}/#webpage`,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${THIS_SITE}/`,
    inLanguage: 'en-US',
    isPartOf: { '@type': 'WebSite', '@id': `${MAIN_SITE}/#website`, name: 'Gavin Rozzi', url: `${MAIN_SITE}/` },
    about: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
    primaryImageOfPage: `${THIS_SITE}/og-image.png`,
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.link ? `${item.answer} ${item.link.href}` : item.answer },
    })),
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Gavin Rozzi', item: `${MAIN_SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Name Clarification', item: `${THIS_SITE}/` },
    ],
  };

  return [person, webPage, faqPage, breadcrumbs];
}
