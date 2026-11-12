import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import SiteShell from './components/SiteShell';
import { SITE } from './siteLinks';
import { analyzePath, getRelatedContentSuggestions } from './utils/urlMatcher';

const CONFIDENCE_LABEL = { high: 'High match', medium: 'Possible match', low: 'Suggested' } as const;

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

const NotFound: React.FC = () => {
  const path = window.location.pathname;
  const suggestion = useMemo(() => analyzePath(path), [path]);
  const related = useMemo(() => getRelatedContentSuggestions(path), [path]);

  return (
    <SiteShell>
      <Helmet>
        <title>Page Not Found - Gavin Rozzi</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="notfound">
        <div className="container stack" style={{ maxWidth: '48rem' }}>
          <div>
            <p className="notfound-code">404</p>
            <h1 className="hero-title">Page not found</h1>
            <p className="hero-description">
              The page you're looking for doesn't exist or has been moved. Perhaps you were looking
              for information about Gavin Rozzi (not Rossi)? My website is{' '}
              <a href={`${SITE}/`} className="text-link">gavinrozzi.com</a>.
            </p>
          </div>

          {suggestion && (
            <div className="card stack-sm">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                <h2 className="card-title" style={{ marginBottom: 0 }}>Did you mean to visit this page?</h2>
                <span className="badge">{CONFIDENCE_LABEL[suggestion.confidence]}</span>
              </div>
              <p>
                {capitalize(suggestion.contentType)}:{' '}
                <span style={{ wordBreak: 'break-all' }}>{suggestion.suggestedUrl}</span>
              </p>
              <div>
                <a href={suggestion.suggestedUrl} className="btn btn-primary">
                  <ExternalLink size={18} />Go to this page
                </a>
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="stack-sm">
              <h2 className="card-title" style={{ marginBottom: 0 }}>Related pages on gavinrozzi.com</h2>
              <ul className="card-grid">
                {related.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} className="link-card">
                      <span>
                        <span className="link-card-title">{item.title}</span>
                        <span className="link-card-text">{capitalize(item.type)}</span>
                      </span>
                      <ArrowUpRight size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="actions-row">
            <a href="/" className="btn btn-outline"><ArrowLeft size={18} />Back to the name page</a>
            <a href={`${SITE}/`} className="btn btn-contact"><ExternalLink size={18} />Visit gavinrozzi.com</a>
          </div>

          <p style={{ color: 'var(--color-text-tertiary)', fontSize: 'var(--text-sm)' }}>
            Remember: it's Rozzi with two Zs, not Rossi. Requested path: {path}
          </p>
        </div>
      </section>
    </SiteShell>
  );
};

export default NotFound;
