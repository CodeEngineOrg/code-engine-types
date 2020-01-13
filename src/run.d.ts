import { ChangedFile } from "./file";
import { Logger } from "./logger";

/**
 * Information about a CodeEngine run.
 */
export interface Run {
  /**
   * Indicates whether this is a full run (as opposed to a partial run).
   */
  readonly full: boolean;

  /**
   * Indicates whether this is a partial run, which only includes files that have changed
   * since the previous run.
   */
  readonly partial: boolean;

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
   * The directory that should be used to resolve all relative paths.
   */
  readonly cwd: string;

  /**
   * The number of files that CodeEngine can process concurrently.
   */
  readonly concurrency: number;

  /**
   * The file changes that have occurred since the previous run.
   * This array will be empty for full runs.
   */
  readonly changedFiles: ReadonlyArray<Readonly<ChangedFile>>;

  /**
   * logs messages and errors
   */
  readonly log: Logger;
}
