// tslint:disable: completed-docs no-async-without-await
import { Context, File, FileInfo, FileProcessor, ZeroOrMore } from "../../";
import { testFileInfo } from "./file.spec";

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
  return (file: File, context: Context) => testZeroOrMore();
}
