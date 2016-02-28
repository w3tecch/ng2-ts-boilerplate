![Webpack and Angular 2](icon.png "Webpack and Angular 2")


# ng2-seed

TODO: Description

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
1. Install all dependencies
  ```
  //In your project folder
  npm install
  ```

## Commands

### Running the server
```
npm run start
```

### Generate docs and start the docs server
```
npm run docs
```

### Run test
```
npm run test
```

### Build the app
```
npm run build
```

# App Structure
```
projectRoot/
   |
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
   |   |   + filters/  
   |   |   + templates/    
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
   |   |   + app-config.ts (loads the config.json file)
   |   |   + <appName>.ts (the app component) 
   |   |   + <appName>.html (the app view) 
   |   |   + <appName>.scss (the app styles) 
   |   |
   |   +-- assets/ 
   |   |   |
   |   |   +-- fonts/
   |   |   +-- i18n/
   |   |   +-- images/
   |   |   +-- configs/
   |   |       |
   |   |       +-- <environmentName>.json (config files for the given environment) 
   |   | 
   |   +-- index.html ("MAIN" - This is the start page of your single-page-application and has some gulp vars)
   |   +-- favicon.html
   |   +-- boot.ts
   |   +-- vendor.ts
  ```

# License
 [MIT](/LICENSE)