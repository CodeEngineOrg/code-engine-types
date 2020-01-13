// tslint:disable: completed-docs
import { EventEmitter } from "events";
import { ChangedFile, CodeEngineEventEmitter, Context, ErrorEventListener, EventName, FileChangedEventListener, FinishEventListener, LogEventData, LogEventListener, StartEventListener, Summary } from "../../";
import { testContext } from "./context.spec";
import { testChangedFile } from "./file.spec";
import { testLogLevel } from "./logger.spec";
import { testSummary } from "./summary.spec";

export function testEventName(): EventName {
  let name: EventName = EventName.Log;
  name = EventName.Error;
  name = EventName.Start;
  name = EventName.Finish;
  name = EventName.FileChanged;
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
  return (context: Context) => {
    return;
  };
}

export function testFinishEventListener(): FinishEventListener {
  return (summary: Summary) => {
    return;
  };
}

export function testFileChangedEventListener(): FileChangedEventListener {
  return (file: ChangedFile, context: Context) => {
    return;
  };
}

export function testErrorEventListener(): ErrorEventListener {
  return (error: Error, context: Context) => {
    return;
  };
}

export function testLogEventListener(): LogEventListener {
  return (data: LogEventData, context: Context) => {
    return;
  };
}

export function testCodeEngineEventEmitter(): CodeEngineEventEmitter {
  let emitter = new EventEmitter() as CodeEngineEventEmitter;

  emitter.addListener(EventName.Start, testStartEventListener());
  emitter.addListener(EventName.Finish, testFinishEventListener());
  emitter.addListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.addListener(EventName.Error, testErrorEventListener());
  emitter.addListener(EventName.Log, testLogEventListener());

  emitter.on(EventName.Start, testStartEventListener());
  emitter.on(EventName.Finish, testFinishEventListener());
  emitter.on(EventName.FileChanged, testFileChangedEventListener());
  emitter.on(EventName.Error, testErrorEventListener());
  emitter.on(EventName.Log, testLogEventListener());

  emitter.once(EventName.Start, testStartEventListener());
  emitter.once(EventName.Finish, testFinishEventListener());
  emitter.once(EventName.FileChanged, testFileChangedEventListener());
  emitter.once(EventName.Error, testErrorEventListener());
  emitter.once(EventName.Log, testLogEventListener());

  emitter.prependListener(EventName.Start, testStartEventListener());
  emitter.prependListener(EventName.Finish, testFinishEventListener());
  emitter.prependListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.prependListener(EventName.Error, testErrorEventListener());
  emitter.prependListener(EventName.Log, testLogEventListener());

  emitter.prependOnceListener(EventName.Start, testStartEventListener());
  emitter.prependOnceListener(EventName.Finish, testFinishEventListener());
  emitter.prependOnceListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.prependOnceListener(EventName.Error, testErrorEventListener());
  emitter.prependOnceListener(EventName.Log, testLogEventListener());

  emitter.removeListener(EventName.Start, testStartEventListener());
  emitter.removeListener(EventName.Finish, testFinishEventListener());
  emitter.removeListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.removeListener(EventName.Error, testErrorEventListener());
  emitter.removeListener(EventName.Log, testLogEventListener());

  emitter.off(EventName.Start, testStartEventListener());
  emitter.off(EventName.Finish, testFinishEventListener());
  emitter.off(EventName.FileChanged, testFileChangedEventListener());
  emitter.off(EventName.Error, testErrorEventListener());
  emitter.off(EventName.Log, testLogEventListener());

  let startListeners: StartEventListener[] = emitter.listeners(EventName.Start);
  let finishListeners: FinishEventListener[] = emitter.listeners(EventName.Finish);
  let fileChangedListeners: FileChangedEventListener[] = emitter.listeners(EventName.FileChanged);
  let errorListeners: ErrorEventListener[] = emitter.listeners(EventName.Error);
  let logListeners: LogEventListener[] = emitter.listeners(EventName.Log);

  startListeners = emitter.rawListeners(EventName.Start);
  finishListeners = emitter.rawListeners(EventName.Finish);
  fileChangedListeners = emitter.rawListeners(EventName.FileChanged);
  errorListeners = emitter.rawListeners(EventName.Error);
  logListeners = emitter.rawListeners(EventName.Log);

  emitter.emit(EventName.Start, testContext());
  emitter.emit(EventName.Finish, testSummary());
  emitter.emit(EventName.FileChanged, testChangedFile(), testContext());
  emitter.emit(EventName.Error, new Error(), testContext());
  emitter.emit(EventName.Log, testLogEventData(), testContext());

  emitter.removeAllListeners();
  emitter.removeAllListeners(EventName.Start);
  emitter.removeAllListeners(EventName.Finish);
  emitter.removeAllListeners(EventName.FileChanged);
  emitter.removeAllListeners(EventName.Error);
  emitter.removeAllListeners(EventName.Log);

  emitter.listenerCount(EventName.Start);
  emitter.listenerCount(EventName.Finish);
  emitter.listenerCount(EventName.FileChanged);
  emitter.listenerCount(EventName.Error);
  emitter.listenerCount(EventName.Log);

  let eventNames: EventName[] = emitter.eventNames();

  return emitter;
}
