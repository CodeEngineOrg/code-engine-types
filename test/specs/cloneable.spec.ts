// tslint:disable: completed-docs
import { Cloneable, CloneableArray, CloneableMap, CloneableObject, CloneableSet } from "../../";

export function testCloneable(): Cloneable {
  return {
    notDefined: undefined,
    empty: null,  // tslint:disable-line: no-null-keyword
    string: "string",
    number: 123,
    boolean: true,
    bigint: BigInt(123),
    date: new Date(),
    regex: /^regex$/,
    object: testCloneableObject(),
    array: testCloneableArray(),
    set: testCloneableSet(),
    map: testCloneableMap(),
    arrayBuffer: new ArrayBuffer(0),
    dataView: new DataView(new ArrayBuffer(0)),
    int8Array: new Int8Array(),
    int16Array: new Int16Array(),
    int32Array: new Int32Array(),
    uint8Array: new Uint8Array(),
    uint8ClampedArray: new Uint8ClampedArray(),
    uint16Array: new Uint16Array(),
    uint32Array: new Uint32Array(),
    float32Array: new Float32Array(),
    float64Array: new Float64Array(),
  };
}


export function testCloneableArray(): CloneableArray {
  return [
    testCloneable(),
    testCloneable(),
    testCloneable(),
  ];
}


export function testCloneableSet(): CloneableSet {
  return new Set<Cloneable>();
}


export function testCloneableMap(): CloneableMap {
  return new Map<Cloneable, Cloneable>();
}


export function testCloneableObject(): CloneableObject {
  return {
    foo: testCloneable(),
    bar: testCloneable(),
    baz: testCloneable(),
  };
}
