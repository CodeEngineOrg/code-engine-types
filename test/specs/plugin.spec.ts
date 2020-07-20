/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-unused-vars-experimental */
import { EventName, File, FileChangedCallback, FileInfo, FileProcessor, Plugin, PluginDefinition, Run, ZeroOrMore } from "../..";
import { testChangedFileInfo, testFileInfo } from "./file.spec";
import { testFilter } from "./filters.spec";
import { testModuleDefinition } from "./module-definition.spec";

export function testPluginDefinition(): PluginDefinition {
  let plugin: PluginDefinition = testSyncPlugin();
  plugin = (_file: File, _run: Run) => undefined;
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
    processFile(_file: File, _run: Run) {
      return testFileInfo();
    }
  };
}

export function testSyncPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    initialize() {
      return;
    },

    processFile(_file: File, _run: Run) {
      return testFileInfo();
    },

    processFiles(_files: AsyncIterable<File>, _run: Run) {
      return testFileInfo();
    },

    read(_run: Run) {
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

    async initialize() {
      await Promise.resolve();
    },

    async processFile(_file: File, _run: Run) {
      await Promise.resolve();
      return testFileInfo();
    },

    async processFiles(_files: AsyncIterable<File>, _run: Run) {
      await Promise.resolve();
      return testFileInfo();
    },

    async read(_run: Run) {
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

    * processFile(_file: File, _run: Run) {
      yield testFileInfo();
    },

    * processFiles(_files: AsyncIterable<File>, _run: Run) {
      yield testFileInfo();
    },

    * read(_run: Run) {
      yield testFileInfo();
    },
  };
}

export function testAsyncGeneratorPlugin(): Plugin {
  return {
    name: "My Plugin",

    filter: testFilter(),

    async* processFile(_file: File, _run: Run) {
      yield testFileInfo();
    },

    async* processFiles(_files: AsyncIterable<File>, _run: Run) {
      yield testFileInfo();
    },

    async* read(_run: Run) {
      yield testFileInfo();
    },
  };
}

export function testMountedPlugin() {
  let plugin: Plugin = {
    name: "My Plugin",

    filter: testFilter(),

    initialize() {
      if (this.engine.debug) {
        return;
      }
    },

    processFile(file: File, _run: Run) {
      file.path = this.engine.cwd + this.name.slice(1);
      return file;
    },

    async* processFiles(files: AsyncIterable<File>, _run: Run) {
      for await (let file of files) {
        if (this.engine.dev) {
          yield file;
        }
      }
    },

    read(_run: Run) {
      return { path: this.engine.cwd + this.name.slice(1) };
    },

    clean() {
      if (this.engine.debug) {
        return;
      }
    },

    watch(fileChanged: FileChangedCallback) {
      this.engine.on(EventName.Change, (file) => {
        if (this.engine.debug) {
          fileChanged(file);
        }
      });
    },

    dispose() {
      if (this.engine.debug) {
        return;
      }
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
  }());
  files = (async function* generator() {
    yield file;
  }());
}

export function testFileProcessor(): FileProcessor {
  return (_file: File, _run: Run) => testZeroOrMore();
}
