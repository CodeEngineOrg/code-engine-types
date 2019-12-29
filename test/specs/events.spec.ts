// tslint:disable: completed-docs
import { EventEmitter } from "events";
import { BuildContext, BuildFinishedEventListener, BuildStartingEventListener, BuildSummary, ChangedFile, CodeEngineEventEmitter, Context, ErrorEventListener, EventName, FileChangedEventListener, LogEventData, LogEventListener } from "../../";
import { testBuildSummary } from "./build-summary.spec";
import { testBuildContext, testContext } from "./context.spec";
import { testChangedFile } from "./file.spec";
import { testLogLevel } from "./logger.spec";

export function testEventName(): EventName {
  let name: EventName = EventName.Log;
  name = EventName.Error;
  name = EventName.BuildStarting;
  name = EventName.BuildFinished;
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

export function testBuildStartingEventListener(): BuildStartingEventListener {
  return (context: BuildContext) => {
    return;
  };
}

export function testBuildFinishedEventListener(): BuildFinishedEventListener {
  return (summary: BuildSummary) => {
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

  emitter.addListener(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.addListener(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.addListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.addListener(EventName.Error, testErrorEventListener());
  emitter.addListener(EventName.Log, testLogEventListener());

  emitter.on(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.on(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.on(EventName.FileChanged, testFileChangedEventListener());
  emitter.on(EventName.Error, testErrorEventListener());
  emitter.on(EventName.Log, testLogEventListener());

  emitter.once(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.once(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.once(EventName.FileChanged, testFileChangedEventListener());
  emitter.once(EventName.Error, testErrorEventListener());
  emitter.once(EventName.Log, testLogEventListener());

  emitter.prependListener(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.prependListener(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.prependListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.prependListener(EventName.Error, testErrorEventListener());
  emitter.prependListener(EventName.Log, testLogEventListener());

  emitter.prependOnceListener(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.prependOnceListener(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.prependOnceListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.prependOnceListener(EventName.Error, testErrorEventListener());
  emitter.prependOnceListener(EventName.Log, testLogEventListener());

  emitter.removeListener(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.removeListener(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.removeListener(EventName.FileChanged, testFileChangedEventListener());
  emitter.removeListener(EventName.Error, testErrorEventListener());
  emitter.removeListener(EventName.Log, testLogEventListener());

  emitter.off(EventName.BuildStarting, testBuildStartingEventListener());
  emitter.off(EventName.BuildFinished, testBuildFinishedEventListener());
  emitter.off(EventName.FileChanged, testFileChangedEventListener());
  emitter.off(EventName.Error, testErrorEventListener());
  emitter.off(EventName.Log, testLogEventListener());

  let buildStartingListeners: BuildStartingEventListener[] = emitter.listeners(EventName.BuildStarting);
  let buildFinishedListeners: BuildFinishedEventListener[] = emitter.listeners(EventName.BuildFinished);
  let fileChangedListeners: FileChangedEventListener[] = emitter.listeners(EventName.FileChanged);
  let errorListeners: ErrorEventListener[] = emitter.listeners(EventName.Error);
  let logListeners: LogEventListener[] = emitter.listeners(EventName.Log);

  buildStartingListeners = emitter.rawListeners(EventName.BuildStarting);
  buildFinishedListeners = emitter.rawListeners(EventName.BuildFinished);
  fileChangedListeners = emitter.rawListeners(EventName.FileChanged);
  errorListeners = emitter.rawListeners(EventName.Error);
  logListeners = emitter.rawListeners(EventName.Log);

  emitter.emit(EventName.BuildStarting, testBuildContext());
  emitter.emit(EventName.BuildFinished, testBuildSummary());
  emitter.emit(EventName.FileChanged, testChangedFile(), testContext());
  emitter.emit(EventName.Error, new Error(), testContext());
  emitter.emit(EventName.Log, testLogEventData(), testContext());

  emitter.removeAllListeners();
  emitter.removeAllListeners(EventName.BuildStarting);
  emitter.removeAllListeners(EventName.BuildFinished);
  emitter.removeAllListeners(EventName.FileChanged);
  emitter.removeAllListeners(EventName.Error);
  emitter.removeAllListeners(EventName.Log);

  emitter.listenerCount(EventName.BuildStarting);
  emitter.listenerCount(EventName.BuildFinished);
  emitter.listenerCount(EventName.FileChanged);
  emitter.listenerCount(EventName.Error);
  emitter.listenerCount(EventName.Log);

  let eventNames: EventName[] = emitter.eventNames();

  return emitter;
}
