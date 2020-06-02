import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName.match(/[0-9]/)) {
    return {
      total,
      next: `${next}${buttonName}`,
      operation,
    };
  }

  if (buttonName.match(/[-/X+%]/) && next) {
    return {
      total: next,
      next: '',
      operation: buttonName,
    };
  }

  if (buttonName === '.' && !next.includes('.')) {
    return {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-' && next) {
    return {
      total,
      next: (-1 * parseFloat(next)).toString(),
      operation,
    };
  }

  if (buttonName === '+/-' && !next && total) {
    return {
      total: (-1 * parseFloat(total)).toString(),
      next,
      operation,
    };
  }

  if (buttonName === '=' && next && total) {
    return {
      total: (operate(parseFloat(next), parseFloat(total), operation)).toString(),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '=' && !next && total && operation === '%') {
    return {
      total: (operate(parseFloat(total), null, operation)).toString(),
      next: null,
      operation: null,
    };
  }

  return {
    total,
    next,
    operation,
  };
};

export default calculate;
