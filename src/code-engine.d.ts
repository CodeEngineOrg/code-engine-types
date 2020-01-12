import { Cloneable } from "./cloneable";
import { CodeEngineEventEmitter } from "./events";
import { Logger } from "./logger";
import { PluginDefinition } from "./plugin";
import { Summary } from "./summary";

/**
 * An instance of CodeEngine. Each instance has its own set of plugins and manages its own
 * pool of worker threads.
 */
export interface CodeEngine extends CodeEngineEventEmitter {
  /**
   * The directory that should be used to resolve all relative paths.
   */
  readonly cwd: string;

  /**
   * The number of files that CodeEngine can process concurrently.
   */
  readonly concurrency: number;

  /**
   * Indicates whether CodeEngine is running in local development mode.
   * When `true`, plugins should generate files that are un-minified, un-obfuscated, and may
   * contain references to localhost.
   */
  readonly dev: boolean;

  /**
   * Indicates whether CodeEngine is running in debug mode, which enables additional logging
   * and error stack traces.
   */
  readonly debug: boolean;

  /**
   * Indicates whether the `dispose()` method has been called.
   * Once disposed, the CodeEngine instance is no longer usable.
   */
  readonly disposed: boolean;

  /**
   * logs messages and errors
   */
  readonly log: Logger;

  /**
   * Loads one or more CodeEngine plugins.
   */
  use(...plugins: PluginDefinition[]): this;

  /**
   * Imports a JavaScript module in all worker threads.
   * This is useful for loading polyfills, transpilers, or other modules that have global side-effects.
   *
   * @param module - The path or name of the plugin's JavaScript module
   * @param options - Options that determine the plugin's behavior. Only cloneable data types are allowed.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
   */
  import(module: string, options?: Cloneable): Promise<void>;

  /**
   * Deletes the contents of the destination(s).
   */
  clean(): Promise<void>;

  /**
   * Runs CodeEngine, processing all source files using all currently-loaded plugins.
   */
  run(): Promise<Summary>;

  /**
   * Watches source files for changes and performs incremental runs whenever changes are detected.
   *
   * @param delay
   * The time (in milliseconds) to wait after a file change is detected before starting a run.
   * This allows multiple files that are changed together to all be re-built together.
   */
  watch(delay?: number): void;

  /**
   * Releases system resources that are held by this CodeEngine instance.
   * Once `dispose()` is called, the CodeEngine instance is no longer usable.
   */
  dispose(): Promise<void>;
}
