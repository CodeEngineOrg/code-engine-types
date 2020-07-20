/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars-experimental */
import { Logger, LogLevel } from "../..";

export function testLogLevel(): LogLevel {
  let level: LogLevel = LogLevel.Debug;
  level = LogLevel.Info;
  level = LogLevel.Warning;
  return LogLevel.Error;
}

export function testLogger(): Logger {
  function log(message: string | Error, data?: object): void {}
  log.info = (message: string, data?: object) => undefined;
  log.debug = (message: string, data?: object) => undefined;
  log.warn = (warning: string | Error, data?: object) => undefined;
  log.error = (error: string | Error, data?: object) => undefined;

  return log;
}
