// tslint:disable: completed-docs
import { Summary } from "../../src";
import { testContext } from "./context.spec";

export function testSummary(): Summary {
  return {
    ...testContext(),
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
