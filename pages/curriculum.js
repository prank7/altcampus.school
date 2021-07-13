import React from 'react';
import LayoutHome from '../components/Home/Layout';
import Head from 'next/head';

import ReadyToBuildCTA from '../components/Home/ReadyToBuildCTA';

function curriculum(props) {
  return (
    <>
      <Head>
        <title>Curriculum | AltCampus School</title>
      </Head>
      <LayoutHome>
        <section className="py-24 bg-royal-blue-100">
          <header className="text-center">
            <h2 className="font-bold text-5xl text-dark-blue-500">
              Exhaustive Course Content
            </h2>
          </header>
          <div className="text-center md:flex md:justify-between py-4 mb-16">
            <div className="py-6 md:py-12 course-icon relative md:w-1/4 ">
              <div className="relative z-10 border-r border-dark-blue-100">
                <p className="text-6xl number-1 font-mukta">14</p>
                <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
                  Modules
                </p>
              </div>
              <img
                className="inline-block absolute"
                src="/assets/media/modules.svg"
                alt="Modules"
              />
            </div>
            <div className="py-6 md:py-12 course-icon relative md:w-1/4">
              <div className="relative z-10 border-r border-dark-blue-100">
                <p className="text-6xl number-2 font-mukta">80+</p>
                <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
                  Topics
                </p>
              </div>
              <img
                className="inline-block absolute"
                src="/assets/media/topic.svg"
                alt="Topics"
              />
            </div>
            <div className="py-6 md:py-12 course-icon relative md:w-1/4">
              <div className="relative z-10 border-r border-dark-blue-100">
                <p className="text-6xl number-3 font-mukta">200+</p>
                <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
                  Exercises
                </p>
              </div>
              <img
                className="inline-block absolute"
                src="/assets/media/ex.svg"
                alt="Exercises"
              />
            </div>
            <div className="py-6 md:py-12 course-icon relative md:w-1/4">
              <div className="relative z-10">
                <p className="text-6xl number-4 font-mukta">40+</p>
                <p className="text-xl uppercase font-semibold text-dark-blue-600 font-lato">
                  Projects
                </p>
              </div>
              <img
                className="inline-block absolute"
                src="/assets/media/project.svg"
                alt="Projects"
              />
            </div>
          </div>

          <div className="container mx-auto px-16">
            <div className="p-8 bg-dark-blue-100">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                UNIX & GIT
              </h3>
              <div className="">
                <div className="">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Introduction to Unix & Shell Commands
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Introduction to Git
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Branching and Merging in Git
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Collaborating with Github
                  </p>
                </div>
                <div className="module-projects"></div>
              </div>
            </div>

            <div className="p-8  bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                HTML & CSS Fundamentals
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Introduction to Web and HTML & CSS
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Box Model</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Positioning
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Flexbox</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Typography
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Adding Media, Lists, Tables, Forms
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Responsive Web Design
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Building Resume in HTML & CSS
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Local Gym Website
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Web Developer Conference Website
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Insurance Company Website
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Blog</p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Gallery</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-100">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                JavaScript Fundamentals
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Value, Variable and types
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Functions</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Data Structure (Arrays and Objects)
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Array and String methods
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Debugging & Chrome Developer Tools
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Introduction to DOM
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - DOM and Events
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm py-1 px-2 text-sm text-orange-800 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Implement array methods
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Calculator
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Chrome extension
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Memory Game
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- TODO app</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - People of GOT
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Login and signup modal
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                ADVANCED CSS
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Complex Selectors
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Preprocessor (SASS)
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Transform, Transition & Animation
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- CSS Grid</p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta mt-6 md:mt-0">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - SaaS - Admin Panel Layouts
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Portfolio Design
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Browser Extension Design
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Final Project
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-100">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                ADVANCED JAVASCRIPT
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Higher order functions
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Scope</p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Closure</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Advanced DOM & Canvas
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Prototypal nature of object
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Prototypal inheritance, this & classNamees
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - AJAX, Promise & Async/await
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Error Handling & Writing Tests
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm py-1 px-2 text-sm text-orange-800 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - 2D Breakout Game
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Quiz app using OOP
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Implement fetch
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Reddit clone
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Github finder
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                Node.js
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - HTTP Protocol
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Introduction to Node.js
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Node.js Architecture
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Creating HTTP server
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Working with FileSystem
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Working with core Node.js modules
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Package Manager and External modules
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Dynamic Portolio App
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Building CLI in Node.js
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - FileSystem CRUD
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-100">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                MongoDB
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - SQL vs NoSQL
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Introduction to MongoDB
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Working with Mongo Shell
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - CRUD operations in MongoDB
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Advanced query and update operations
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Indexes</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Aggregations
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm py-1 px-2 text-sm text-orange-800 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Twitter Database Model
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                SERVER SIDE APPS WITH Express.js & MongoDB
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Express.js Fundamentals
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Middlewares in Express.js
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - MVC Pattern
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Templating and Rendering Dynamic Pages
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Mongoose ORM
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Designing Database Models
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Error Handling & Writing Tests
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - CRUD in Express with Mongoose
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Session Based Authentication & Authorization
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">- Blog App</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Shopping Cart
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Book Store
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                API & AUTH
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - OAuth using Passport.js
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - APIs in Node.js
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - JWT based Authentication
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - API Versioning, Authentication & Authorization
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm py-1 px-2 text-sm text-orange-800 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Medium Clone API
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Shopping Cart
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Book Store
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                React.js Fundamentals
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Why React?
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Component and Props
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - State and Events
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Lifecycle and Data fetching
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Forms (Controlled Component)
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Lifting state up
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Thinking in React
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Type Checking with PropTypes
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">- ToDo App</p>
                  <p className="text-lg text-dark-blue-400 mb-2">- News App</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Tic tac toe
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                Advanced React.js
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Routing in React
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Authentication and authorisation
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Uncontrolled Component
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- Context</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Accessibility & Error Boundaries
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Why Redux?
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Async Actions, Reducers and Store in Redux
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Redux Middlewares and Connecting with React
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Optimizing Performance
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - React Hooks
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm py-1 px-2 text-sm text-orange-800 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Medium Clone
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Redux Implementation
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Writing Custom Redux Middleware
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Instagram Clone
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                Advanced Server Side Applications
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Advanced Database Design
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Realtime Apps with Socket
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Caching with Redis
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Working with third-party APIs
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2"></p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Slack Clone
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                Web Security & Deployment
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - XSS, CSRF, CORS
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Session Attacks
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">- DDoS</p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Configuring & Deploying Applications
                  </p>
                </div>
                <div className="md:w-2/6"></div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-dark-blue-500 mb-6">
                Data Structure & Algorithms
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Linked List, Queue, Stack, Hash Table, Heap, Tree
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Math, Sets, Strings
                  </p>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Sorting and Searches
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-blue-200 inline-block rounded-sm tracking-normal py-1 px-2 text-sm text-dark-blue-500 mb-3 mt-6 md:mt-0 font-mukta">
                    EXERCISES
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Solve 100s of problems
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-dark-blue-200">
              <h3 className="uppercase text-3xl font-bold text-green-theme-700 mb-6">
                Capstone
              </h3>
              <div className="md:flex md:justify-between">
                <div className="md:w-4/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm tracking-normal font-normal py-1 px-2 text-sm text-orange-800 mb-3 font-mukta">
                    TOPICS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Putting Everything Together
                  </p>
                </div>
                <div className="md:w-2/6">
                  <h5 className="bg-gold-300 inline-block rounded-sm py-1 px-2 text-sm text-orange-800 mb-3 mt-6 md:mt-0 font-mukta">
                    PROJECTS
                  </h5>
                  <p className="text-lg text-dark-blue-400 mb-2">
                    - Shopify Clone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ReadyToBuildCTA />
      </LayoutHome>
    </>
  );
}

export default curriculum;
