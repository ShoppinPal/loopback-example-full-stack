# Loopback Examples: Full Stack

This fork's `feature/nodejs-client` branch demonstrates how to generate nodejs clients for loopback models.

## Setup & Go

0. You must have `node` and `git` installed.
1. Clone the repo. `git clone https://github.com/ShoppinPal/loopback-example-full-stack.git`
2. `cd loopback-example-full-stack`
3. Checkout the branch: `git checkout -b feature/nodejs-client origin/feature/nodejs-client`
4. install the root package dependencies: `npm install`
5. skip if you have grunt-cli already installed: `npm install grunt-cli -g`
6. skip if you have bower already installed: `npm install bower -g`
8. create a directory to house the swagger specs for your models: `mkdir -p common/generated/swagger`
7. generate nodejs clients for loopback models: `grunt swaggerGen`

## Sanity Test

Run `node common/generated/nodejs-client/test/test-user.js` to check for any and all flaws in the syntax and functionality of the generated code.
