// tslint:disable: member-ordering
import { FileChangedEventListener, FinishEventListener, StartEventListener } from "./events";
import { ChangedFileInfo, File, FileChangedCallback, FileInfo } from "./file";
import { Filter } from "./filters";
import { ModuleDefinition } from "./module-definition";
import { Run } from "./run";

/**
 * A CodeEngine plugin
 */
export interface Plugin {
  /**
   * The plugin name. Used for log messages.
   */
  name?: string;

  /**
   * Glob patterns, regular expressions, or filter functions that limit which files are processed
   * by the plugin's `processFile()`, `processFiles()`, and `fileChanged()` methods.
   *
   * Defaults to all files.
   */
  filter?: Filter;

  /**
   * Processes a file that matches the plugin's `filter` criteria. Can be any of the following:
   *
   * - A function that processes the file on the main thread
   * - The path of a JavaScript module or Node package that processes the file on a worker thread
   * - An object containing the path of a JavaScript module or Node package, as well as data to pass to it
   *
   */
  processFile?: FileProcessor | string | ModuleDefinition<FileProcessor>;

  /**
   * Processes all files that match the plugin's `filter` criteria. This method is called even if no
   * files match the `filter` criteria.
   */
  processFiles?(files: AsyncIterable<File>, run: Run): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Reads source files to be built.
   */
  read?(run: Run): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Watches source files and notifies CodeEngine whenever changes are detected.
   */
  watch?(fileChanged: FileChangedCallback): ZeroOrMore<ChangedFileInfo> | Promise<ZeroOrMore<ChangedFileInfo>>;

  /**
   * Deletes existing files from the destination, in preparation for a clean run.
   */
  clean?(): void | Promise<void>;

  /**
   * Releases system resources, such as filesystem watchers, database connections, network connections, etc.
   * Once disposed, a plugin is no longer usable by CodeEngine.
   */
  dispose?(): void | Promise<void>;

  /**
   * Prepares for the start of a CodeEngine run.
   */
  start?: StartEventListener;

  /**
   * Wraps-up after a CodeEngine run finishes.
   */
  finish?: FinishEventListener;

  /**
   * A change has been detected in a file that matches the `filter` criteria.
   */
  fileChanged?: FileChangedEventListener;
}


/**
 * A synchronously or asynchronously returned value or list of values.
 */
export type ZeroOrMore<T> = void | T | Iterable<T> | Iterator<T> | AsyncIterable<T> | AsyncIterator<T>;


/**
 * Processes an input file and returns zero or more output files.
 *
 * @param file - The file to process
 * @param run - Information about the current run
 *
 * @returns
 * The results of processing `file`. This may be the modified file, a new file, multiple files,
 * or a falsy value to remove the input file from the run.
 */
export type FileProcessor = (file: File, run: Run) => ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;


/**
 * Plugins can be defined as objects or as shorthand for the `processFile()` method.
 */
export type PluginDefinition = Plugin | FileProcessor | string | ModuleDefinition<FileProcessor>;
