---
title: 'Key MERN Stack Concepts'
description: 'MERN Stack is build of 4 robust technologies i.e. MongoDB, Express, React and Node. A full stack developer should be proficient in all the technology for developing frontend, backend and managing database.'
date: '2021-09-01'
blurb: 'MERN Stack is build of 4 robust technologies i.e. MongoDB, Express, React and Node. A full stack developer should be proficient in all the technology for developing frontend, backend and managing database.'
photo: '/images/posts/key-MERN-concepts.jpg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: ravi11o
---

MERN Stack is build of 4 robust technologies i.e. MongoDB, Express, React and Node.

A full stack developer should be proficient in all the technology for developing frontend, backend and managing database.

As a MERN stack developer,

- We use React as view layer for forntend UI development
- Node/Express as backend for handling logic for the application
- MongoDB as database for application data

All these libraries are keys for being a MERN stack developer.

I am going to list some keys concepts from each of these technologies, mastering those can speed up the MERN stack learning process.

I will list them in order which is available in the [roadmap](https://altcampus.school/posts/the-complete-roadmap-to-learn-full-stack-web-development-using-the-MERN-stack) so that developers can learn them in a sequence.

## Key concepts in Node.js

### 1. Understand HTTP Protocol

- What is HTTP ?
- Different parts of HTTP
  - URL(Uniform Resource Locator)
  - Messages(Request & Response Messages)

### 2. Understand Core Node Modules

- http
- fs
- url

### 3. Create Basic Server

- use http's createServer to create a basic server
- handle request and response object
- Request methods
- Response status codes
- parse requested URL

```js
var http = require('http);
http.createServer((request, response) => {
  if(req.url === '/') {
    res.write("Welcome");
    res.end()
  } else {
    res.end(Page Not Found);
  }
}).listen(3000);
```

### 4. Handle data from request

- Capture data on the server side
- Handle FORM data from requests
- Handle JSON data from clients

## Key Concepts in MongoDB

### 1. MongoDB Structure

- Database at the top
- Collections
- Documents
- JSON Objects

This is how a document looks like in mongoDB

```js
{
	"_id" : ObjectId("5f51ed3aa037f5e14ec7c0c5"),
	"price" : 60000,
	"category" : "laptop",
	"tags" : [
		"laptop",
		"mac",
		"electronics"
	],
	"name" : "Macbook Air"
}
```

### 2. CRUD Operations in MongoDB

- Insert/InsertMany for adding doucments
- Find to retrieve the documents
- Update/UpdateMany for updaing exisiting records
- Remove/Delete for deleting documents

### 3. Advanced CRUD Operations

- Update nested objects
- Update array fields with new elements
- Increment/Decrement numerical values
- Sorting/Filtering based on Date

### 4. Indexes and aggregations in MongoDB

- Single Field Index
- Multikey Indexes
- text based Indexes
- Aggregation Pipeline Operators like
  - \$group
  - \$match
  - \$distinct
  - \$project
  - $sum, $avg

### 5. Import/Export data to/from mongoDB

- Import data to mongoDB database from JSON/CSV files
- Export mongoDB database to JSON/CSV files

## Key concepts in Express

### 1. Initiate package.json file & import external modules

- use npm scripts to create package.json metadata file
- use `npm install` scripts to install external modules from NPM global repository.
- Understand `Semantic Versioning(SEMVER)` for package maintainance
- Use external packages in node projects

### 2. Express Fundamentals

- Create a basic server in express
- Understanding Middlewares

  - Built-in Middlewares like express.json(), express.static() etc..
  - Third Party Middlewares like morgan or session.
  - Error Handler Middlewares

- Routing in Express applications

A basic express application looks like below:

```js
// require express module
var express = require('express);
// Mount express app on app variable
var app = express();
// middlewares
app.use(express.json());
// routes
app.get('/', (req, res) => {
  res.send('Welcome to Express');
});
// error handler middleware
app.use((req, res, next) => {
  res.send('page Not Found)
})

```

### 3. Mongoose ORM

Mongoose is a wrapper around the mongoDB database which helps express application connect to mongoDB database and perform CRUD applictaions by designing structure of documents.

- Install mongoose external NPM package
- connect to MongoDB database using `mongoose.connect()`
- Create data models in express for saving it into database
- Adds required validations for data used by the express application
- Provides helper functions to the application for performing CRUD operations
- Learn hooks and methods provided by mongoose

### 4. Authentication & authorization

- Implement User registration
- Hash passwords being saved into database
- Implement simple email/password login

### 5. Create APIs using Express

Application program Interface(API) is used as an interface between clients and application server for exchange of data. Clients can send data to server via API and vice-versa.

All the exchange of data happens using JSON format. There are other formats as well for exchange of data like XML/HTML formats but JSON is widely used and adopted way of transferring data between client <-> server.

- Understand API & its principles
- Create API routes in express application
- Learn about JSON Web Tokens and their structure
- Learn JWT Authentication in express
  - Create JWT tokens after successful login
  - Verify JWT token for logged-in user
  - Verify logged-in User
  - Handle protected endpoints

## Key concepts in React

React is the frontend part of the full-stack application which uses HTML, CSS & Javacsript to create UI components which are rendered on the browser.

It uses a concept of virtual DOM which re-renders the actual DOM based on changed state of data received from the application server.

### 1. Introduction to React & Components

- Why React ?
- Class Vs Functional Component
- Component and Props
- JSX VS HTML
- Using create-react-app for boilerplate
- Breaking UI into smaller components
- Understand Import/Export in React

### 2. State & Form

- Understanding React State
- Conditional rendering in React
- Handling Input Elements & Validating Forms
- Controlled Vs Uncontrolled Component

### 3. Lifecycle Hooks

- Render
- ComponentDidMount
- ComponentDidUpdate
- ComponentWillUnmount

### 4. Routing in React

### 5. Advanced topics in React

- Context API
- Advanced Hooks
- Using Redux for state management

That's a wrap up on all the key concepts in MERN stack. If you found this article to be informative then you would love [the ultimate guide to MERN stack](./the-ultimate guide to mern stack).
