/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars-experimental */
import { EventEmitter } from "events";
import { ChangedFile, ChangeEventListener, CodeEngineEventEmitter, ErrorEventListener, EventName, FinishEventListener, LogEventData, LogEventListener, Run, StartEventListener, Summary } from "../../";
import { testChangedFile } from "./file.spec";
import { testLogLevel } from "./logger.spec";
import { testRun } from "./run.spec";
import { testSummary } from "./summary.spec";

export function testEventName(): EventName {
  let name: EventName = EventName.Log;
  name = EventName.Error;
  name = EventName.Start;
  name = EventName.Finish;
  name = EventName.Change;
  return name;
}

export function testLogEventData(): LogEventData {
  return {
    level: testLogLevel(),
    message: "",
    error: new Error(),
    foo: "bar",
    baz: 42,
  };
}

export function testStartEventListener(): StartEventListener {
  return (_run: Run) => {
    return;
  };
}

export function testFinishEventListener(): FinishEventListener {
  return (_summary: Summary) => {
    return;
  };
}

export function testChangeEventListener(): ChangeEventListener {
  return (_file: ChangedFile) => {
    return;
  };
}

export function testErrorEventListener(): ErrorEventListener {
  return (_error: Error) => {
    return;
  };
}

export function testLogEventListener(): LogEventListener {
  return (_data: LogEventData) => {
    return;
  };
}

export function testCodeEngineEventEmitter(): CodeEngineEventEmitter {
  let emitter = new EventEmitter() as CodeEngineEventEmitter;

  emitter.addListener(EventName.Start, testStartEventListener());
  emitter.addListener(EventName.Finish, testFinishEventListener());
  emitter.addListener(EventName.Change, testChangeEventListener());
  emitter.addListener(EventName.Error, testErrorEventListener());
  emitter.addListener(EventName.Log, testLogEventListener());

  emitter.on(EventName.Start, testStartEventListener());
  emitter.on(EventName.Finish, testFinishEventListener());
  emitter.on(EventName.Change, testChangeEventListener());
  emitter.on(EventName.Error, testErrorEventListener());
  emitter.on(EventName.Log, testLogEventListener());

  emitter.once(EventName.Start, testStartEventListener());
  emitter.once(EventName.Finish, testFinishEventListener());
  emitter.once(EventName.Change, testChangeEventListener());
  emitter.once(EventName.Error, testErrorEventListener());
  emitter.once(EventName.Log, testLogEventListener());

  emitter.prependListener(EventName.Start, testStartEventListener());
  emitter.prependListener(EventName.Finish, testFinishEventListener());
  emitter.prependListener(EventName.Change, testChangeEventListener());
  emitter.prependListener(EventName.Error, testErrorEventListener());
  emitter.prependListener(EventName.Log, testLogEventListener());

  emitter.prependOnceListener(EventName.Start, testStartEventListener());
  emitter.prependOnceListener(EventName.Finish, testFinishEventListener());
  emitter.prependOnceListener(EventName.Change, testChangeEventListener());
  emitter.prependOnceListener(EventName.Error, testErrorEventListener());
  emitter.prependOnceListener(EventName.Log, testLogEventListener());

  emitter.removeListener(EventName.Start, testStartEventListener());
  emitter.removeListener(EventName.Finish, testFinishEventListener());
  emitter.removeListener(EventName.Change, testChangeEventListener());
  emitter.removeListener(EventName.Error, testErrorEventListener());
  emitter.removeListener(EventName.Log, testLogEventListener());

  emitter.off(EventName.Start, testStartEventListener());
  emitter.off(EventName.Finish, testFinishEventListener());
  emitter.off(EventName.Change, testChangeEventListener());
  emitter.off(EventName.Error, testErrorEventListener());
  emitter.off(EventName.Log, testLogEventListener());

  let startListeners: StartEventListener[] = emitter.listeners(EventName.Start);
  let finishListeners: FinishEventListener[] = emitter.listeners(EventName.Finish);
  let fileChangedListeners: ChangeEventListener[] = emitter.listeners(EventName.Change);
  let errorListeners: ErrorEventListener[] = emitter.listeners(EventName.Error);
  let logListeners: LogEventListener[] = emitter.listeners(EventName.Log);

  startListeners = emitter.rawListeners(EventName.Start);
  finishListeners = emitter.rawListeners(EventName.Finish);
  fileChangedListeners = emitter.rawListeners(EventName.Change);
  errorListeners = emitter.rawListeners(EventName.Error);
  logListeners = emitter.rawListeners(EventName.Log);

  emitter.emit(EventName.Start, testRun());
  emitter.emit(EventName.Finish, testSummary());
  emitter.emit(EventName.Change, testChangedFile());
  emitter.emit(EventName.Error, new Error());
  emitter.emit(EventName.Log, testLogEventData());

  emitter.removeAllListeners();
  emitter.removeAllListeners(EventName.Start);
  emitter.removeAllListeners(EventName.Finish);
  emitter.removeAllListeners(EventName.Change);
  emitter.removeAllListeners(EventName.Error);
  emitter.removeAllListeners(EventName.Log);

  emitter.listenerCount(EventName.Start);
  emitter.listenerCount(EventName.Finish);
  emitter.listenerCount(EventName.Change);
  emitter.listenerCount(EventName.Error);
  emitter.listenerCount(EventName.Log);

  let eventNames: EventName[] = emitter.eventNames();

  return emitter;
}
