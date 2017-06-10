<img src="https://live.zoomdata.com/zoomdata/service/connection/types/icon/MONGO_MONGO?v=$%7Btimestamp%7D" width="80"><img src="http://apps.octoconsulting.com/images/expressIcon.png" width="80"><img src="https://material.angularjs.org/latest/img/icons/angular-logo.svg" width="80"><img src="http://code.runnable.com/images/provider-icons/icon-node.js.svg" width="80"><img src="http://amver.lt/wp-content/uploads/2016/07/Mathematic-Plus2.ico" style="margin:0px 15px" height="80px"><img src="https://avatars2.githubusercontent.com/u/16272733?v=3&s=200" height="80px"><img src="http://cloudoki.com/images/frameworks/ionic.png" width="80"><img src="https://s3.amazonaws.com/media-p.slid.es/uploads/433219/images/2123534/electron.gif" height="80px">

# MEAN Stack - ng Share Core Seed

<blockquote>Share Angular Core seed module between multiple MEAN Stack project in the same project folder.</blockquote>


## Overview
My own TypeScript Full Stack MongoDB + ExpressJS + Angular + NodeJS with Ionic Framework and Electron Framework to provide full multi platform application (iOS/Android platform + Web Browser platform + Desktop platform) with the same core code in same folder.

It's a simple todo application exemple with Typescript server-side, Users JWT authentification & using ReactiveX API (ngrx/Store + ngrx/Effects)

All Angular logic is encapsulate into a separate project folder `./core` to be used by simple `import { CoreModule } from "core";` into each other application root `app.module.ts` using the same Angular logic.
- Without `npm link` or `symlink /symlinkSync`.
- Only using `tsconfig.json` to define custom `paths` with Angular Core module in each applications to have import work.

For me, it's the best way to developpe large scale application with core module sharing between all projects.
This starter kit is made for Angular + Ionic + Electron but you can easely wrap more project:
- `./web` with a Angular CLI project if you want a web version builded only with Angular
- `./nativescript` with NativeScript for building a native mobile applpication.

Hop is help you to start your project on the right way.

## Prerequisites
- NVM - [Download](https://github.com/creationix/nvm) & Install Node Version Manage
- NodeJS 7 - Download & Install Node.js and the npm package manager with NVM `$ nvm install node 7`.
- MongoDB - [Download](https://www.mongodb.com) & Install MongoDB, and make sure it's running on the default port (27017).
- [Typescript](https://www.npmjs.com/package/typescript) Latest stable version install in Global `$ npm install -g typescript`
- [Nodemon](https://nodemon.io/) Latest stable version install in Global `$ npm install -g nodemon`
- [Ionic 3](https://ionicframework.com/) & [Cordova](https://cordova.apache.org/) - Latest stable version install in Global `$ npm install -g ionic cordova`
- [Electron](https://electron.atom.io/) Latest stable version install in Global `$ npm install electron -g`
- [TypeDoc](http://typedoc.org/) - Latest stable version install in Global `$ npm install -g typedoc`
- [Karma](https://karma-runner.github.io) - Latest stable version install in Global `$ npm install -g karma-cli`
- [Gulp](http://gulpjs.com/) - Latest stable version install in Global `$ npm install -g gulp`
- [Heroku](heroku.com) - Download & Install latest stable version.
- Good knowledge of [ReactiveX API](http://reactivex.io/) & [NgRx](https://github.com/ngrx)
- [Redux DevTools Extension](http://extension.remotedev.io/) - Install Plugin for Chrome - Debugging application's state changes & provides power-ups for your Redux development workflow.
- And you should also have git installed to a better working flow.

## Installation
From root folder `./`
- `$ nvm use 7`
- `$ npm install`

Read help info:
- `$ npm run helper.cmd`

## Run Applications
Simply go on the subfolder project as `./mobile` or `./electron`

<b>Run Ionic Framework</b>

From `./mobile` folder
- `$ npm run dev` to start in dev mode
- `$ npm run prod` to start in prod mode (you have to config your production environments variable `./environment/production.ts`.)

<b>Run Electron</b>

From `./electron` folder
- `$ npm run dev` to start in dev mode
- `$ npm run prod` to start in prod mode (you have to config your production environments variable `./environment/production.ts`.)

<b>Run only Server REST</b>

Or only run server-side for developpment, from `./server` folder
- `$ npm run dev` to start server in dev mode


## Build Applications
Simply go on the subfolder project as `./mobile` or `./electron`

<b>Build Server REST</b>

From `./server` folder
- `$ npm run server:build`

<b>Build Ionic Framework</b>

First add selected platform: `$ ionic cordova platform add browser|ios|android` (one by one). Then you can build each platform with ionic CLI `$ ionic cordova build browser|ios|android --prod`

And we have the following npm run script ready to use:
- `$ npm run build:browser` to build app browser version
- `$ npm run build:browser --prod` to build app browser version in Angular Prod mode
- `$ npm run build:ios --prod` to build app iOS version
- `$ npm run build:android --prod` to build app Android version

If you want, you can add your own build run script.

<b>Build Electron</b>

From `./electron` folder
- `$ npm run build`

## Deploy Applications
Simply go on the subfolder project as `./server` or `./mobile` or `./electron`

<b>Deploy Server Side on Heroku</b>

From `./server` folder
- `$ npm run deploy:server` to deploy server side on heroku

<b>Deploy Ionic Framework Browser platform</b>

From `./mobile` folder
- `$ npm run deploy:client` to deploy client side on GitHub gh-pages


<b>Deploy Electron</b>
- coming soon...

## Helper & Documentations
Use custom Helper to have all cmd list available:
- `$ npm run helper.cmd` Displaying Command Line available
- `$ npm run docs` to generate or update app documentations
- open `./docs/index.html` to read app documentations

## Server REST API Endpoints
````
TODOS Endpoints

  path: http://localhost:8080/todos
  autenticate: false
  methode: $_GET / $_POST

  path: http://localhost:8080/todos/:id
  autenticate: false
  methode: $_GET / $_POST / $_DELETE


AUTH Endpoints

  path: http://localhost:8080/auth
  autenticate: false
  methode: $_POST

  path: http://localhost:8080/isauth
  autenticate: false/true
  methode: $_GET

  path: http://localhost:8080/signup
  autenticate: false
  methode: $_POST


USERS Endpoints

  path: http://localhost:8080/users
  autenticate: true
  methode: $_GET


  path: http://localhost:8080/users/:id
  autenticate: true
  methode: $_GET

````

## Documentation
App Documentations is generate by typeDoc. Use the following cmd to generate documentation
- `$ npm run docs` will generate Angular Application documentation and open the index doc in browser.

## Todo before get Started
- you have to change `mongod` npm script into `./server/package.json`. Update mongod $path with your own.
- create your own Heroku account and init your server project with the following cmd :
  - `git checkout master`
  - `$ heroku create`
  - check with `$ git remote -v`
  - optional: `$ git checkout <WORKING_BRANCH>`
- add your own production variable environment into `./environment/production.ts`

Heroku docs:
- get started doc for NodeJS
[https://devcenter.heroku.com/articles/git](https://devcenter.heroku.com/articles/git)
- how to use Heroku with NodeJS & Git [https://devcenter.heroku.com/articles/getting-started-with-nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

## About author
Hi, i'm a Front-end developper living in Geneva Switzerland and i build hybrid mobile & web applications for almost 15 years. You can follow me on Twitter @FazioNico or checkout my own website http://nicolasfazio.ch
