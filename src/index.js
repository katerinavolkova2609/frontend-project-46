import { readFileSync } from 'node:fs';
import {resolve, extname } from 'node:path';
import { cwd } from 'node:process';
import getParsingData from './parsers.js';
import buildDifference from './builldDiff.js';
import getStylishTree from './formatters/index.js';

const getAbsolutePath = (filepath) => resolve(cwd(), filepath);

const getFormat = (filepath) => extname(filepath);

const readFile = (filepath) => {
  return getParsingData(readFileSync(getAbsolutePath(filepath), 'utf-8'),getFormat(filepath));
};

const gendiff = (filepath1, filepath2, style = 'stylish') => {
  const obj1 = readFile(filepath1);
  const obj2 = readFile(filepath2);
  const differenceTree = buildDifference(obj1, obj2);
  const result = getStylishTree(differenceTree, style);
  return result;
};

export default gendiff;
