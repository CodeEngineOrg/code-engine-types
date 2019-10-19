import { LogLevel } from "./logger";

/**
 * Events that can be emitted by a CodeEngine instance.
 */
export type EventName = "log" | "error";

/**
 * The data that is emitted for a CodeEngine "log" event.
 */
export interface LogEventData {
  level: LogLevel;
  message: string;
  error?: Error;
  [key: string]: unknown;
}
