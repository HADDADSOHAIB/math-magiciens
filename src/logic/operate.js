/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (one, two, op) => {
  const oneBig = new Big(one);
  const twoBig = new Big(two);

  if (op === '+') {
    return oneBig.plus(twoBig).toString();
  }

  if (op === '-') {
    return oneBig.minus(twoBig).toString();
  }

  if (op === 'X') {
    return oneBig.mul(twoBig).toString();
  }

  if (op === '/' && two !== 0) {
    return oneBig.div(twoBig).toFixed(2).toString();
  }

  if (op === '/' && two === 0) {
    return Infinity.toString();
  }

  return '0';
};

export default operate;
