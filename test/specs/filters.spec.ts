// tslint:disable: completed-docs
import { Context, File, Filter, FilterCriteria, FilterFunction, Filters, PathFilter } from "../../";

export function testPathFilter(): PathFilter {
  let filter: PathFilter = true;
  filter = false;
  filter = "**/*";
  return /\.jpg$/;
}

export function testFilterFunction(): FilterFunction {
  return (file: File, context: Context) => 42;
}

export function testFilterCriteria(): FilterCriteria {
  let criteria: FilterCriteria = testPathFilter();
  criteria = testFilterFunction();
  criteria = [true, false, "**/*", /\.jpg$/, () => false, (file) => file];
  return criteria;
}

export function testFilters(): Filters {
  return {
    include: testFilterCriteria(),
    exclude: testFilterCriteria(),
  };
}

export function testFilter(): Filter {
  return testFilterCriteria() || testFilters();
}
