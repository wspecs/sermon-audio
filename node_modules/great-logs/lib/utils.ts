import {isDebugMode} from 'args-finder';
import chalk, { Chalk } from 'chalk'

const PRINT_COLOR = chalk.white;
const INFO = chalk.green;
const DATA = chalk.cyan;
const ERROR = chalk.red;
const WARN = chalk.yellow;
const DEBUG = chalk.magentaBright;

export function getDate() {
  return chalk.gray(`[${(new Date()).toISOString()}] `);
}

/**
 * Generic function to write to the console
 * @param {Array<Object>} texts - argument for logging
 * @param {!Function} writer - chalk writer
 * @param {string} context - log category (e.g INFO, ERROR)
 * @param {string} line - additional text to log.
 * @return {void}
 */
export function write(texts: Array<{}|any[]>, writer: any, context?: string, line?: string) {
  if (typeof texts[0] === 'object' || Array.isArray(texts[0])) {
    data(texts[0]);
    return;
  }
  line = line || writer(texts[0]);
  context = getDate() + (context || '');
  let index = 1;
  for (; index < texts.length; index++) {
    if ((line || '').indexOf('%s') === -1) {
      break;
    }
    line = (line || '').replace('%s', writer.bold(texts[index]));
  }
  console.log(context + writer(line));
  for (;index < texts.length; index++) {
    console.log(context + writer(texts[index]));
  }
}

/**
 * Handles all default logs.
 * @return {void}
 */

export function print(...args: Array<string|number>) {
  write(args, PRINT_COLOR);
}

/**
 * Prepend INFO to logs
 * @return {void}
 */
export function info(...args: Array<string|number>) {
  write(args, PRINT_COLOR, INFO('INFO: '));
};


/**
 * Handles all warning logs.
 */
export function warn(...args: Array<string|number>) {
  write(args, PRINT_COLOR, WARN('WARNING: '));
};


export function data(...args: (Array<{}|any[]>)) {
  for (let index = 0; index < arguments.length; index++) {
    console.log(DATA(JSON.stringify(arguments[index], null, 2)));
  }
}

export function error(...args: Array<string|number>) {
  write(args, PRINT_COLOR, ERROR('ERROR: '));
};


/**
 * Handles all debugging logs--only print in development mode.
 */
export function debug(...args: Array<string|number>) {
  if (isDebugMode()) {
    write(args, PRINT_COLOR, DEBUG('DEBUG: '));
  }
};