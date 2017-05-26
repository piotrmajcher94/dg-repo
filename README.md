# How to start

Check if you have node installed, type `npm version` in the terminal/command line,  
if you don't have it install it [from here](https://www.npmjs.com/package/npm).

Install the Angular CLI with `npm install -g @angular/cli`  

Clone this repository `git clone https://github.com/piotrmajcher94/dg-frontend.git`

Open the termina/command line in the folder of the cloned repository and type `npm install`

Now just type `ng serve` and go to `localhost:4200` to verify if the app works.

## Creating new components

You can create new components with `ng generate component component-name --nospec` (the `nospec` to skipe the .spec files)  
If you want to nest the new component within another existing one type:  
`ng generate component ./existing-component-name/new-nested-component-name --nospec`  
(the root for this command is the `app` folder)  
You can make the command shorter by just typing `ng g c new-component --nospec`

# DgFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
