# nodejs-minimal

![Build Status](https://github.com/briangershon/nodejs-minimal/workflows/Continuous%20Integration/badge.svg)

Node.js starter with minimal dependencies and tools.

* Includes a development environment with:
  * Support for es6 modules (for Node 10.x+ using `esm` module). Does not require Babel nor a bundler.
  * Restarts node automatically when changes happen.
  * Unit tests (via Jest)
  * Lint (via ESLint with their recommended settings)
  * Continuous Integration workflow with Github Actions

## Future simplifications

* [ ] In Node 13.x+, ES modules will be supported natively without needing any Node.js flags. Remove `esm` dependency.

## Run Local Dev Server

    npm install  # install dependencies

    npm start

## Run Tests

    npm test

## Run lint

    npm run lint
