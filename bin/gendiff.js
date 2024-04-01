#!/usr/bin/env node

import { Command } from 'commander';
import parseFiles from '../src/parsers.js';
import { genDiff, stringify } from '../src/gendiff.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1, filepath2>')
  .helpOption('-h, --help', 'display help for command')
  .action((filepath1, filepath2) => {
    console.log(stringify(genDiff(parseFiles(filepath1, filepath2))));
  });

program.parse();
