CodeEngine type definitions
======================================

[![Cross-Platform Compatibility](https://engine.codes/img/badges/os-badges.svg)](https://github.com/CodeEngineOrg/code-engine-types/actions)
[![Build Status](https://github.com/CodeEngineOrg/code-engine-types/workflows/CI-CD/badge.svg)](https://github.com/CodeEngineOrg/code-engine-types/actions)

[![npm](https://img.shields.io/npm/v/@code-engine/types.svg)](https://www.npmjs.com/package/@code-engine/types)
[![License](https://img.shields.io/npm/l/@code-engine/types.svg)](LICENSE)
[![Buy us a tree](https://img.shields.io/badge/Treeware-%F0%9F%8C%B3-lightgreen)](https://plant.treeware.earth/CodeEngineOrg/code-engine-types)



This is a TypeScript type definition library that's used inside [CodeEngine](https://engine.codes/). It contains common type definitions that are used across many CodeEngine packages. In addition, each CodeEngine package may have its own type definitions that are specific to that package.

> **NOTE:** This is an **internal library** that is only intended to be used by CodeEngine. Using it outside of CodeEngine is discouraged.



Types
-------------------------------
Here are the most significant types in this library:

|Type                                             |Description
|-------------------------------------------------|--------------------------------------------------------------------------------------------
|[`CodeEngine`](src/code-engine.d.ts)             |An instance of CodeEngine. Each instance has its own set of plugins and manages its own pool of worker threads.
|[`File`](src/file.d.ts)                          |A CodeEngine "file". This does not necessarily correspond to a file on disk. Files are a virtual concept with a path, name, and data contents. Those values could come from a database, a CMS, an RSS feed, or any other source.
|[`FileInfo`](src/file.d.ts)                      |The information necessary to create a `File` object. This is a simple POJO object with mostly optional fields. Plugins can simply return one or more of these objects, and CodeEngine will create full `File` objects from them.
|[`Plugin`](src/plugin.d.ts)                      |The interface for CodeEngine plugins. Any plugin can implement some or all of the plugin methods to hook into various parts of the CodeEngine lifecycle.
|[`ModuleDefinition`](src/module-definition.d.ts) |This object references a JavaScript module. It's used to load CodeEngine plugins on worker threads rather than the main thread, which improves performance and throughput in many cases.
|[`Run`](src/run.d.ts)                            |Information about the current CodeEngine run. This object is passed to many plugin methods.
|[`Logger`](src/logger.d.ts)                      |CodeEngine's logging methods. Plugins should use these logging methods rather than `console.log()` or `process.stdout.write()`.
|[`Summary`](src/summary.d.ts)                    |When a run completes, CodeEngine returns this summary object. It's also emitted via [the "finished" event](src/events.d.ts).



Contributing
--------------------------
Contributions, enhancements, and bug-fixes are welcome!  [Open an issue](https://github.com/CodeEngineOrg/code-engine-types/issues) on GitHub and [submit a pull request](https://github.com/CodeEngineOrg/code-engine-types/pulls).

#### Building
To build the project locally on your computer:

1. __Clone this repo__<br>
`git clone https://github.com/CodeEngineOrg/code-engine-types.git`

2. __Install dependencies__<br>
`npm install`

3. __Build the code__<br>
`npm run build`

4. __Run the tests__<br>
`npm test`



License
--------------------------
@code-engine/types is 100% free and open-source, under the [MIT license](LICENSE). Use it however you want.

This package is [Treeware](http://treeware.earth). If you use it in production, then we ask that you [**buy the world a tree**](https://plant.treeware.earth/CodeEngineOrg/code-engine-types) to thank us for our work. By contributing to the Treeware forest you’ll be creating employment for local families and restoring wildlife habitats.



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://engine.codes/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://engine.codes/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://engine.codes/img/badges/coveralls.svg)](https://coveralls.io)
