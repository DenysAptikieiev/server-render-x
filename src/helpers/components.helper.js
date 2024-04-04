import React from 'react';

export const Highlighting = ({ string, match }) => {
  if (!match) return string;
  const regexp = new RegExp(match, 'ig');
  const matchValue = string.match(regexp);
  if (matchValue) {
    return string.split(regexp).map((str, index, array) => {
      if (index < array.length - 1) {
        const match = matchValue.shift();
        return (
          <span key={index}>
            {str}
            <span style={{ background: 'var(--color-accent)', opacity: '.9' }}>{match}</span>
          </span>
        );
      } else {
        return str;
      }
    });
  } else {
    return string;
  }
};
