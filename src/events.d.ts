import { EventEmitter } from "events";
import { Context } from "./context";
import { ChangedFile } from "./file";
import { LogLevel } from "./logger";
import { Summary } from "./summary";

/**
 * Events that can be emitted by a CodeEngine instance.
 */
export const enum EventName {
  Start = "start",
  Finish = "finish",
  FileChanged = "fileChanged",
  Error = "error",
  Log = "log",
}

/**
 * This event is fired whenever a run starts. It receives a `Context` object,
 * which has information about the run.
 */
export type StartEventListener = (context: Context) => void;

/**
 * This event is fired when a run completes. It receives a `Summary` object
 * with the results of the run.
 */
export type FinishEventListener = (summary: Summary) => void;

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
  // tslint:disable: completed-docs
  addListener(event: EventName.Start, listener: StartEventListener): this;
  addListener(event: EventName.Finish, listener: FinishEventListener): this;
  addListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  addListener(event: EventName.Error, listener: ErrorEventListener): this;
  addListener(event: EventName.Log, listener: LogEventListener): this;

  on(event: EventName.Start, listener: StartEventListener): this;
  on(event: EventName.Finish, listener: FinishEventListener): this;
  on(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  on(event: EventName.Error, listener: ErrorEventListener): this;
  on(event: EventName.Log, listener: LogEventListener): this;

  once(event: EventName.Start, listener: StartEventListener): this;
  once(event: EventName.Finish, listener: FinishEventListener): this;
  once(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  once(event: EventName.Error, listener: ErrorEventListener): this;
  once(event: EventName.Log, listener: LogEventListener): this;

  prependListener(event: EventName.Start, listener: StartEventListener): this;
  prependListener(event: EventName.Finish, listener: FinishEventListener): this;
  prependListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  prependListener(event: EventName.Error, listener: ErrorEventListener): this;
  prependListener(event: EventName.Log, listener: LogEventListener): this;

  prependOnceListener(event: EventName.Start, listener: StartEventListener): this;
  prependOnceListener(event: EventName.Finish, listener: FinishEventListener): this;
  prependOnceListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  prependOnceListener(event: EventName.Error, listener: ErrorEventListener): this;
  prependOnceListener(event: EventName.Log, listener: LogEventListener): this;

  removeListener(event: EventName.Start, listener: StartEventListener): this;
  removeListener(event: EventName.Finish, listener: FinishEventListener): this;
  removeListener(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  removeListener(event: EventName.Error, listener: ErrorEventListener): this;
  removeListener(event: EventName.Log, listener: LogEventListener): this;

  off(event: EventName.Start, listener: StartEventListener): this;
  off(event: EventName.Finish, listener: FinishEventListener): this;
  off(event: EventName.FileChanged, listener: FileChangedEventListener): this;
  off(event: EventName.Error, listener: ErrorEventListener): this;
  off(event: EventName.Log, listener: LogEventListener): this;

  listeners(event: EventName.Start): StartEventListener[];
  listeners(event: EventName.Finish): FinishEventListener[];
  listeners(event: EventName.FileChanged): FileChangedEventListener[];
  listeners(event: EventName.Error): ErrorEventListener[];
  listeners(event: EventName.Log): LogEventListener[];

  rawListeners(event: EventName.Start): StartEventListener[];
  rawListeners(event: EventName.Finish): FinishEventListener[];
  rawListeners(event: EventName.FileChanged): FileChangedEventListener[];
  rawListeners(event: EventName.Error): ErrorEventListener[];
  rawListeners(event: EventName.Log): LogEventListener[];

  emit(event: EventName.Start, context: Context): boolean;
  emit(event: EventName.Finish, context: Summary): boolean;
  emit(event: EventName.FileChanged, file: ChangedFile, context: Context): boolean;
  emit(event: EventName.Error, error: Error, context: Context): boolean;
  emit(event: EventName.Log, data: LogEventData, context: Context): boolean;

  removeAllListeners(event?: EventName): this;
  eventNames(): EventName[];
  listenerCount(type: EventName): number;
}
