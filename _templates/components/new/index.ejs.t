---
to: src/components/<%= name %>/index.tsx
---
import React from 'react';
import PropTypes from 'prop-types';

type <%= name %>Props = {};

function <%= name %>(props: <%= name %>Props) {
  return (
    <div></div>
  );
}

<%= name %>.propTypes = {
};
<%= name %>.defaultProps = {
};

export default <%= name %>;