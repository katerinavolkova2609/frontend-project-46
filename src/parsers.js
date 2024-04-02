import { readFileSync } from 'node:fs';
import { resolve, extname } from 'node:path';
import { cwd } from 'node:process';
import { load } from 'js-yaml';

const getAbsolutePath = (path) => resolve(cwd(), path);

const doParseFile = (absolutePath) => {
  const readingFile = readFileSync(absolutePath, 'utf-8');
  switch (extname(absolutePath)) {
    case '.json':
      return JSON.parse(readingFile);
    case '.yaml':
      return load(readingFile);
    default:
      throw new Error(`Unkown format ${extname(absolutePath)}`);
  }
};

const parseFiles = (filepath1, filepath2) => {
  const obj1 = doParseFile(getAbsolutePath(filepath1));
  const obj2 = doParseFile(getAbsolutePath(filepath2));
  return [obj1, obj2];
};

export default parseFiles;
