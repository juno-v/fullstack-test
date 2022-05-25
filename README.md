# Project Instructions:

# Run 'npm install' in root directory of project to install all tools

# Run 'npm start' to start the front end

# Set up backend

## Steps to start the back-end server:

(_Server created with json-server_)
<br />

### 1) cd /app/server

### 2) type 'json-server --watch database.json --port 8080' into terminal

### The URL to visit in development is under 'Resources'

### For example: 'http://localhost:3000/wizards'

### The JSON server automatically creates endpoint such as:

<br />

### GET /wizards

### GET /wizards/{id}

### POST /wizards

### PUT /wizards/{id}

### PATCH /wizards/{id}

### DELETE /wizards/{id}

<br />

#### \*\*\* start and stop server for updates data when completing any requests

#### \*\*\* A POST, PUT or PATCH request should include 'Content-Type: application/json' header to use the JSON in the request body. Otherwise it will result in a 200 OK but without changes being made to the data.

# Take Home Project Instructions

## Build a simple decomposed Key-Value store by implementing two services which communicate over a REST API.

## The first service, serving at the backend, should implement a basic JSON Rest API which provides a programmable entrypoint for the key-value store (feel free to use an in-memory data structure, such as a map or dictionary). The second service should be a small web application which uses the API to allow a user to interact with the key-value store through a web interface.

## The following functionality should be implemented:

### Store a value at a given key.

### Retrieve the value for a given key.

### Delete a given key.

#### Both the JSON Rest API and Web Interface should at a minimum be able to expose and implement these three functions.

# Features I've added on top of requirements:

## Edit Row

## Success/Failure Alerts

## Material UI Design

## React Testing Library

## Find each feature in their own branches/PRs for readability

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
