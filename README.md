# InterviewProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Installation
Run `npm install` to install the dependencies

## Run Application
Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Project Requirements

## UI
- Create a login page component.
- Create a home page component.
- The login page loads by default.
- When the user is authenticated the user is routed to the home page.
- On the home page make sure the active user is displayed along with a way for the user to logout.
- Be as creative as you want with both the login page and home page to make them look like a profesional site.

## Service
- An existing Angular UserService is provided with a user model and a default set of users.
- Update the service to perform the login and logout requests for users. Normally the service would forward the requests via REST to a server but for this exercise we will stop at the service layer.
- Add a login request that accepts a username and password for user access.
- Add a logout request that logs the curent user out.
- Maintain a user session as state. For example, when a user logs is the session is saved such that a reload of the page remembers the user from the active session.
- Track each user login/logout with a date/time stamp.
- Add a way to request the last login date/time per user.




# Other userful documentation

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
