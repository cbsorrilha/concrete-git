import React from 'react';

const Checkbox = ({ label, ...props }) => (
  <label>
    <span>{label}</span>
    <input type="checkbox" {...props} />
  </label>
);

export default Checkbox;
