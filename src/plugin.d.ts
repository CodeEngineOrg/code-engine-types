import { Context } from "./context";
import { File, FileInfo } from "./file";
import { Filter } from "./filters";
import { AsyncAllIterable } from "./iterate";
import { ModuleDefinition } from "./module-definition";
import { FileProcessor, ZeroOrMore } from "./types";


/**
 * Plugins can be defined as objects or as shorthand for the `processFile()` method.
 */
export type PluginDefinition = Plugin | FileProcessor | ModuleDefinition | string;


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
   * Processes a file that matches the plugin's `filter` criteria. Can be any of the following:
   *
   * - A function that processes the file on the main thread
   * - The path of a JavaScript module or Node package that processes the file on a worker thread
   * - An object containing the path of a JavaScript module or Node package, as well as data to pass to it
   *
   */
  processFile?: string | ModuleDefinition | FileProcessor;

  /**
   * Processes all files that match the plugin's `filter` criteria. This method is called even if no
   * files match the `filter` criteria.
   */
  processFiles?(files: AsyncAllIterable<File>, context: Context): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Reads source files to be built.
   */
  read?(context: Context): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Watches source files and notifies CodeEngine when changes are detected.
   */
  watch?(context: Context): AsyncIterable<FileInfo> | AsyncIterator<FileInfo>;

  /**
   * Deletes existing files from the destination, in preparation for a clean build.
   */
  clean?(context: Context): void | Promise<void>;

  /**
   * Releases system resources, such as filesystem watchers, database connections, network connections, etc.
   * Once disposed, a plugin is no longer usable by CodeEngine.
   */
  dispose?(context: Context): void | Promise<void>;
}
