import { URL } from "url";
import { Cloneable } from "./cloneable";

/**
 * A CodeEngine file. This does not necessarily correspond to a file on disk.
 * Files are a virtual concept with a path, name, and data contents. Those values could
 * come from a database, a CMS, an RSS feed, or any other source.
 */
export interface File {
  /**
   * The date and time that the file was first created at its source.
   */
  createdAt: Date;

  /**
   * The date and time that the file was last modified at its source.
   */
  modifiedAt: Date;

  /**
   * Arbitrary metadata that can be added by plugins.
   */
  metadata: FileMetadata;

  /**
   * The original source of the file. The value depends on where the file came from.
   *
   * Examples:
   *
   *  - A web page: `http://example.com/file.html`
   *  - A local file: `file://path/to/file.txt`
   *  - A JSON schema: `http://example.com/schema.json#/definitions/thing`
   *  - A database record: `mongodb://example.com:27017/products/12345`
   *  - An custom source: `book://moby-dick/chapter-4/page-27`
   */
  readonly source: string;

  /**
   * A source map that maps the file's current contents back to its original source contents.
   *
   * @see https://github.com/mozilla/source-map
   */
  sourceMap: SourceMap | undefined;

  /**
   * The path and file name, relative to the destination.
   *
   * @example
   *  index.html
   *  css/styles.min.css
   *  img/logos/vector.svg
   */
  path: string;

  /**
   * The directory path, relative to the destination.
   *
   * @example
   *  index.html            =>  (empty string)
   *  css/styles.min.css    =>  css
   *  img/logos/vector.svg  =>  img/logos
   */
  dir: string;

  /**
   * The file name including extension (if any)
   *
   * @example
   *  index.html            =>  index.html
   *  css/styles.min.css    =>  styles.min.css
   *  img/logos/vector.svg  =>  vector.svg
   */
  name: string;

  /**
   * The file extension (if any)
   *
   * @example
   *  index.html            =>  .html
   *  css/styles.min.css    =>  .css
   *  img/logos/vector.svg  =>  .svg
   */
  extension: string;

  /**
   * The file's raw contents.
   */
  contents: Buffer;

  /**
   * The file's contents as a UTF-8 string.
   */
  text: string;

  /**
   * The size of the file's contents, in bytes.
   */
  readonly size: number;
}


/**
 * The information necessary to create a `File` object.
 */
export interface FileInfo {
  path: string;
  source?: URL | string;
  sourceMap?: SourceMap;
  createdAt?: Date;
  modifiedAt?: Date;
  metadata?: FileMetadata;
  contents?: AnyContents;
  text?: string;
}


/**
 * Arbitrary file metadata that can be added by plugins.
 */
export interface FileMetadata {
  [key: string]: Cloneable;
}


/**
 * The types that can be assigned to a file's `contents` property.
 * The value will always be converted to a `Buffer`.
 */
export type AnyContents = string | Buffer | Uint8Array | ArrayBuffer;


/**
 * An object that maps a file's current contents back to its original source contents.
 *
 * @see https://github.com/mozilla/source-map
 */
export interface SourceMap {
  version: number;
  file: string;
  sourceRoot?: string;
  sources: string[];
  names: string[];
  mappings: string;
  sourcesContent?: string[];
}
