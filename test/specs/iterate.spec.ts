// tslint:disable: completed-docs
import { AsyncAllGenerator, AsyncAllIterable, AsyncAllIterableIterator, AsyncIterateAll, File } from "../../";
import { testFile } from "./file.spec";

export function testAsyncIterateAll(): AsyncIterateAll<File> {
  return {
    async all() {
      return [];
    }
  };
}

export function testAsyncAllIterable(): AsyncAllIterable<File> {
  return {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          return { done: true, value: undefined };
        },
      };
    },

    async all() {
      return [];
    },
  };
}

export function testAsyncAllIterableIterator(): AsyncAllIterableIterator<File> {
  return {
    [Symbol.asyncIterator]() {
      return this;
    },

    async next() {
      return { done: true, value: undefined };
    },

    async all() {
      return [];
    },
  };
}

export function testAsyncAllGenerator(): AsyncAllGenerator<File> {
  // tslint:disable-next-line: no-async-without-await
  async function* generator() {
    yield testFile();
  }

  let allGenerator = generator() as AsyncAllGenerator<File>;
  allGenerator.all = async () => [];
  return allGenerator;
}
