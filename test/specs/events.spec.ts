// tslint:disable: completed-docs
import { EventName, LogEventData } from "../../";
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
