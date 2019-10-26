import { BuildSummary } from "./build-summary";
import { Context } from "./context";
import { FileInfo } from "./file";
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
 * The data that is emitted for a CodeEngine "BuildStarting" event.
 */
export interface BuildStartingEventData extends Context {
  /**
   * The files that were changed and triggered the build. This only applies for partial builds.
   */
  changedFiles: FileInfo[];
}

/**
 * The data that is emitted for a CodeEngine "BuildFinished" event.
 */
export interface BuildFinishedEventData extends BuildStartingEventData, BuildSummary {}
