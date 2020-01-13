import { Run } from "./run";

/**
 * A summary of a completed CodeEngine run.
 */
export interface Summary extends Run {
  input: {
    /**
     * The number of source files that were read at the start of the run.
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
     * The date/time that the run started.
     */
    start: Date;

    /**
     * The date/time that the run ended.
     */
    end: Date;

    /**
     * How long the run took, in milliseconds.
     */
    elapsed: number;
  };
}
