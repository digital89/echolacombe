import React from 'react';

const C = ({ items, ol }) => {
  return ol ? (
    <ol>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  ) : (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default C;
