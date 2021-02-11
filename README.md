# Linkedin Login Integration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Environment variables

please change `environment.ts` with your values

please note that callback should contain `admin` as callback path (ex. `http://localhost:4200/admin`) since this will be the endpoint which will handel the callback request

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Flow explanation

The following is the steps we execute to login using linkedin account:

1) (Authorization API)[https://www.linkedin.com/oauth/v2/authorization] for the user to access authatication for Andela
2) (Access Token API)[https://www.linkedin.com/oauth/v2/accessToken] to fetch access token
3) (Profile API)[https://api.linkedin.com/v2/me] to access user profile
4) (Email API)[https://api.linkedin.com/v2/emailAddress] to access user email


## Main components

We have two main angular components which they contain the main setup

- Login component (/src/app/admin): it contains the part which redirect to the `Authorization Api`
- Admin component (/src/app/admin): it contains the callback part which will be executed after the callback and container the rest of the flow
