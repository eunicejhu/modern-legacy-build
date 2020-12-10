# Modern Legacy build

## what is this repo for?

-   build modern and legacy version of packages

## tools

-   babel

## packages

-   dotenv: enable reading ENV variables from .env, .env is used for storing sensitive information which is not supposed to exposed in public. .env should be added to .gitignore
-   @babel/node: node with super power of babel, which enables node know ES new features, depending on which babel plugin you have installed.
-   @babel/core: transpile logic
-   @babel/preset-env
-   nodemon

## babel config

-   targets.esmodules = true, will target browsers supporting ESModules

## Refs

-   [How to smart bundling legacy code browser?](https://www.smashingmagazine.com/2018/10/smart-bundling-legacy-code-browsers/)
-   [Loading polyfills only when needed](https://philipwalton.com/articles/loading-polyfills-only-when-needed/)
    -   ` useBuiltIn: "usage"`
-   [Publishing an NPM packagen - Best Practices](https://betterstack.dev/blog/npm-package-best-practices/)
-   [local testing package](https://flaviocopes.com/npm-local-package/)
-   [browserslist best practices](https://github.com/browserslist/browserslist#best-practices)
-   [babel-preset-env doc](https://babeljs.io/docs/en/babel-preset-env)
-   [beginner: how to publish npm package](https://www.robinwieruch.de/publish-npm-package-node)
-   [how to make sure our library work in all environments?]
-   [Build my own library in differenct Module system](https://www.freecodecamp.org/news/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e/)
-   [build your own library using rollup](https://risanb.com/code/bundling-your-javascript-library-with-rollup/#resolving-third-party-modules-with-plugin)

## format

### amd

-   to load an amd file in browser, we need an amd loader
