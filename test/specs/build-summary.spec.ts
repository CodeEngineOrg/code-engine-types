// tslint:disable: completed-docs
import { BuildSummary } from "../../";
import { testBuildContext } from "./context.spec";

export function testBuildSummary(): BuildSummary {
  return {
    ...testBuildContext(),
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
