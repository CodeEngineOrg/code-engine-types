// tslint:disable: completed-docs
import { BuildSummary } from "../../";

export function testBuildSummary(): BuildSummary {
  return {
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

export function testFailedBuildSummary(): BuildSummary {
  return {
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
    error: new RangeError(),
  };
}
