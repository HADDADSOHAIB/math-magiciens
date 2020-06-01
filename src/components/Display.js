import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { result } = props;
  return (
    <div id="display">
      The result is:
      { result }
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.number,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
