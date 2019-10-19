import { Logger } from "./logger";

/**
 * Contextual information passed to every plugin hook.
 */
export interface Context {
  /**
   * Used to log messages and errors
   */
  readonly logger: Logger;

  /**
   * The directory that should be used to resolve all relative paths.
   */
  readonly cwd: string;

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
}
