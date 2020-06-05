import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div id="button-panel">
    <div className="group">
      <Button name="AC" bgColor="#eee" />
      <Button name="+/-" bgColor="#eee" />
      <Button name="%" bgColor="#eee" />
      <Button name="/" />
    </div>
    <div className="group">
      <Button name="7" bgColor="#eee" />
      <Button name="8" bgColor="#eee" />
      <Button name="9" bgColor="#eee" />
      <Button name="X" />
    </div>
    <div className="group">
      <Button name="4" bgColor="#eee" />
      <Button name="5" bgColor="#eee" />
      <Button name="6" bgColor="#eee" />
      <Button name="-" />
    </div>
    <div className="group">
      <Button name="1" bgColor="#eee" />
      <Button name="2" bgColor="#eee" />
      <Button name="3" bgColor="#eee" />
      <Button name="+" />
    </div>
    <div className="group button-zero">
      <Button name="0" bgColor="#eee" wide />
      <Button name="." bgColor="#eee" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
