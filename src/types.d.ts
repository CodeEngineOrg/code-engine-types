import { Context } from "./context";
import { File, FileInfo } from "./file";


/**
 * A synchronously or asynchronously returned value or list of values.
 */
export type ZeroOrMore<T> = void | T | Iterable<T> | Iterator<T> | AsyncIterable<T> | AsyncIterator<T>;


/**
 * Processes an input file and returns zero or more output files.
 *
 * @param file - The file to process
 * @param context - Informatino about the current build
 *
 * @returns
 * The results of processing `file`. This may be the modified file, a new file, multiple files,
 * or a falsy value to remove the input file from the build.
 */
export type FileProcessor = (file: File, context: Context) => ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;


/**
 * A function that returns a `FileProcessor`. The default export of a `ModuleDefinition` must
 * match this signature.
 *
 * @param data - The `ModuleDefinition.data` value
 */
export type FileProcessorFactory = (data: unknown) => FileProcessor | Promise<FileProcessor>;
