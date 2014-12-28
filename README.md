# Loopback Examples: Full Stack

This fork's `feature/nodejs-client` branch demonstrates how to generate nodejs clients for loopback models.

## Setup & Go

0. You must have `node` and `git` installed.
1. Clone the repo. `git clone https://github.com/ShoppinPal/loopback-example-full-stack.git`
2. `cd loopback-example-full-stack`
3. Checkout the branch: `git checkout -b feature/nodejs-client origin/feature/nodejs-client`
4. `npm install` - install the root package dependencies
5. `npm install grunt-cli -g` - skip if you have grunt-cli already installed
6. `npm install bower -g` - skip if you have bower already installed
8. `mkdir -p common/generated/swagger`
7. `grunt swaggerGen` - generate nodejs clients for loopback models

## Sanity Test

Run `node common/generated/nodejs-client/test/test-user.js` to check for any and all flaws in the syntax and functionality of the generated code.
