import { readFileSync } from 'node:fs';
import { dirname } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPath(filename), 'utf-8');

const stylishData = readFile('expected.stylish.txt'.trim());
const plainData = readFile('expected.stylish.plain.txt'.trim());
const jsonFormat = readFile('expected.stylish.json.txt'.trim());

test.each([
  [stylishData, '__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish'],
  [stylishData, '__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'stylish'],
  [stylishData, '__fixtures__/file1.yml', '__fixtures__/file2.yml', 'stylish'],
  [plainData, '__fixtures__/file1.json', '__fixtures__/file2.json', 'plain'],
  [plainData, '__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain'],
  [plainData, '__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain'],
  [jsonFormat, '__fixtures__/file1.json', '__fixtures__/file2.json', 'json'],
  [jsonFormat, '__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json'],
  [jsonFormat, '__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'json'],
])('%# comparing with the reference sample', (expected, filepath1, filepath2, formatStyle) => {
  expect(genDiff(filepath1, filepath2, formatStyle)).toEqual(expected);
});
