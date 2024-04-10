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
const stylishDataYaml = readFile('expected.stylish.txt'.trim());
const plainData = readFile('expected.stylish.plain.txt'.trim());
const plainDataYaml = readFile('expected.stylish.plain.txt'.trim());
const jsonFormat = readFile('expected.stylish.json.txt'.trim());

test('genDiff, .json', () => {
  expect(
    genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'stylish'),
  ).toEqual(stylishData);
});

test('genDiff, .yaml', () => {
  expect(
    genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'stylish'),
  ).toEqual(stylishDataYaml);
});

test('genDiff, .json plain', () => {
  expect(
    genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain'),
  ).toEqual(plainData);
});

test('genDiff, .yaml plain', () => {
  expect(
    genDiff('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain'),
  ).toEqual(plainDataYaml);
});

test('genDiff, .json JSON', () => {
  expect(
    genDiff('__fixtures__/file1.json', '__fixtures__/file2.json', 'json'),
  ).toEqual(jsonFormat);
});

test('genDiff, .yml JSON', () => {
  expect(
    genDiff('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'json'),
  ).toEqual(jsonFormat);
});
