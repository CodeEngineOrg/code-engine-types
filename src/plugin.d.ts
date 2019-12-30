// tslint:disable: member-ordering
import { BuildContext, Context } from "./context";
import { BuildFinishedEventListener, BuildStartingEventListener, ErrorEventListener, FileChangedEventListener, LogEventListener } from "./events";
import { ChangedFileInfo, File, FileInfo } from "./file";
import { Filter } from "./filters";
import { ModuleDefinition } from "./module-definition";
import { FileProcessor, ZeroOrMore } from "./types";


/**
 * Plugins can be defined as objects or as shorthand for the `processFile()` method.
 */
export type PluginDefinition = Plugin | FileProcessor | string | ModuleDefinition<FileProcessor>;


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
  processFile?: FileProcessor | string | ModuleDefinition<FileProcessor>;

  /**
   * Processes all files that match the plugin's `filter` criteria. This method is called even if no
   * files match the `filter` criteria.
   */
  processFiles?(files: AsyncIterable<File>, context: BuildContext): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Reads source files to be built.
   */
  read?(context: BuildContext): ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;

  /**
   * Watches source files and notifies CodeEngine when changes are detected.
   */
  watch?(context: Context): AsyncIterable<ChangedFileInfo> | AsyncIterator<ChangedFileInfo> | Promise<AsyncIterable<ChangedFileInfo> | AsyncIterator<ChangedFileInfo>>;

  /**
   * Deletes existing files from the destination, in preparation for a clean build.
   */
  clean?(context: Context): void | Promise<void>;

  /**
   * Releases system resources, such as filesystem watchers, database connections, network connections, etc.
   * Once disposed, a plugin is no longer usable by CodeEngine.
   */
  dispose?(context: Context): void | Promise<void>;

  /**
   * This event is fired whenever a build starts. It receives a `BuildContext` object,
   * which has information about the build.
   */
  onBuildStarting?: BuildStartingEventListener;

  /**
   * This event is fired when a build completes. It receives a `BuildSummary` object
   * with the results of the build.
   */
  onBuildFinished?: BuildFinishedEventListener;

  /**
   * This event is fired when a file change is detected. It receives a `ChangedFile` object.
   */
  onFileChanged?: FileChangedEventListener;

  /**
   * This event is fired whenever an unhandled error occurs.
   */
  onError?: ErrorEventListener;

  /**
   * This event is fired whenever CodeEngine or a plugin calls any `Logger` method.
   * It receives the message that was logged, the severity level, the error (if any),
   * and any other data that was provided.
   */
  onLog?: LogEventListener;
}
