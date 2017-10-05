# Express

## General Information

This project was generated using the [express-generator](https://expressjs.com/en/starter/generator.html), which can be installed using yarn with `$yarn global add express-generator`. Keep in mind that you don't have to follow this structure strictly in your project.

### Structure 

* bin: This folder contains the executable NodeJS file. 
* node_modules: Will be generated once the dependencies are downloaded. It contains all dependencies.
* public: This folder contains all static resources accessible by the client.
* routes: Here you can find all router for the different paths of your API.
* views: In this folder, you place all of your views, the type of file depends on the chosen view engine. In this case, it's jade.
* app.js: Is the entry point to your application.
* package.json: It defines meta information of your project and also includes all dependencies with the used version.

## Setup 

First, start by downloading required dependencies. Using the following command `$ yarn install`.

## Usages

You can start this project by executing `$ yarn start`. Afterwards, you should be able to visit the [website](http://localhost:3000) from the image below.

![Image of the Webside](https://code.visualstudio.com/images/nodejs_express.png "Image of the Website")