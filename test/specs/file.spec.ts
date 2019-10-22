// tslint:disable: completed-docs
import { AnyContents, File, FileInfo, FileMetadata } from "../../";
import { testCloneable } from "./cloneable.spec";

export function testFile(): File {
  return {
    createdAt: new Date(),
    modifiedAt: new Date(),
    source: "file://path/to/img/logos/vector.svg",
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
