import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { cwd } from "node:process";

const getAbsolutePath = (path) => resolve(cwd(), path);

const doParseFile = (absolutePath) => {
  const readingFile = readFileSync(absolutePath);
  return JSON.parse(readingFile);
};

const parseFiles = (filepath1, filepath2) => {
  const obj1 = doParseFile(getAbsolutePath(filepath1));
  const obj2 = doParseFile(getAbsolutePath(filepath2));
  return [obj1, obj2];
};

export default parseFiles;
