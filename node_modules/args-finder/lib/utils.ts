/**
* @module
*/
import * as minimist from 'minimist';
import { ADDRGETNETWORKPARAMS } from 'dns';


export let options = minimist(process.argv.slice(2));
export let commands = options._;
export let operation = getFirstCommand();

export const DEBUG_KEYS = new Set(['init', 'dev', 'debug', 'map', 'data']);

/**
 * Get command line flag value
 * @example
 * // return sample.md
 * // > nodemodule.js --filename sample.md
 * // OR
 * // > nodemodule.js -f sample.md
 * get('filename', 'f');
 * @param {string} longName - full name for the flag
 * @param {string} shortName - short name for the flga
 * @return {string} flag value
 */
export function get(longName: string, shortName?: string) {
  if (shortName && options[shortName] !== undefined) {
    return options[shortName];
  }
  return options[longName];
}

/**
 * Check if flag is specify
 * @example
 * // return true
 * // > nodemodule.js --filename sample.md -d ./
 * hasKey('filename');
 * // return false
 * hasKey('directory');
 * @param {string} longName - full name for the flag
 * @param {string} shortName - short name for the flga
 * @return {boolean} - true when flag is found.
 */
export function hasKey(longName: string, shortName?: string) {
  return get(longName, shortName) !== undefined;
}

export function getFirstCommand() {
  return commands.length > 0 ? commands[0] : '';
}

/**
 * Get value for flags directory (or -d).
 * @return {string} - value for directory flag
 */
export function getDirectory() {
  return get('directory', 'd') || '.';
}

/**
 * Check if module is running in debug mode
 * @return {boolean} true when module is running in debug mode
 */
export function isDebugMode() {
  return DEBUG_KEYS.has(process.argv[2]) || hasKey('debug');
}

/**
 * Set defaul flag value
 * @param {string} key - flag to set
 * @param {boolean|string|undefined} [value=true] - flag's value
 * @return {void}
 */
export function setDefault(key: string, value?: string|boolean|number) {
  value = value || value === undefined;
  let flag = `--${key}=${value}`;
  if (typeof value === 'boolean') {
    flag = `--${value ? '' : 'no'}${key}`;
  }
  process.argv[process.argv.length] = flag;
  reload();
}

/**
 * Reload all the args.
 * @return {void}
 */
export function reload(args?: string[]) {
  options = minimist(args || process.argv.slice(2));
  commands = options._;
  operation = getFirstCommand();
  for (let key in options) {
    if (options[key] === 'false' || options[key] === 'False') {
      options[key] = false;
    }
    if (options[key] === 'true' || options[key] === 'True') {
      options[key] = true;
    }
    if (options[key] === true && key.indexOf('no') === 0) {
      delete options[key];
      options[key.substr(2)] = false;
    }
  }
}

// initializes node args.
reload();