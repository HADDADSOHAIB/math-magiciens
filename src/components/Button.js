import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, bgColor, wide, clickHandle } = props;
  const style = {
    backgroundColor: bgColor,
    width: (wide ? '50%' : '25%'),
  };

  return (
    <button id={`button-${name}`} style={style} type="button">
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  bgColor: '#ffa500',
  wide: false,
};

export default Button;
