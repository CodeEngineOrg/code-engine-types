// tslint:disable: completed-docs
import { Context } from "../../";
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
