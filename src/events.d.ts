import { EventEmitter } from "events";
import { BuildSummary } from "./build-summary";
import { BuildContext, Context } from "./context";
import { ChangedFile } from "./file";
import { LogLevel } from "./logger";

/**
 * Events that can be emitted by a CodeEngine instance.
 */
export const enum EventName {
  BuildStarting = "buildStarting",
  BuildFinished = "buildFinished",
  FileChanged = "fileChanged",
  Error = "error",
  Log = "log",
}

/**
 * This event is fired whenever a build starts. It receives a `BuildContext` object,
 * which has information about the build.
 */
export type BuildStartingEventListener = (context: BuildContext) => void;

/**
 * This event is fired when a build completes. It receives a `BuildSummary` object
 * with the results of the build.
 */
export type BuildFinishedEventListener = (summary: BuildSummary) => void;

/**
 * This event is fired when a file change is detected. It receives a `ChangedFile` object.
 */
export type FileChangedEventListener = (file: ChangedFile, context: Context) => void;

/**
 * This event is fired whenever an unhandled error occurs.
 */
export type ErrorEventListener = (error: Error, context: Context) => void;

/**
 * This event is fired whenever CodeEngine or a plugin calls any `Logger` method.
 * It receives the message that was logged, the severity level, the error (if any),
 * and any other data that was provided.
 */
export type LogEventListener = (data: LogEventData, context: Context) => void;

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
 * An `EventEmitter` that emits CodeEngine events.
 *
 * @see https://nodejs.org/api/events.html#events_class_eventemitter
 */
export interface CodeEngineEventEmitter extends EventEmitter {
  addListener(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  addListener(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  addListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  addListener(event: EventName.Error, listener: ErrorEventListener): this;
  addListener(event: EventName.Log, listener: LogEventListener): this;

  on(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  on(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  on(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  on(event: EventName.Error, listener: ErrorEventListener): this;
  on(event: EventName.Log, listener: LogEventListener): this;

  once(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  once(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  once(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  once(event: EventName.Error, listener: ErrorEventListener): this;
  once(event: EventName.Log, listener: LogEventListener): this;

  prependListener(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  prependListener(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  prependListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  prependListener(event: EventName.Error, listener: ErrorEventListener): this;
  prependListener(event: EventName.Log, listener: LogEventListener): this;

  prependOnceListener(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  prependOnceListener(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  prependOnceListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  prependOnceListener(event: EventName.Error, listener: ErrorEventListener): this;
  prependOnceListener(event: EventName.Log, listener: LogEventListener): this;

  removeListener(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  removeListener(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  removeListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  removeListener(event: EventName.Error, listener: ErrorEventListener): this;
  removeListener(event: EventName.Log, listener: LogEventListener): this;

  off(event: EventName.BuildStarting, listener: BuildStartingEventListener): this;
  off(event: EventName.BuildFinished, listener: BuildFinishedEventListener): this;
  off(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  off(event: EventName.Error, listener: ErrorEventListener): this;
  off(event: EventName.Log, listener: LogEventListener): this;

  listeners(event: EventName.BuildStarting): BuildStartingEventListener[];
  listeners(event: EventName.BuildFinished): BuildFinishedEventListener[];
  listeners(event: EventName.FileChanged): FileChangedEventListener[];
  listeners(event: EventName.Error): ErrorEventListener[];
  listeners(event: EventName.Log): LogEventListener[];

  rawListeners(event: EventName.BuildStarting): BuildStartingEventListener[];
  rawListeners(event: EventName.BuildFinished): BuildFinishedEventListener[];
  rawListeners(event: EventName.FileChanged): FileChangedEventListener[];
  rawListeners(event: EventName.Error): ErrorEventListener[];
  rawListeners(event: EventName.Log): LogEventListener[];

  emit(event: EventName.BuildStarting, context: BuildContext): boolean;
  emit(event: EventName.BuildFinished, context: BuildSummary): boolean;
  emit(event: EventName.FileChanged, file: ChangedFile, context: Context): boolean;
  emit(event: EventName.Error, error: Error, context: Context): boolean;
  emit(event: EventName.Log, data: LogEventData, context: Context): boolean;

  removeAllListeners(event?: EventName): this;
  eventNames(): Array<EventName>;
  listenerCount(type: EventName): number;
}
