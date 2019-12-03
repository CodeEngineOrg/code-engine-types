import { BuildContext } from "./context";
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
export type FileProcessor = (file: File, context: BuildContext) => ZeroOrMore<FileInfo> | Promise<ZeroOrMore<FileInfo>>;
