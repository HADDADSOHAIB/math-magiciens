import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    name,
    bgColor,
    wide,
    clickHandler,
  } = props;

  const handleClick = e => clickHandler(e.currentTarget.innerText);

  const style = {
    backgroundColor: bgColor,
    width: (wide ? '50%' : '25%'),
  };

  return (
    <button id={`button-${name}`} style={style} type="button" onClick={handleClick}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bgColor: '#ffa500',
  wide: false,
};

export default Button;
