// tslint:disable: completed-docs
import { Summary } from "../../src";
import { testRun } from "./run.spec";

export function testSummary(): Summary {
  return {
    ...testRun(),
    input: {
      fileCount: 123,
      fileSize: 123,
    },
    output: {
      fileCount: 123,
      fileSize: 123,
    },
    time: {
      start: new Date(),
      end: new Date(),
      elapsed: 123,
    },
  };
}
