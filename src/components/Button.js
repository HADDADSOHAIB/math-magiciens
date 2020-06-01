import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <div id="button">
      { name }
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
