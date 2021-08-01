# DENO REST API

This project is a simple `deno` application rest api app, to create a user and fetch user details.

To achieve this I'm using **Oak**, a middleware framework for `deno's` HTTP server inspired by Koa Framework, and **deno_mongo**, a `MongoDB` database driver built for `deno`.

## DENO?

`deno` is a simple, modern and secure runtime for `JavaScript` and `TypeScript` that uses v8 engine built using `Rust`.

Officially released in May 2020, by Ryan Dahl, the father of node, under the premise that _"Node could have been much nicer"_.

`deno` is built with Rust at it's core. It supports TypeScript without explicit setup and is not compatible with node modules and npm.

### Run the Project

To run the project, run the command below from a command line console:
> deno run --allow-net --allow-write --allow-read --allow-plugin --unstable app.ts

### Note

Please, make sure to update `../keys/appCostants.ts` with your `MongoDb` server instance settings.
