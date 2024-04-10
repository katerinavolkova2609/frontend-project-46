import doStylishFormatTree from './stylish.js';
import doPlainFormatTree from './plain.js';

const getStylishTree = (obj, format) => {
  switch (format) {
    case 'stylish':
      return doStylishFormatTree(obj);
    case 'plain':
      return doPlainFormatTree(obj);
    case 'json':
      return JSON.stringify(obj, null, ' ');
    default:
      throw new Error(`Unkown format ${format}`);
  }
};

export default getStylishTree;
