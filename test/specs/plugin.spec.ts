// tslint:disable: completed-docs no-async-without-await
import { BuildContext, BuildSummary, Context, File, FileChangedCallback, LogEventData, Plugin, PluginDefinition } from "../..";
import { testChangedFileInfo, testFileInfo } from "./file.spec";
import { testFilter } from "./filters.spec";
import { testModuleDefinition } from "./module-definition.spec";

export function testPluginDefinition(): PluginDefinition {
  let plugin: PluginDefinition = testSyncPlugin();
  plugin = (file: File, context: Context) => undefined;
  plugin = testModuleDefinition();
  return "lodash";
}

export function testEmptyPlugin(): Plugin {
  return {};
}

export function testNamedPlugin(): Plugin {
  return {
    name: "My Plugin",
  };
}

export function testProcessFilePlugin(): Plugin {
  return {
    processFile(file: File, context: Context) {
      return testFileInfo();
    }
  };
}

export function testSyncPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    processFile(file: File, context: Context) {
      return testFileInfo();
    },

    processFiles(files: AsyncIterable<File>, context: Context) {
      return testFileInfo();
    },

    read(context: Context) {
      return testFileInfo();
    },

    clean(context: Context) {
      return;
    },

    dispose(context: Context) {
      return;
    },

    onBuildStarting(context: BuildContext) {
      return;
    },

    onBuildFinished(summary: BuildSummary) {
      return;
    },

    onError(error: Error, context: Context) {
      return;
    },

    onLog(data: LogEventData, context: Context) {
      return;
    },
  };
}

export function testAsyncPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    async processFile(file: File, context: Context) {
      await Promise.resolve();
      return testFileInfo();
    },

    async processFiles(files: AsyncIterable<File>, context: Context) {
      await Promise.resolve();
      return testFileInfo();
    },

    async read(context: Context) {
      await Promise.resolve();
      return testFileInfo();
    },

    async* watch(context: Context) {
      await Promise.resolve();
      yield testChangedFileInfo();
    },

    async clean(context: Context) {
      await Promise.resolve();
    },

    async dispose(context: Context) {
      await Promise.resolve();
    },

    async onBuildStarting(context: BuildContext) {
      await Promise.resolve();
    },

    async onBuildFinished(summary: BuildSummary) {
      await Promise.resolve();
    },

    async onError(error: Error, context: Context) {
      await Promise.resolve();
    },

    async onLog(data: LogEventData, context: Context) {
      await Promise.resolve();
    },
  };
}

export function testAsyncIterableWatchPlugin(): Plugin {
  return {
    name: "My Plugin",

    async watch(context: Context) {
      return {
        [Symbol.asyncIterator]() {
          return {
            async next() {
              return { value: testChangedFileInfo() };
            }
          };
        }
      };
    },
  };
}

export function testAsyncIteratorWatchPlugin(): Plugin {
  return {
    name: "My Plugin",

    async watch(context: Context) {
      return {
        async next() {
          return { value: testChangedFileInfo() };
        }
      };
    },
  };
}

export function testCallbackWatchPlugin(): Plugin {
  return {
    name: "My Plugin",

    watch(context: Context, fileChanged: FileChangedCallback) {
      fileChanged(testChangedFileInfo());
    },
  };
}

export function testAsyncCallbackWatchPlugin(): Plugin {
  return {
    name: "My Plugin",

    async watch(context: Context, fileChanged: FileChangedCallback) {
      await Promise.resolve();
      fileChanged(testChangedFileInfo());
    },
  };
}

export function testGeneratorPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    * processFile(file: File, context: Context) {
      yield testFileInfo();
    },

    * processFiles(files: AsyncIterable<File>, context: Context) {
      yield testFileInfo();
    },

    * read(context: Context) {
      yield testFileInfo();
    },
  };
}

export function testAsyncGeneratorPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    async* processFile(file: File, context: Context) {
      yield testFileInfo();
    },

    async* processFiles(files: AsyncIterable<File>, context: Context) {
      yield testFileInfo();
    },

    async* read(context: Context) {
      yield testFileInfo();
    },
  };
}
