import { EventEmitter } from "events";
import { ChangedFile } from "./file";
import { LogLevel } from "./logger";
import { Run } from "./run";
import { Summary } from "./summary";

/**
 * Events that can be emitted by a CodeEngine instance.
 */
export const enum EventName {
  Start = "start",
  Finish = "finish",
  Change = "change",
  Error = "error",
  Log = "log",
}

/**
 * This event is fired whenever a run starts. It receives a `Run` object,
 * which has information about the run.
 */
export type StartEventListener = (run: Run) => void;

/**
 * This event is fired when a run completes. It receives a `Summary` object
 * with the results of the run.
 */
export type FinishEventListener = (summary: Summary) => void;

/**
 * This event is fired when a file change is detected. It receives a `ChangedFile` object.
 */
export type ChangeEventListener = (file: ChangedFile) => void;

/**
 * This event is fired whenever an unhandled error occurs.
 */
export type ErrorEventListener = (error: Error) => void;

/**
 * This event is fired whenever CodeEngine or a plugin calls any `Logger` method.
 * It receives the message that was logged, the severity level, the error (if any),
 * and any other data that was provided.
 */
export type LogEventListener = (data: LogEventData) => void;

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
  addListener(event: EventName.Start, listener: StartEventListener): this;
  addListener(event: EventName.Finish, listener: FinishEventListener): this;
  addListener(event: EventName.Change, listener: ChangeEventListener): this;
  addListener(event: EventName.Error, listener: ErrorEventListener): this;
  addListener(event: EventName.Log, listener: LogEventListener): this;

  on(event: EventName.Start, listener: StartEventListener): this;
  on(event: EventName.Finish, listener: FinishEventListener): this;
  on(event: EventName.Change, listener: ChangeEventListener): this;
  on(event: EventName.Error, listener: ErrorEventListener): this;
  on(event: EventName.Log, listener: LogEventListener): this;

  once(event: EventName.Start, listener: StartEventListener): this;
  once(event: EventName.Finish, listener: FinishEventListener): this;
  once(event: EventName.Change, listener: ChangeEventListener): this;
  once(event: EventName.Error, listener: ErrorEventListener): this;
  once(event: EventName.Log, listener: LogEventListener): this;

  prependListener(event: EventName.Start, listener: StartEventListener): this;
  prependListener(event: EventName.Finish, listener: FinishEventListener): this;
  prependListener(event: EventName.Change, listener: ChangeEventListener): this;
  prependListener(event: EventName.Error, listener: ErrorEventListener): this;
  prependListener(event: EventName.Log, listener: LogEventListener): this;

  prependOnceListener(event: EventName.Start, listener: StartEventListener): this;
  prependOnceListener(event: EventName.Finish, listener: FinishEventListener): this;
  prependOnceListener(event: EventName.Change, listener: ChangeEventListener): this;
  prependOnceListener(event: EventName.Error, listener: ErrorEventListener): this;
  prependOnceListener(event: EventName.Log, listener: LogEventListener): this;

  removeListener(event: EventName.Start, listener: StartEventListener): this;
  removeListener(event: EventName.Finish, listener: FinishEventListener): this;
  removeListener(event: EventName.Change, listener: ChangeEventListener): this;
  removeListener(event: EventName.Error, listener: ErrorEventListener): this;
  removeListener(event: EventName.Log, listener: LogEventListener): this;

  off(event: EventName.Start, listener: StartEventListener): this;
  off(event: EventName.Finish, listener: FinishEventListener): this;
  off(event: EventName.Change, listener: ChangeEventListener): this;
  off(event: EventName.Error, listener: ErrorEventListener): this;
  off(event: EventName.Log, listener: LogEventListener): this;

  listeners(event: EventName.Start): StartEventListener[];
  listeners(event: EventName.Finish): FinishEventListener[];
  listeners(event: EventName.Change): ChangeEventListener[];
  listeners(event: EventName.Error): ErrorEventListener[];
  listeners(event: EventName.Log): LogEventListener[];

  rawListeners(event: EventName.Start): StartEventListener[];
  rawListeners(event: EventName.Finish): FinishEventListener[];
  rawListeners(event: EventName.Change): ChangeEventListener[];
  rawListeners(event: EventName.Error): ErrorEventListener[];
  rawListeners(event: EventName.Log): LogEventListener[];

  emit(event: EventName.Start, run: Run): boolean;
  emit(event: EventName.Finish, summary: Summary): boolean;
  emit(event: EventName.Change, file: ChangedFile): boolean;
  emit(event: EventName.Error, error: Error): boolean;
  emit(event: EventName.Log, data: LogEventData): boolean;

  removeAllListeners(event?: EventName): this;
  eventNames(): EventName[];
  listenerCount(type: EventName): number;
}
