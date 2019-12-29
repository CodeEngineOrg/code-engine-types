import { BuildContext } from "./context";

/**
 * A summary of a full or incremental build.
 */
export interface BuildSummary extends BuildContext {
  input: {
    /**
     * The number of source files that were read at the start of the build.
     */
    fileCount: number;

    /**
     * The total size, in bytes, of all input files.
     */
    fileSize: number;
  };

  output: {
    /**
     * The number of files that were output.
     */
    fileCount: number;

    /**
     * The total size, in bytes, of all output files.
     */
    fileSize: number;
  };

  time: {
    /**
     * The date/time that the build started.
     */
    start: Date;

    /**
     * The date/time that the build ended.
     */
    end: Date;

    /**
     * How long the build took, in milliseconds.
     */
    elapsed: number;
  };
}
