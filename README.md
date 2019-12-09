CodeEngine type definitions
======================================

This is a TypeScript type definition library that's used inside [CodeEngine](https://engine.codes/). It contains common type definitions that are used across many CodeEngine packages. In addition, each CodeEngine package may have its own type definitions that are specific to that package.

> **NOTE:** This is an **internal library** that is only intended to be used by CodeEngine. Using it outside of CodeEngine is discouraged.



Types
-------------------------------
Here are the most significant types in this library:

|Type                                             |Description
|-------------------------------------------------|--------------------------------------------------------------------------------------------
|[`File`](src/file.d.ts)                          |A CodeEngine "file". This does not necessarily correspond to a file on disk. Files are a virtual concept with a path, name, and data contents. Those values could come from a database, a CMS, an RSS feed, or any other source.
|[`FileInfo`](src/file.d.ts)                      |The information necessary to create a `File` object. This is a simple POJO object with mostly optional fields. Plugins can simply return one or more of these objects, and CodeEngine will create full `File` objects from them.
|[`Plugin`](src/plugin.d.ts)                      |The interface for CodeEngine plugins. Any plugin can implement some or all of the plugin methods to hook into various parts of the CodeEngine build process.
|[`ModuleDefinition`](src/module-definition.d.ts) |This object references a JavaScript module. It's used to load CodeEngine plugins on worker threads rather than the main thread, which improves performance and throughput in many cases.
|[`Context`](src/context.d.ts)                    |This object is passed to all plugin methods. It provides contextual information about the build.
|[`Logger`](src/logger.d.ts)                      |Logging methods that are passed to every plugin method via `context.log`. Plugins should use these logging methods rather than `console.log()` or `process.stdout.write()`.
|[`BuildSummary`](src/build-summary.d.ts)         |When a build completes, CodeEngine returns this summary object. It's also emitted via [the "buildFinished" event](src/events.d.ts).



Contributing
--------------------------
Contributions, enhancements, and bug-fixes are welcome!  [File an issue](https://github.com/CodeEngineOrg/code-engine-types/issues) on GitHub and [submit a pull request](https://github.com/CodeEngineOrg/code-engine-types/pulls).

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



Big Thanks To
--------------------------
Thanks to these awesome companies for their support of Open Source developers ❤

[![Travis CI](https://engine.codes/img/badges/travis-ci.svg)](https://travis-ci.com)
[![SauceLabs](https://engine.codes/img/badges/sauce-labs.svg)](https://saucelabs.com)
[![Coveralls](https://engine.codes/img/badges/coveralls.svg)](https://coveralls.io)
