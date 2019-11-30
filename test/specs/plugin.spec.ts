// tslint:disable: completed-docs no-async-without-await
import { Context, File, Plugin, PluginDefinition } from "../..";
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
  };
}

export function testAsyncPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    async processFile(file: File, context: Context) {
      return testFileInfo();
    },

    async processFiles(files: AsyncIterable<File>, context: Context) {
      return testFileInfo();
    },

    async read(context: Context) {
      return testFileInfo();
    },

    async* watch(context: Context) {
      yield testChangedFileInfo();
    },

    async clean(context: Context) {
      return;
    },

    async dispose(context: Context) {
      return;
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
