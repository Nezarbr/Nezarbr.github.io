import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

// Projects with a real destination get a button; '#' means there is no page yet.
const ctaFor = (link) => {
  if (!link || link === '#') return false;
  return link.includes('github.com') ? 'View the code on GitHub' : 'Click for more information';
};

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          cta={ctaFor(project.link)}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
