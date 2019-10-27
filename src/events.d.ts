import { BuildSummary } from "./build-summary";
import { BuildContext } from "./context";
import { LogLevel } from "./logger";

/**
 * Events that can be emitted by a CodeEngine instance.
 */
export const enum EventName {
  Log = "log",
  Error = "error",
  BuildStarting = "buildStarting",
  BuildFinished = "buildFinished",
}

/**
 * The data that is emitted for a CodeEngine "log" event.
 */
export interface LogEventData {
  level: LogLevel;
  message: string;
  error?: Error;
  [key: string]: unknown;
}

/**
 * The data that is emitted for a CodeEngine "BuildFinished" event.
 */
export interface BuildFinishedEventData extends BuildContext, BuildSummary {}
