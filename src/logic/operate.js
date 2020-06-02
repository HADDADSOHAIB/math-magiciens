/* eslint-disable import/extensions */
import Big from 'big.js';

const operate = (one, two, op) => {
  const oneBig = new Big(one);
  const twoBig = new Big(two);

  if (op === '+') {
    return oneBig.plus(twoBig);
  }

  if (op === '-') {
    return oneBig.minus(twoBig);
  }

  if (op === 'X') {
    return oneBig.mul(twoBig);
  }

  if (op === '/' && two !== 0) {
    return oneBig.div(twoBig);
  }

  if (op === '/' && two === 0) {
    return Infinity;
  }

  return 0;
};

export default operate;
