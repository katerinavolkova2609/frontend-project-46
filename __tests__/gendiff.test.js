import { readFileSync } from 'node:fs';
import { dirname } from 'path';
import path from 'node:path';
import { fileURLToPath } from 'url';
import parseFiles from '../src/parsers.js';
import { genDiff, stringify } from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPath(filename), 'utf-8');

test('genDiff, .json', () => {
  const result = readFile('expected.stylish.txt'.trim());
  expect(
    stringify(
      genDiff(parseFiles('__fixtures__/file1.json', '__fixtures__/file2.json'))
    )
  ).toEqual(result);
});

test('genDiff, .yaml', () => {
   const result = readFile('expected.stylish.txt'.trim());
  expect(
    stringify(
      genDiff(parseFiles('__fixtures__/file1.yaml', '__fixtures__/file2.yaml'))
    )
  ).toEqual(result);
});
