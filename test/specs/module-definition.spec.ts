import { FactoryFunction, File, FileProcessor, ModuleDefinition, Run } from "../../";
import { testCloneable } from "./cloneable.spec";
import { testZeroOrMore } from "./plugin.spec";

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
  return (_data: object): FileProcessor => {
    return (_file: File, _run: Run) => testZeroOrMore();
  };
}

export function testAsyncFileProcessorFactory(): FactoryFunction<FileProcessor> {
  return async(_data: object): Promise<FileProcessor> => {
    return (_file: File, _run: Run) => testZeroOrMore();
  };
}

export function testVoidFactory(): FactoryFunction<void> {
  return (_data: string): void => {
    return;
  };
}

export function testAsyncVoidFactory(): FactoryFunction<void> {
  return async(_data: string): Promise<void> => {
    return;
  };
}
