// tslint:disable: completed-docs
import { Context } from "../../";
import { testChangedFile } from "./file.spec";
import { testLogger } from "./logger.spec";

export function testContext(): Context {
  return {
    log: testLogger(),
    cwd: process.cwd(),
    concurrency: 5,
    dev: true,
    debug: true,
    full: false,
    partial: true,
    changedFiles: [
      testChangedFile(),
      testChangedFile(),
      testChangedFile(),
    ],
  };
}
