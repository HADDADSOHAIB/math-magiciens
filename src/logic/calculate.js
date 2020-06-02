import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  if (buttonName.match(/[0-9]/)) {
    return {
      total,
      next: `${next}${buttonName}`,
      operation,
    };
  }

  if (buttonName.match(/[-/X+]/) && next === '') {
    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName.match(/[-/X+]/) && next !== '') {
    return {
      total: next,
      next: '',
      operation: buttonName,
    };
  }

}

export default calculate;
