import _ from 'lodash';

const genDiff = (arr) => {
  const [obj1, obj2] = arr;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const commonKeys = _.sortBy(_.union(keys1, keys2));

  const result = commonKeys.reduce((acc, key) => {
    if (!Object.hasOwn(obj2, key)) {
      acc[key] = 'deleted';
    }
    if (!Object.hasOwn(obj1, key)) {
      acc[key] = 'added';
    }
    if (obj1[key] === obj2[key]) {
      acc[key] = 'unchanged';
    }
    if (
      Object.hasOwn(obj1, key)
      && Object.hasOwn(obj2, key)
      && obj1[key] !== obj2[key]
    ) {
      acc[key] = 'changed';
    }
    return acc;
  }, {});
  return [result, obj1, obj2];
};

const stringify = (data) => {
  const [compareObj, obj1, obj2] = data;
  const keys = Object.keys(compareObj);
  const collOfStrings = keys.map((key) => {
    switch (compareObj[key]) {
      case 'deleted':
        return `  - ${key}: ${obj1[key]}\n`;
      case 'added':
        return `  + ${key}: ${obj2[key]}\n`;
      case 'unchanged':
        return `    ${key}: ${obj1[key]}\n`;
      case 'changed':
        return `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
      default:
        throw new Error('Unknown format');
    }
  });
  const result = collOfStrings.join('');
  return `{\n${result}}`;
};

export { genDiff, stringify };
