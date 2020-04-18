# nodejs-minimal

![Build Status](https://github.com/briangershon/nodejs-minimal/workflows/Continuous%20Integration/badge.svg)

Node.js starter with minimal dependencies and tools.

Requires Node.js v13.13+ for default support of experimental ECMAScript modules (esm).

* Includes a development environment with:
  * Support for ECMAScript modules. Does not require Babel nor a bundler.
  * Restarts node automatically when changes happen.
  * Unit tests (via Jest) (Babel required to run Jest with esm)
  * Lint (via ESLint with their recommended settings)
  * Continuous Integration workflow with Github Actions

## Run Local Dev Server

    npm install  # install dependencies

    nvm use      # optional, for nvm users
    npm start

    # see Welcome message logged in terminal window

## Run Tests

    npm test

## Run lint

    npm run lint
