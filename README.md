# Online consultation mock-up

## Running the app

Note: This app was created with Node v20.12.1, previous node version may have compatibility issues

### Install all packages

```bash
yarn
```

### Run the application

```bash
yarn dev
```

### Run tests

```bash
yarn test
```

## Technical notes

- The app was created with vite, as it is a quick and easy way to setup a react project
- I did this in pure react, as there was no need for routing or backend calls
- Testing is done with react-testing-library and jest, as they're the most common way to do testing in react applications
-

## Extras

- Everything is fully accessible to screen readers (tested with Accessible Web Helper) and keyboard-only users
- The app is fully responsive regardless of screen size. I chose a breakpoint of 480px for going from mobile to desktop
- In a real world scenario, we should allow the users to go back and forth between questions, review their answers before submitting and see some sort of progress bar under their questions. I elected not to add that at the moment, as I wanted to be as literal as possible to what the task requires
