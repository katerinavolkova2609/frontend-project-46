import { load } from 'js-yaml';


const getParsingData = (file, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(file);
    case '.yaml':
      return load(file);
    default:
      throw new Error(`Unkown format ${format}`);
  }
};


export default getParsingData;
