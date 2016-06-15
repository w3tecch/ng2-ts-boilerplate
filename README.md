[![Build Status](https://travis-ci.org/w3tecch/ng2-ts-boilerplate.svg?branch=master)](https://travis-ci.org/hw3tecch/ng2-ts-boilerplate)
[![Dependency Status](https://david-dm.org/w3tecch/ng2-ts-boilerplate.svg)](https://david-dm.org/w3tecch/ng2-ts-boilerplate)
[![devDependency Status](https://david-dm.org/w3tecch/ng2-ts-boilerplate/dev-status.svg)](https://david-dm.org/w3tecch/ng2-ts-boilerplate#info=devDependencies)
[![StackShare](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/dweber019/angular2-typescript-with-webpack)

# Getting Started

## Prerequisites
1. Install [Node.js](http://nodejs.org)
	- on OSX use [homebrew](http://brew.sh) `brew install node`
	- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

2. Install these NPM packages globally
  ```
  npm install -g webpack typescript typings karma
  ```

## Dependencies
1. Navigate to your project folder to install all dependencies
  ```
  npm install
  ```

## Commands

### Running the server
```
npm start
```

### Generate docs and start the docs server
```
npm run docs
```

### Run test
```
npm test
```

### Build the app
```
npm run build
```

### Build the app
You can pass configurations to the app like this:
```
npm start --env prod
```
This can be passed to `start` and `build` command.

# App Structure
```
projectRoot/
   |
   +-- config/ (configurations)
   +-- dist/ (minified app version will placed by gulp here with the task 'gulp dist')
   +-- docs/ (has the generated docs from typedoc)
   |
   +-- src/
   |   |
   |   +-- app/
   |   |   |
   |   |   + components/
   |   |   + models/
   |   |   + services/
   |   |   + utils/
   |   |   + modules/
   |   |   |   |
   |   |   |   + <moduleName>/
   |   |   |       |
   |   |   |       + components/
   |   |   |       |   |
   |   |   |       |   + <componentName>.ts
   |   |   |       |   + <componentName>.html
   |   |   |       |
   |   |   |       + filters/
   |   |   |       |   |
   |   |   |       |   + <filterName>.filter.js
   |   |   |       |
   |   |   |       + services/
   |   |   |           |
   |   |   |           + <serviceName>.service.js
   |   |   |
   |   |   + app.config.ts (represents the project configuration)
   |   |   + <appName>.ts (the app component)
   |   |   + <appName>.html (the app view)
   |   |   + <appName>.scss (the app styles)
   |   |
   |   +-- assets/
   |   |   |
   |   |   +-- fonts/
   |   |   +-- i18n/
   |   |   +-- images/
   |   |
   |   +-- index.html ("MAIN" - This is the start page of your single-page-application and has some gulp vars)
   |   +-- boot.ts
   |   +-- vendor.ts
   +-- typings-custom/ (custom type definition)
  ```

#Supporter
<a href="https://www.browserstack.com"><img src="https://cdn.rawgit.com/w3tecch/ng2-ts-boilerplate/develop/supporters/browserStack.svg" height="75" /></a>

# License
 [MIT](/LICENSE)
