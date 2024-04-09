import _ from 'lodash';

const getStringValue = (data) => {
  if (_.isObject(data)) {
    return `[complex value]`;
  }
  if (typeof data !== 'string') {
    return String(data)
  }
  return `'${data}'`;
};

const doPlainFormatTree = (data) => {
  const iter = (node, currentKey) => {
    const collOfStrings = node.map(({ key, value, newValue, status }) => {
      switch (status) {
        case 'nested':
          return iter(value, `${currentKey}${key}.`);
        case 'deleted':
          return `Property '${currentKey}${key}' was removed\n`;
        case 'added':
          return `Property '${currentKey}${key}' was added with value: ${getStringValue(value)}\n`;
        case 'changed':
          return `Property '${currentKey}${key}' was updated. From ${getStringValue(value)} to ${getStringValue(newValue)}\n`;
        default:
          throw new Error('Unknown format');
        case 'unchanged':
          return null;
      }
    });
    return `${collOfStrings.join('')}`;
  };
  return iter(data, '').trim();
};

export default doPlainFormatTree;
