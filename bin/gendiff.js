#!/usr/bin/env node

import { program } from "commander";

// const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option("-v, --version", "1.0.0")
  .helpOption("-h, --help", "display help for command");

program.parse();

const options = program.opts();
// if (options.help) console.log('Usage: gendiff [options]');