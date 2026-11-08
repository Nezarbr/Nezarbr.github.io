import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  cta:
    'inline-block mt-2 px-3 py-1 text-sm text-gray-900 border border-gray-400 rounded hover:bg-gray-900 hover:text-white',
};

const SummaryItem = ({ name, description, link = false, internal = false, cta = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.description}>{description}</p>
      {cta &&
        (link.startsWith('/') ? (
          <Link className={classes.cta} to={link}>
            {cta}
          </Link>
        ) : (
          <a className={classes.cta} href={link}>
            {cta}
          </a>
        ))}
    </div>
  );
};

export default SummaryItem;
