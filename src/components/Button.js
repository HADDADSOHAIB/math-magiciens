import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button id={`button-${name}`} type="button">
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
