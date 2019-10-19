// tslint:disable: completed-docs
import { ModuleDefinition } from "../../";

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
    data: {
      foo: "bar",
      biz: 42,
      baz: /regexp/,
    }
  };
}
