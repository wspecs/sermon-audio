"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var args_finder_1 = require("args-finder");
var chalk_1 = require("chalk");
var PRINT_COLOR = chalk_1.default.white;
var INFO = chalk_1.default.green;
var DATA = chalk_1.default.cyan;
var ERROR = chalk_1.default.red;
var WARN = chalk_1.default.yellow;
var DEBUG = chalk_1.default.magentaBright;
function getDate() {
    return chalk_1.default.gray("[" + (new Date()).toISOString() + "] ");
}
exports.getDate = getDate;
/**
 * Generic function to write to the console
 * @param {Array<Object>} texts - argument for logging
 * @param {!Function} writer - chalk writer
 * @param {string} context - log category (e.g INFO, ERROR)
 * @param {string} line - additional text to log.
 * @return {void}
 */
function write(texts, writer, context, line) {
    if (typeof texts[0] === 'object' || Array.isArray(texts[0])) {
        data(texts[0]);
        return;
    }
    line = line || writer(texts[0]);
    context = getDate() + (context || '');
    var index = 1;
    for (; index < texts.length; index++) {
        if ((line || '').indexOf('%s') === -1) {
            break;
        }
        line = (line || '').replace('%s', writer.bold(texts[index]));
    }
    console.log(context + writer(line));
    for (; index < texts.length; index++) {
        console.log(context + writer(texts[index]));
    }
}
exports.write = write;
/**
 * Handles all default logs.
 * @return {void}
 */
function print() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    write(args, PRINT_COLOR);
}
exports.print = print;
/**
 * Prepend INFO to logs
 * @return {void}
 */
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    write(args, PRINT_COLOR, INFO('INFO: '));
}
exports.info = info;
;
/**
 * Handles all warning logs.
 */
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    write(args, PRINT_COLOR, WARN('WARNING: '));
}
exports.warn = warn;
;
function data() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var index = 0; index < arguments.length; index++) {
        console.log(DATA(JSON.stringify(arguments[index], null, 2)));
    }
}
exports.data = data;
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    write(args, PRINT_COLOR, ERROR('ERROR: '));
}
exports.error = error;
;
/**
 * Handles all debugging logs--only print in development mode.
 */
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args_finder_1.isDebugMode()) {
        write(args, PRINT_COLOR, DEBUG('DEBUG: '));
    }
}
exports.debug = debug;
;
