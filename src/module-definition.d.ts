import { Cloneable } from "./cloneable";

/**
 * A JavaScript module that exports a value of type `T`, or exports a `FactoryFunction` that
 * produces a value of type `T`.
 */
export interface ModuleDefinition<T> {
  /**
   * A JavaScript module ID, such as the path of a JavaScript file or the name of an NPM package.
   * The module's default export must be of type `T` or `FactoryFunction<T>`.
   */
  moduleId: string;

  /**
   * If the module's default export is a `FactoryFunction`, then this data will be passed when
   * calling the function. This data can only contain types that are compatible with the
   * Structured Clone Algoritm.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
   */
  data?: Cloneable;
}


/**
 * A function that returns a value of type `T`.
 *
 * @param data - User-defined data that is passed to the factory function.
 */
export type FactoryFunction<T = unknown> = (data: unknown) => T | Promise<T>;
