import React from 'react';

import Section from '../section';

const SectionAbout = ({ about }) => {
  return (
    <Section title="About Me">
      <div className="mb-6">
        {/* `about` is a multi-line template literal. Rendering it as a single
            <p> collapses the newlines into one run-on block, so split it into
            real paragraphs and drop the source indentation. */}
        {about
          .split('\n')
          .map(p => p.trim())
          .filter(Boolean)
          .map((p, i) => (
            <p key={i} className={i > 0 ? 'mt-4' : undefined}>
              {p}
            </p>
          ))}
      </div>
    </Section>
  );
};

export default SectionAbout;
