// tslint:disable: completed-docs
import { BuildContext, Context } from "../../";
import { testChangedFile } from "./file.spec";
import { testLogger } from "./logger.spec";

export function testContext(): Context {
  return {
    logger: testLogger(),
    cwd: process.cwd(),
    concurrency: 5,
    dev: true,
    debug: true,
  };
}

export function testBuildContext(): BuildContext {
  return {
    ...testContext(),
    fullBuild: false,
    partialBuild: true,
    changedFiles: [
      testChangedFile(),
      testChangedFile(),
      testChangedFile(),
    ],
  };
}
