// tslint:disable: completed-docs no-async-without-await
import { File, FileChangedCallback, FileInfo, FileProcessor, Plugin, PluginDefinition, Run, ZeroOrMore } from "../..";
import { testChangedFileInfo, testFileInfo } from "./file.spec";
import { testFilter } from "./filters.spec";
import { testModuleDefinition } from "./module-definition.spec";

export function testPluginDefinition(): PluginDefinition {
  let plugin: PluginDefinition = testSyncPlugin();
  plugin = (file: File, run: Run) => undefined;
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
    processFile(file: File, run: Run) {
      return testFileInfo();
    }
  };
}

export function testSyncPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    processFile(file: File, run: Run) {
      return testFileInfo();
    },

    processFiles(files: AsyncIterable<File>, run: Run) {
      return testFileInfo();
    },

    read(run: Run) {
      return testFileInfo();
    },

    clean() {
      return;
    },

    *watch(fileChanged: FileChangedCallback) {
      yield testChangedFileInfo();
      fileChanged(testChangedFileInfo());
    },

    dispose() {
      return;
    },
  };
}

export function testAsyncPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    async processFile(file: File, run: Run) {
      await Promise.resolve();
      return testFileInfo();
    },

    async processFiles(files: AsyncIterable<File>, run: Run) {
      await Promise.resolve();
      return testFileInfo();
    },

    async read(run: Run) {
      await Promise.resolve();
      return testFileInfo();
    },

    async* watch(fileChanged: FileChangedCallback) {
      await Promise.resolve();
      yield testChangedFileInfo();
      fileChanged(testChangedFileInfo());
    },

    async clean() {
      await Promise.resolve();
    },

    async dispose() {
      await Promise.resolve();
    },
  };
}

export function testAsyncIterableWatchPlugin(): Plugin {
  return {
    name: "My Plugin",

    async watch() {
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

    async watch() {
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

    watch(fileChanged: FileChangedCallback) {
      fileChanged(testChangedFileInfo());
    },
  };
}

export function testAsyncCallbackWatchPlugin(): Plugin {
  return {
    name: "My Plugin",

    async watch(fileChanged: FileChangedCallback) {
      await Promise.resolve();
      fileChanged(testChangedFileInfo());
    },
  };
}

export function testGeneratorPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    * processFile(file: File, run: Run) {
      yield testFileInfo();
    },

    * processFiles(files: AsyncIterable<File>, run: Run) {
      yield testFileInfo();
    },

    * read(run: Run) {
      yield testFileInfo();
    },
  };
}

export function testAsyncGeneratorPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    async* processFile(file: File, run: Run) {
      yield testFileInfo();
    },

    async* processFiles(files: AsyncIterable<File>, run: Run) {
      yield testFileInfo();
    },

    async* read(run: Run) {
      yield testFileInfo();
    },
  };
}

export function testZeroOrMore(): ZeroOrMore<FileInfo> {
  let file = testFileInfo();
  let files: ZeroOrMore<FileInfo>;
  files = undefined;
  files = file;
  files = [file, file, file];
  files = {
    next() {
      return { value: file };
    }
  };
  files = (function* generator() {
    yield file;
  })();
  files = (async function* generator() {
    yield file;
  })();
}

export function testFileProcessor(): FileProcessor {
  return (file: File, run: Run) => testZeroOrMore();
}
