"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @module
*/
var minimist = require("minimist");
exports.options = minimist(process.argv.slice(2));
exports.commands = exports.options._;
exports.operation = getFirstCommand();
exports.DEBUG_KEYS = new Set(['init', 'dev', 'debug', 'map', 'data']);
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
function get(longName, shortName) {
    if (shortName && exports.options[shortName] !== undefined) {
        return exports.options[shortName];
    }
    return exports.options[longName];
}
exports.get = get;
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
function hasKey(longName, shortName) {
    return get(longName, shortName) !== undefined;
}
exports.hasKey = hasKey;
function getFirstCommand() {
    return exports.commands.length > 0 ? exports.commands[0] : '';
}
exports.getFirstCommand = getFirstCommand;
/**
 * Get value for flags directory (or -d).
 * @return {string} - value for directory flag
 */
function getDirectory() {
    return get('directory', 'd') || '.';
}
exports.getDirectory = getDirectory;
/**
 * Check if module is running in debug mode
 * @return {boolean} true when module is running in debug mode
 */
function isDebugMode() {
    return exports.DEBUG_KEYS.has(process.argv[2]) || hasKey('debug');
}
exports.isDebugMode = isDebugMode;
/**
 * Set defaul flag value
 * @param {string} key - flag to set
 * @param {boolean|string|undefined} [value=true] - flag's value
 * @return {void}
 */
function setDefault(key, value) {
    value = value || value === undefined;
    var flag = "--" + key + "=" + value;
    if (typeof value === 'boolean') {
        flag = "--" + (value ? '' : 'no') + key;
    }
    process.argv[process.argv.length] = flag;
    reload();
}
exports.setDefault = setDefault;
/**
 * Reload all the args.
 * @return {void}
 */
function reload(args) {
    exports.options = minimist(args || process.argv.slice(2));
    exports.commands = exports.options._;
    exports.operation = getFirstCommand();
    for (var key in exports.options) {
        if (exports.options[key] === 'false' || exports.options[key] === 'False') {
            exports.options[key] = false;
        }
        if (exports.options[key] === 'true' || exports.options[key] === 'True') {
            exports.options[key] = true;
        }
        if (exports.options[key] === true && key.indexOf('no') === 0) {
            delete exports.options[key];
            exports.options[key.substr(2)] = false;
        }
    }
}
exports.reload = reload;
// initializes node args.
reload();
