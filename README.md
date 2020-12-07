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
-   [Publishing an NPM packagen - Best Practices](https://betterstack.dev/blog/npm-package-best-practices/)
