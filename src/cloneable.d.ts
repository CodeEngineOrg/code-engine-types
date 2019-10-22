/**
 * All Cloneable types
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
 */
export type Cloneable =
  // tslint:disable-next-line: no-null-undefined-union
  undefined | null | string | number | boolean | bigint | Date | RegExp | CloneableObject | CloneableArray |
  CloneableSet | CloneableMap | ArrayBuffer | DataView | Int8Array | Int16Array | Int32Array |
  Uint8Array | Uint8ClampedArray | Uint16Array | Uint32Array | Float32Array | Float64Array;

/**
 * A Cloneable Array
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
 */
export interface CloneableArray extends Array<Cloneable> {}

/**
 * A Cloneable Set
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
 */
export interface CloneableSet extends Set<Cloneable> {}

/**
 * A Cloneable Map
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
 */
export interface CloneableMap extends Map<Cloneable, Cloneable> {}

/**
 * A Cloneable Object
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
 */
export interface CloneableObject { [key: string]: Cloneable; }
