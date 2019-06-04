/// <reference types="minimist" />
/**
* @module
*/
import * as minimist from 'minimist';
export declare let options: minimist.ParsedArgs;
export declare let commands: string[];
export declare let operation: string;
export declare const DEBUG_KEYS: Set<string>;
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
export declare function get(longName: string, shortName?: string): any;
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
export declare function hasKey(longName: string, shortName?: string): boolean;
export declare function getFirstCommand(): string;
/**
 * Get value for flags directory (or -d).
 * @return {string} - value for directory flag
 */
export declare function getDirectory(): any;
/**
 * Check if module is running in debug mode
 * @return {boolean} true when module is running in debug mode
 */
export declare function isDebugMode(): boolean;
/**
 * Set defaul flag value
 * @param {string} key - flag to set
 * @param {boolean|string|undefined} [value=true] - flag's value
 * @return {void}
 */
export declare function setDefault(key: string, value?: string | boolean | number): void;
/**
 * Reload all the args.
 * @return {void}
 */
export declare function reload(args?: string[]): void;
