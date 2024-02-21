# create-bdd-test-framework

This package includes the command for Create BDD Test Framework.

## Quick Start
`$ npx create-bdd-test-framework e2e-test`

`$ cd e2e-test`

`$ npm run test`

`$ npm run test:report`

## Creating an BDD Test Framework

You’ll need to have Node >= 16 on your local development machine. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

To create a new BDD Test Framework, you may choose one of the following methods:

### npx

`npx create-bdd-test-framework e2e-test`

### npm

`npm init bdd-test-framework bdd-e2e-test`


### Yarn

`yarn create bdd-test-framework bdd-e2e-test`

## Executing the automated test scenarios

`cd bdd-e2e-test`

`npm run test`


## Generate HTML report

`npm run test:report`