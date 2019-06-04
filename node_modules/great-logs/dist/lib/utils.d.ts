export declare function getDate(): string;
/**
 * Generic function to write to the console
 * @param {Array<Object>} texts - argument for logging
 * @param {!Function} writer - chalk writer
 * @param {string} context - log category (e.g INFO, ERROR)
 * @param {string} line - additional text to log.
 * @return {void}
 */
export declare function write(texts: Array<{} | any[]>, writer: any, context?: string, line?: string): void;
/**
 * Handles all default logs.
 * @return {void}
 */
export declare function print(...args: Array<string | number>): void;
/**
 * Prepend INFO to logs
 * @return {void}
 */
export declare function info(...args: Array<string | number>): void;
/**
 * Handles all warning logs.
 */
export declare function warn(...args: Array<string | number>): void;
export declare function data(...args: (Array<{} | any[]>)): void;
export declare function error(...args: Array<string | number>): void;
/**
 * Handles all debugging logs--only print in development mode.
 */
export declare function debug(...args: Array<string | number>): void;
