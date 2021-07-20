---
title: 'Full Stack Web Development Explained'
date: '2020-09-11'
blurb: What is Full stack web development and what are the various parts of it?
---


Full stack web development means the development of an application end-to-end, from what's visible in the browser to what happens behind the scenes.

There are two parts of full stack web development.

Frontend & Backend

### 1. Frontend
Frontend is everything that you see in the browser. It's how a web page looks, behaves and how you can interact with it. It's also referred to as 'Client side'.

Let's learn about various tools that we use to create frontend.

##### 1. HTML 
HTML, HyperText Markup Language, gives the content structure to the webpage. For example, text, images, videos, buttons, links various sections etc. If webpages were like buildings then think of HTML as the walls and pillars of the building.

##### 2. CSS
CSS, or Cascading Style Sheets, is a presentational language that helps us style the content of the webpage. Its used to make the appearance/look and feel of the page.

HTML & CSS together help us build good looking webpages.

###### 3. CSS frameworks (Bootstrap, Bulma, Tailwind etc.)
In Software development doing something from scratch requires a lot of effort and also maintaining it becomes hard. So developers choose to use existing frameworks to make their life easy. A Framework is basically collection of pre-written, standardized code with all the generic functionalities. It gives you a basic structure and design to get started with while allowing you to customize it according to your needs. 

Some popular CSS frameworks are Bootstrap, Bulma and Tailwind CSS etc. You can use them to quickly make your webpages look better.

##### 3. JavaScript
JavaScript, is a programming language that can run be run by the web browser itself. JavaScript helps us add interaction to the webpages. For e.g. when you click on a button and a popup comes up, that is being facilitated by JavaScript along with HTML & CSS.

Another example is that, it is also used to fetch data from the backend and display it in the browser.

##### 4. Frontend JavaScript frameworks (React.js/Vue.js/Angular.js etc)
Similar to CSS frameworks there are plenty of frontend JavaScript frameworks that help us organize our JavaScript code when we need to build an interaction rich webpage.

Some popular JavaScript Frameworks are React.js, Vue.js,  Angular.js. They abstract away a lot of common use cases in a way that it becomes easy to build quality, complex, interaction rich sites fairly quickly. 

### 2. Backend

Backend is where you store your data and run important business logics like say billing or user information of your software. It runs on a remote computer called server. It's not visible to the end user and it's also referred as 'Server side'. It's needed when you need to make a website dynamic, meaning showing changes based on changes in database.

E.g. So say while using your software, the user could do a certain thing in browser like say filling up a form. The ability to see the form and interact with in the browser is part of frontend but once the user submits the form the data has to be saved somewhere. Usually this data will be sent to your backend where you might want to save it in your database and then return a response back which browser can interpret and your frontend code can display. 

##### 1. Database (MySQL, PostgreSQL, MongoDB etc.) 
In order to make the application useful we would need to store the data somewhere. It's usually stored in a database. A database makes it easy to structure, organize, store, retrieve, update and delete the data. 

##### 2. Backend language (JavaScript run on Node.js, Ruby, Python etc)

In order to run our backend, we need a middle man that receives a request from frontend, talks to the database, runs business logic and also returns responses coming from the frontend. This middleman can be programmed in a programming language like Ruby, JavaScript, Python etc.

##### 3. Backend Framework (Express.js, Ruby on Rails, Django etc.)

Similar to frontend frameworks there are backend frameworks that come in with pre-built modules and libraries that make it easy to build custom features in backend.

Some popular examples are Ruby on Rails, Express.js, Django etc.

#### Putting together

Frontend is what shows up in the browser in form of HTML, CSS, JavaScript. When you do certain activity the frontend can request data from backend. Backend framework takes in the request, does some business logic and might return some data back in form of a response which will be displayed by used by the frontend to display in the browser

These are the main parts of frontend and backend. However you would also need a bunch of other tools to do various tasks in software development like using Git for collaborating with other people.

Hopefully, this gave you a good idea about what frontend and backend web development is.