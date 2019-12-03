// tslint:disable: completed-docs
import { Context, FactoryFunction, File, FileProcessor, ModuleDefinition } from "../../";
import { testCloneable } from "./cloneable.spec";
import { testZeroOrMore } from "./types.spec";

export function testModuleDefinition<T>(): ModuleDefinition<T> {
  return {
    moduleId: "lodash",
  };
}

export function testModuleDefinitionWithPrimitiveData<T>(): ModuleDefinition<T> {
  return {
    moduleId: "lodash",
    data: 42
  };
}

export function testModuleDefinitionWithObjectData<T>(): ModuleDefinition<T> {
  return {
    moduleId: "lodash",
    data: testCloneable(),
  };
}

export function testFileProcessorFactory(): FactoryFunction<FileProcessor> {
  return (data: object): FileProcessor => {
    return (file: File, context: Context) => testZeroOrMore();
  };
}

export function testAsyncFileProcessorFactory(): FactoryFunction<FileProcessor> {
  return async (data: object): Promise<FileProcessor> => {
    return (file: File, context: Context) => testZeroOrMore();
  };
}

export function testVoidFactory(): FactoryFunction<void> {
  return (data: string): void => {
    return;
  };
}

export function testAsyncVoidFactory(): FactoryFunction<void> {
  return async (data: string): Promise<void> => {
    return;
  };
}
