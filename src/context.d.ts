import { ChangedFile } from "./file";
import { Logger } from "./logger";

/**
 * Contextual information passed to every plugin hook.
 */
export interface Context {
  /**
   * The directory that should be used to resolve all relative paths.
   */
  readonly cwd: string;

  /**
   * The number of files that CodeEngine can process concurrently.
   */
  concurrency: number;

  /**
   * Indicates whether CodeEngine should run in local development mode.
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
   * logs messages and errors
   */
  readonly log: Logger;
}

/**
 * Contextual information about the current build.
 */
export interface BuildContext extends Context {
  /**
   * Indicates whether this is a full build (as opposed to a partial re-build).
   */
  fullBuild: boolean;

  /**
   * Indicates whether this is a partial build, which only includes files that have changed
   * since the previous build.
   */
  partialBuild: boolean;

  /**
   * The file changes that have occurred since the previous build. For full builds this array
   * is empty.
   */
  changedFiles: ChangedFile[];
}
