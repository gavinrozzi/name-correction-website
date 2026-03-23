import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  ogImageUrl: string;
  domain: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImageUrl,
  domain
}) => {
  // Enhanced description for search intent
  const enhancedDescription = "Looking for Gavin Rossi? It's actually Gavin Rozzi (with two Zs). Learn the correct spelling and pronunciation of this commonly misspelled name.";

  // Expanded keywords targeting common search queries
  const expandedKeywords = `${keywords}, Gavin Rossi or Rozzi, is it Rossi or Rozzi, how to spell Rozzi, Rozzi pronunciation, Gavin Rozzi spelling, Rozzi vs Rossi, correct spelling Rozzi, Gavin Rozi, Gavin Rozy`;

  // FAQPage structured data for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it Gavin Rossi or Gavin Rozzi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's Gavin Rozzi with two Zs, not Rossi. While Rossi is a more common Italian surname, Rozzi is the correct spelling. The double Z is distinctive to the Rozzi family name."
        }
      },
      {
        "@type": "Question",
        "name": "How do you pronounce Rozzi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozzi is pronounced RAH-zee, rhyming with 'paparazzi.' Common mispronunciations include ROH-zee and ROSS-ee, but the correct pronunciation emphasizes the 'AH' sound."
        }
      },
      {
        "@type": "Question",
        "name": "Why do people spell it Rossi instead of Rozzi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rossi is one of the most common Italian surnames, while Rozzi is less common. People often default to the more familiar spelling. Both names have Italian origins, but they are distinct family names with different spellings."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Gavin Rozzi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gavin Rozzi is a civic technologist and Director of the DHCR Data Center at the New Jersey Department of Community Affairs. He founded OPRAmachine, New Jersey's first statewide freedom of information platform, and created zipcodeR, an open-source R package cited 53+ times in academic research. He serves on the board of the NJ Foundation for Open Government."
        }
      }
    ]
  };

  // BreadcrumbList structured data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Gavin Rozzi",
        "item": "https://gavinrozzi.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Name Clarification",
        "item": "https://gavinrossi.com"
      }
    ]
  };

  // Person structured data with alternate names
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gavin Rozzi",
    "alternateName": ["Gavin Rossi", "Gavin Rozi", "Gavin Rozy"],
    "url": "https://gavinrozzi.com",
    "sameAs": [
      "https://twitter.com/gavroz",
      "https://www.linkedin.com/in/gavin-rozzi/",
      "https://github.com/gavinrozzi",
      "https://scholar.google.com/citations?user=slj82AIAAAAJ",
      "https://orcid.org/0000-0002-9969-8175"
    ],
    "jobTitle": "Director, DHCR Data Center",
    "worksFor": {
      "@type": "GovernmentOrganization",
      "name": "New Jersey Department of Community Affairs"
    }
  };

  // WebPage structured data
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": enhancedDescription,
    "url": "https://gavinrossi.com",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Gavin Rozzi",
      "url": "https://gavinrozzi.com"
    },
    "about": {
      "@type": "Person",
      "name": "Gavin Rozzi"
    },
    "author": {
      "@type": "Person",
      "name": "Gavin Rozzi",
      "url": "https://gavinrozzi.com"
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={expandedKeywords} />

      {/* Alternate name meta tags for misspelling variants */}
      <meta name="alternate-names" content="Gavin Rossi, Gavin Rozi, Gavin Rozy" />

      {/* Canonical URL - points to the misspelling domain where this is hosted */}
      <link rel="canonical" href="https://gavinrossi.com" />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content="Not Gavin Rossi - It's Gavin Rozzi" />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content="https://gavinrossi.com" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gavin Rozzi Name Clarification" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gavroz" />
      <meta name="twitter:creator" content="@gavroz" />
      <meta name="twitter:title" content="Not Gavin Rossi - It's Gavin Rozzi" />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:domain" content="gavinrossi.com" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Gavin Rozzi" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />

      {/* Structured Data - FAQPage for rich snippets */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Structured Data - BreadcrumbList */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Structured Data - Person with alternate names */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      {/* Structured Data - WebPage */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
