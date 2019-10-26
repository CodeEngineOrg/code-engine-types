import { BuildSummary } from "./build-summary";
import { Context } from "./context";
import { ChangedFileInfo } from "./file";
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
   * Indicates whether this is a full build (as opposed to a partial re-build).
   */
  fullBuild: boolean;

  /**
   * Indicates whether this is a partial build, which only includes files that have changed
   * since the previous build.
   */
  partialBuild: boolean;

  /**
   * The file changes that have occurred since the previous build. For full builds this array
   * is empty.
   */
  changedFiles: ChangedFileInfo[];
}

/**
 * The data that is emitted for a CodeEngine "BuildFinished" event.
 */
export interface BuildFinishedEventData extends BuildStartingEventData, BuildSummary {}
