// tslint:disable: completed-docs
import { AnyContents, ChangedFileInfo, File, FileChange, FileInfo, FileMetadata, SourceMap } from "../../";
import { testCloneable } from "./cloneable.spec";

export function testFile(): File {
  return {
    createdAt: new Date(),
    modifiedAt: new Date(),
    source: "file://path/to/img/logos/vector.svg",
    sourceMap: testSourceMap(),
    path: "img/logos/vector.svg",
    dir: "img/logos",
    name: "vector.svg",
    extension: ".svg",
    metadata: testFileMetadata(),
    contents: Buffer.alloc(0),
    text: "",
    size: 0,
  };
}

export function testFileInfo(): FileInfo {
  return {
    createdAt: new Date(),
    modifiedAt: new Date(),
    source: "file://path/to/img/logos/vector.svg",
    sourceMap: testSourceMap(),
    path: "img/logos/vector.svg",
    metadata: testFileMetadata(),
    contents: testAnyContents(),
    text: "",
  };
}

export function testFileMetadata(): FileMetadata {
  return {
    foo: "bar",
    biz: 42,
    baz: testCloneable(),
  };
}

export function testAnyContents(): AnyContents {
  let contents: AnyContents = "";
  contents = Buffer.alloc(0);
  contents = new Uint8Array();
  return new ArrayBuffer(0);
}

export function testSourceMap(): SourceMap {
  return {
    version: 3,
    file: "file.js",
    sourceRoot: "../src",
    sources: [
      "file.ts"
    ],
    names: [
      "foo",
      "bar",
    ],
    mappings: ";;AACA,8CAA8C;AAC9C",
    sourcesContent: [
      "export class Foo { bar() {} }"
    ],
  };
}

export function testChangedFileInfo(): ChangedFileInfo {
  return {
    ...testFileInfo(),
    change: testFileChange(),
  };
}

export function testFileChange(): FileChange {
  let change: FileChange = FileChange.Created;
  change = FileChange.Modified;
  change = FileChange.Deleted;
  return change;
}
