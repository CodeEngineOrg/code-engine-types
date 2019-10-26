// tslint:disable: completed-docs
import { BuildFinishedEventData, BuildStartingEventData, EventName, LogEventData } from "../../";
import { testBuildSummary } from "./build-summary.spec";
import { testContext } from "./context.spec";
import { testChangedFileInfo } from "./file.spec";
import { testLogLevel } from "./logger.spec";

export function testEventName(): EventName {
  let name: EventName = EventName.Log;
  name = EventName.Error;
  name = EventName.BuildStarting;
  name = EventName.BuildFinished;
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

export function testBuildStartingEventData(): BuildStartingEventData {
  return {
    ...testContext(),
    fullBuild: false,
    partialBuild: true,
    changedFiles: [
      testChangedFileInfo(),
      testChangedFileInfo(),
      testChangedFileInfo(),
    ],
  };
}

export function testBuildFinishedEventData(): BuildFinishedEventData {
  return {
    ...testBuildStartingEventData(),
    ...testBuildSummary(),
  };
}
