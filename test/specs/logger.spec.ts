// tslint:disable: completed-docs
import { Logger, LogLevel } from "../..";

export function testLogLevel(): LogLevel {
  let level: LogLevel = LogLevel.Debug;
  level = LogLevel.Info;
  level = LogLevel.Warning;
  return LogLevel.Error;
}

export function testLogger(): Logger {
  return {
    log(message: string, data?: object) { return; },
    debug(message: string, data?: object) { return; },
    warn(warning: string | Error, data?: object) { return; },
    error(error: string | Error, data?: object) { return; },
  };
}
