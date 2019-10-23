import { Cloneable } from "./cloneable";

/**
 * A JavaScript module whose default export is a `FileProcessor` or `FileProcessorFactory`.
 */
export interface ModuleDefinition {
  /**
   * A JavaScript module ID, such as the path of a JavaScript file or the name of an NPM package.
   * The module's default export must be a `FileProcessor` or `FileProcessorFactory`.
   */
  moduleId: string;

  /**
   * If the module's default export is a `FileProcessorFactory`, then this data will be passed when
   * calling the factory function. This data can only contain types that are compatible with the
   * Structured Clone Algoritm.
   *
   * NOTE: If `data` is `undefined`, then the module must export a `FileProcessor` directly, not
   * a `FileProcessorFactory`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
   */
  data?: Cloneable;
}
