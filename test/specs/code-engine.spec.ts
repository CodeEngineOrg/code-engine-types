import { EventEmitter } from "events";
import { Cloneable, CodeEngine, CodeEngineEventEmitter, PluginDefinition } from "../../";
import { testLogger } from "./logger.spec";
import { testSummary } from "./summary.spec";

export function testCodeEngine(): CodeEngine {
  let codeEngineEventEmitter = EventEmitter as unknown as (new () => CodeEngineEventEmitter);

  class Engine extends codeEngineEventEmitter implements CodeEngine {
    public readonly cwd = "/path/to/cwd";
    public readonly concurrency = 8;
    public readonly dev = false;
    public readonly debug = false;
    public readonly disposed = false;
    public readonly log = testLogger();

    public async use(..._plugins: PluginDefinition[]) {
      await Promise.resolve();
    }

    public async import(_module: string, _options?: Cloneable) {
      await Promise.resolve();
    }

    public async clean() {
      return Promise.resolve();
    }

    public async run() {
      await Promise.resolve();
      return testSummary();
    }

    public watch(_delay?: number) {
      return;
    }

    public async dispose() {
      await Promise.resolve();
    }
  }

  return new Engine();
}
