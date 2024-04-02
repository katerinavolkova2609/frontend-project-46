// import { readFileSync } from "node:fs";
// import { resolve } from "node:path";
// import { cwd } from "node:process";
import parseFiles from '../src/parsers.js';
import { genDiff, stringify } from '../src/gendiff.js';

const result = '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}';

test('genDiff, .json', () => {
  expect(
    stringify(
      genDiff(parseFiles('__fixtures__/file1.json', '__fixtures__/file2.json')),
    ).toEqual(result),
  );
});

test('genDiff, .yaml', () => {
  expect(
    stringify(
      genDiff(parseFiles('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')),
    ),
  ).toEqual(result);
});
