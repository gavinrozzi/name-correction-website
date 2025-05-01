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
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={domain} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content="Not Gavin Rossi - It's Gavin Rozzi" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={domain} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Gavin Rozzi Name Clarification" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@gavroz" />
      <meta name="twitter:creator" content="@gavroz" />
      <meta name="twitter:title" content="Not Gavin Rossi - It's Gavin Rozzi" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:domain" content={domain.replace('https://', '')} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Gavin Rozzi" />
      
      {/* Structured Data for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": title,
          "description": description,
          "url": domain,
          "author": {
            "@type": "Person",
            "name": "Gavin Rozzi",
            "url": "https://gavinrozzi.com"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;