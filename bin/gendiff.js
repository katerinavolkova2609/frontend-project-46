#!/usr/bin/env node

import { Command } from "commander";
import parseFiles from '../src/parsers.js'

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option("-v, --version", "1.0.0")
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1, filepath2>')
  .helpOption("-h, --help", "display help for command")
  .action((filepath1, filepath2) => {
    console.log(parseFiles(filepath1, filepath2));
  });

program.parse();

