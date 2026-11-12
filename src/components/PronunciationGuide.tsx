import React from 'react';
import { ArrowRight, Check, X } from 'lucide-react';
import Section from './Section';

interface PronunciationItem {
  incorrect: string;
  correct: string;
}

interface PronunciationGuideProps {
  pronunciationGuide: PronunciationItem[];
}

const PronunciationGuide: React.FC<PronunciationGuideProps> = ({ pronunciationGuide }) => {
  return (
    <Section
      id="pronunciation-guide"
      title="Pronunciation Guide"
      lead={`Not sure how to pronounce "Rozzi"? Here's a simple guide.`}
    >
      <div className="card-grid">
        <div className="card stack-sm">
          <p className="say-it" aria-label="ROZ-zee">
            <span className="stress">ROZ</span><span className="rest">-zee</span>
          </p>
          <div className="tile">
            <p className="tile-title">First syllable: RAH</p>
            <p>Like in "father" or "car"</p>
            <p className="tile-note">This syllable is stressed</p>
          </div>
          <div className="tile">
            <p className="tile-title">Second syllable: zee</p>
            <p>Like in "zebra" or "breeze"</p>
            <p className="tile-note">This syllable is unstressed</p>
          </div>
          <p>
            Words that rhyme with Rozzi: <strong style={{ color: 'var(--color-secondary-text)', fontWeight: 600 }}>"paparazzi", "fuzzy", "jazzy"</strong>
          </p>
        </div>

        <div className="card stack-sm">
          <h3 className="card-title" style={{ marginBottom: 0 }}>Common Mispronunciations</h3>
          <div className="fix-list">
            {pronunciationGuide.map((item) => (
              <div key={item.incorrect} className="fix-row">
                <span className="fix is-wrong"><X size={16} />{item.incorrect}</span>
                <ArrowRight size={18} className="arrow" aria-hidden="true" />
                <span className="fix is-right"><Check size={16} />{item.correct}</span>
              </div>
            ))}
          </div>
          <div className="callout">
            <p>
              <strong>Common misconception:</strong> it is not ROH-zee, like "rosy" or "cozy." The first syllable has an "ah" sound, not an "oh" sound, like "father" + "zebra."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PronunciationGuide;
