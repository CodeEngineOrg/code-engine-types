// tslint:disable: member-ordering
import type { CodeEngine } from "./code-engine";
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
   * by the plugin's `processFile()` and `processFiles()` methods.
   *
   * Defaults to all files.
   */
  filter?: Filter;

  /**
   * Performs one-time initialization logic when the plugin is first mounted by CodeEngine.
   */
  initialize?(this: MountedPlugin): void | Promise<void>;

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
  processFiles?(this: MountedPlugin, files: AsyncIterable<File>, run: Run): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Reads source files to be built.
   */
  read?(this: MountedPlugin, run: Run): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Watches source files and notifies CodeEngine whenever changes are detected.
   */
  watch?(this: MountedPlugin, fileChanged: FileChangedCallback): ZeroOrMore<ChangedFileInfo> | Promise<ZeroOrMore<ChangedFileInfo>>;

  /**
   * Deletes existing files from the destination, in preparation for a clean run.
   */
  clean?(this: MountedPlugin): void | Promise<void>;

  /**
   * Releases system resources, such as filesystem watchers, database connections, network connections, etc.
   * Once disposed, a plugin is no longer usable by CodeEngine.
   */
  dispose?(this: MountedPlugin): void | Promise<void>;
}


/**
 * A plugin that has beeen mounted by CodeEngine.
 */
export interface MountedPlugin extends Plugin {
  /**
   * The CodeEngine instance that is using this plugin.
   * This property is set automatically by CodeEngine when the plugin is mounted.
   */
  readonly engine: CodeEngine;

  /**
   * Processes a file that matches the plugin's `filter` criteria.
   *
   * This property may have originally been a reference to a separate JavaScript module,
   * but once mounted, that module has been loaded and the property is replaced with a reference
   * to the module's `FileProcessor` function.
   */
  processFile?: FileProcessor;
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
export type FileProcessor = (this: MountedPlugin, file: File, run: Run) => ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;


/**
 * Plugins can be defined as objects or as shorthand for the `processFile()` method.
 */
export type PluginDefinition = Plugin | FileProcessor | string | ModuleDefinition<FileProcessor>;
