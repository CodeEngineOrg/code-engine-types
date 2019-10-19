/**
 * Defines an asynchronous `all()` method that can be added to iterables and generators.
 * This is a workaround for the lack of an async spread operator and/or support for async iterables
 * in `Promise.all()`.
 *
 * @see https://github.com/tc39/proposal-async-iteration/issues/103
 */
export interface AsyncIterateAll<T> {
  /**
   * Iterates over all items and returns them as an array.
   */
  all(): Promise<T[]>;
}


/**
 * An async iterable with an additional `all()` method that returns all items.
 */
export interface AsyncAllIterable<T> extends AsyncIterable<T>, AsyncIterateAll<T> {}


/**
 * An async iterable iterator with an additional `all()` method that returns all items.
 */
export interface AsyncAllIterableIterator<T> extends AsyncIterableIterator<T>, AsyncIterateAll<T> {}


/**
 * An async generator with an additional `all()` method that returns all items.
 */
export interface AsyncAllGenerator<T, TReturn = any, TNext = unknown> extends AsyncGenerator<T, TReturn, TNext>, AsyncIterateAll<T> {}
