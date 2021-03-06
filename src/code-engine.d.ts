import { Cloneable } from "./cloneable";
import { CodeEngineEventEmitter } from "./events";
import { PluginDefinition } from "./plugin";
import { Context } from "./run";
import { Summary } from "./summary";

/**
 * An instance of CodeEngine. Each instance has its own set of plugins and manages its own
 * pool of worker threads.
 */
export interface CodeEngine extends Context, CodeEngineEventEmitter {
  /**
   * Indicates whether the `dispose()` method has been called.
   * Once disposed, the CodeEngine instance is no longer usable.
   */
  readonly disposed: boolean;

  /**
   * Loads one or more CodeEngine plugins.
   */
  use(...plugins: PluginDefinition[]): Promise<void>;

  /**
   * Imports a JavaScript module in all worker threads.
   * This is useful for loading polyfills, transpilers, or other modules that have global side-effects.
   *
   * @param moduleId - The path or name of the plugin's JavaScript module
   * @param data - Optional data to pass to the module, if its default export is a function
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
   */
  import(moduleId: string, data?: Cloneable): Promise<void>;

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
