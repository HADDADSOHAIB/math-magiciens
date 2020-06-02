import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = buttonName => props.clickHandler(buttonName);

  return (
    <div id="button-panel">
      <div className="group">
        <Button name="AC" bgColor="#eee" clickHandle={handleClick} />
        <Button name="+/-" bgColor="#eee" onCclickHandlelick={handleClick} />
        <Button name="%" bgColor="#eee" clickHandle={handleClick} />
        <Button name="/" clickHandle={handleClick} />
      </div>
      <div className="group">
        <Button name="7" bgColor="#eee" clickHandle={handleClick} />
        <Button name="8" bgColor="#eee" clickHandle={handleClick} />
        <Button name="9" bgColor="#eee" clickHandle={handleClick} />
        <Button name="X" />
      </div>
      <div className="group">
        <Button name="4" bgColor="#eee" clickHandle={handleClick} />
        <Button name="5" bgColor="#eee" clickHandle={handleClick} />
        <Button name="6" bgColor="#eee" clickHandle={handleClick} />
        <Button name="-" />
      </div>
      <div className="group">
        <Button name="1" bgColor="#eee" clickHandle={handleClick} />
        <Button name="2" bgColor="#eee" clickHandle={handleClick} />
        <Button name="3" bgColor="#eee" clickHandle={handleClick} />
        <Button name="+" clickHandle={handleClick} />
      </div>
      <div className="group button-zero">
        <Button name="0" bgColor="#eee" wide clickHandle={handleClick} />
        <Button name="." bgColor="#eee" clickHandle={handleClick} />
        <Button name="=" clickHandle={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
