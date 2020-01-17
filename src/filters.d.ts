import { File } from "./file";
import { Context } from "./run";

/**
 * Filters files by their path.  Can be any of the following:
 *
 *    - A boolean to include/exclude all files
 *    - A glob pattern
 *    - A regular expression
 */
export type PathFilter = boolean | string | RegExp;


/**
 * Custom filter criteria for `File` objects
 */
export type FilterFunction = (file: File, context: Context) => unknown;


/**
 * One or more `File` filter criteria
 */
export type FilterCriteria = PathFilter | FilterFunction | Array<PathFilter | FilterFunction>;


/**
 * Explicit inclusion and exclusion filter criteria.
 */
export interface Filters {
  include?: FilterCriteria;
  exclude?: FilterCriteria;
}


/**
 * One or more inclusion/exclusion filter criteria for `File` objects
 */
export type Filter = FilterCriteria | Filters;
