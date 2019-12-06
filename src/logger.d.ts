/**
 * The possible severity levels of a log message.
 */
export const enum LogLevel {
  Debug = "debug",
  Info = "info",
  Warning = "warning",
  Error = "error",
}


/**
 * Logs messages and errors
 */
export interface Logger {
  /**
   * Logs a message.
   *
   * This is a shortcut for `log.info()`.
   *
   * @param message - The message to log
   * @param data - An optional POJO containing additional information
   */
  (message: string, data?: object): void;

  /**
   * Logs an error.
   *
   * This is a shortcut for `log.error()`.
   *
   * @param error - The error to log
   * @param data - An optional POJO containing additional information
   */
  (error: Error, data?: object): void;

  /**
   * Logs a message.
   *
   * @param message - The message to log
   * @param data - An optional POJO containing additional information
   */
  info(message: string, data?: object): void;

  /**
   * Logs a message, only if debug mode is enabled.
   *
   * @param message - The message to log
   * @param data - An optional POJO containing additional information
   */
  debug(message: string, data?: object): void;

  /**
   * Logs a warning
   *
   * @param warning - The warning to log
   * @param data - An optional POJO containing additional information
   */
  warn(warning: string | Error, data?: object): void;

  /**
   * Logs an error.
   *
   * @param error - The error to log
   * @param data - An optional POJO containing additional information
   */
  error(error: string | Error, data?: object): void;
}
