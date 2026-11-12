import React from 'react';
import { ExternalLink } from 'lucide-react';
import Section from './Section';

const RozziHistory: React.FC = () => {
  return (
    <Section id="rozzi-family-history" title="Rozzi Family History">
      <div className="card-grid">
        <div className="card" id="notable-rozzi-family-members">
          <p className="card-eyebrow">Nassau County Police Commissioner</p>
          <h3 className="card-title">Samuel J. Rozzi</h3>
          <p>
            My great uncle, Samuel J. Rozzi, served as the Nassau County, NY police commissioner. He led the police force with distinction and was known for his dedication to public service.
          </p>
          <div className="callout" style={{ marginTop: 'var(--space-2)' }}>
            <p>
              <strong>Historical note:</strong> During his tenure, Commissioner Rozzi oversaw the Nassau County Police Department at the time of the infamous Lufthansa Heist in 1978, one of the largest cash robberies in American history that later inspired scenes in the movie "Goodfellas."
            </p>
          </div>
          <p>
            <a
              href="https://www.nytimes.com/1992/07/31/nyregion/samuel-j-rozzi-67-police-commissioner-led-force-in-nassau.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Read more in The New York Times <ExternalLink size={14} style={{ display: 'inline' }} />
            </a>
          </p>
        </div>

        <div className="stack">
          <div className="card">
            <p className="card-eyebrow">Family-owned fireworks company</p>
            <h3 className="card-title">Rozzi Fireworks</h3>
            <p>
              While I don't believe I'm directly related to them, the Rozzi Fireworks Company has been creating spectacular displays for over a century. Their vibrant shows have become a tradition in many communities.
            </p>
            <p>
              <a
                href="https://www.cincinnati.com/story/entertainment/2021/07/02/rozzi-fireworks-vibrant-displays-have-been-around-over-century-how-rozzi-fireworks-became-part-cinci/7733708002/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Learn about Rozzi Fireworks <ExternalLink size={14} style={{ display: 'inline' }} />
              </a>
            </p>
          </div>

          <div className="card" id="the-rozzi-name">
            <h3 className="card-title">The Rozzi Name</h3>
            <p>
              The Rozzi surname has a rich history in Italian-American communities. While less common than "Rossi," the Rozzi name has made its mark in various fields including public service, entertainment, and business.
            </p>
            <p>
              Many Rozzi families immigrated to the United States in the early 20th century, bringing with them traditions and values that have been passed down through generations. The distinctive double "z" in our name represents our unique heritage and family identity.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RozziHistory;
