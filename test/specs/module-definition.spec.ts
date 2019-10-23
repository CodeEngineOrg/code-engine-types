// tslint:disable: completed-docs
import { ModuleDefinition } from "../../";
import { testCloneable } from "./cloneable.spec";

export function testModuleDefinition(): ModuleDefinition {
  return {
    moduleId: "lodash",
  };
}

export function testModuleDefinitionWithPrimitiveData(): ModuleDefinition {
  return {
    moduleId: "lodash",
    data: 42
  };
}

export function testModuleDefinitionWithObjectData(): ModuleDefinition {
  return {
    moduleId: "lodash",
    data: testCloneable(),
  };
}
