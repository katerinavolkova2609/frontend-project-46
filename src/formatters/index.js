import doStylishFormatTree from './stylish.js';
import doPlainFormatTree from './plain.js';

const getStylishTree = (obj, format) => {
  if (format === 'stylish') {
    return doStylishFormatTree(obj);
  }
  if (format === 'plain') {
    return doPlainFormatTree(obj);
  }
  if (format === 'json') {
    return JSON.stringify(obj, null, ' ');
  }
};

export default getStylishTree;
