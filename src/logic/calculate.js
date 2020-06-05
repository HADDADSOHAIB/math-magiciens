import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName.match(/[0-9]/) && total && total.includes('.') && !operation) {
    return {
      total: `${total}${buttonName}`,
      next,
      operation,
    };
  }

  if (buttonName.match(/[0-9]/)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '+/-' && next) {
    return {
      total,
      next: -1 * parseFloat(next),
      operation,
    };
  }

  if (buttonName === '+/-' && !next && total) {
    return {
      total: -1 * parseFloat(total),
      next,
      operation,
    };
  }

  if (buttonName.match(/[-/X+]/) && next && total) {
    return {
      total: operate(parseFloat(total), parseFloat(next), buttonName),
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName.match(/[-/X+]/) && !next && total) {
    return {
      total,
      next,
      operation: buttonName,
    };
  }

  if (buttonName.match(/[-/X+]/) && next && !total) {
    return {
      total: next,
      next: null,
      operation: buttonName,
    };
  }

  if (buttonName === '.' && next && !next.includes('.')) {
    return {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (buttonName === '.' && !next && operation) {
    return {
      total,
      next: '0.',
      operation,
    };
  }

  if (buttonName === '.' && !next && total && !total.includes('.')) {
    return {
      total: `${total}.`,
      next,
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

  if (buttonName === '=' && next && total) {
    return {
      total: operate(parseFloat(total), parseFloat(next), operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '%' && next && total) {
    return {
      total,
      next: operate(parseFloat(next), 100, '/'),
      operation,
    };
  }

  if (buttonName === '%' && next && !total) {
    return {
      total: operate(parseFloat(next), 100, '/'),
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
