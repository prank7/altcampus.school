import React from 'react';

function CourseDetails(props) {
  return (
    <section class='course-details padding' id='course-details'>
      <div class='course-details-heading'>
        <h2>
          Like we said <br />
          Exhaustive Course Content
        </h2>
      </div>
      <div class='course-highlights'>
        <div class='col'>
          <div class='module'>
            <p class='numbers'>14</p>
            <p class='topics'>Modules</p>
          </div>
          <img src='/assets/media/modules.svg' alt='Modules' />
        </div>
        <div class='col'>
          <div class='topic'>
            <p class='numbers'>80+</p>
            <p class='topics'>Topics</p>
          </div>
          <img src='/assets/media/topic.svg' alt='Topics' />
        </div>
        <div class='col'>
          <div class='exercise'>
            <p class='numbers'>200+</p>
            <p class='topics'>Exercises</p>
          </div>
          <img src='/assets/media/ex.svg' alt='Exercises' />
        </div>
        <div class='col'>
          <div class='project'>
            <p class='numbers'>40+</p>
            <p class='topics'>Projects</p>
          </div>
          <img src='/assets/media/project.svg' alt='Projects' />
        </div>
      </div>

      <div class='course-content container'>
        <div class='module-container'>
          <h3>UNIX & GIT</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Introduction to Unix & Shell Commands</p>
              <p>- Introduction to Git</p>
              <p>- Branching and Merging in Git</p>
              <p>- Collaborating with Github</p>
            </div>
            <div class='module-projects'></div>
          </div>
        </div>

        <div class='module-container'>
          <h3>HTML & CSS Fundamentals</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Introduction to Web and HTML & CSS</p>
              <p>- Box Model</p>
              <p>- Positioning</p>
              <p>- Flexbox</p>
              <p>- Typography</p>
              <p>- Adding Media, Lists, Tables, Forms</p>
              <p>- Responsive Web Design</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Building Resume in HTML & CSS</p>
              <p>- Local Gym Website</p>
              <p>- Web Developer Conference Website</p>
              <p>- Insurance Company Website</p>
              <p>- Blog</p>
              <p>- Gallery</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>JavaScript Fundamentals</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Value, Variable and types</p>
              <p>- Functions</p>
              <p>- Data Structure (Arrays and Objects)</p>
              <p>- Array and String methods</p>
              <p>- Debugging & Chrome Developer Tools</p>
              <p>- Introduction to DOM</p>
              <p>- DOM and Events</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Implement array methods</p>
              <p>- Calculator</p>
              <p>- Chrome extension</p>
              <p>- Memory Game</p>
              <p>- TODO app</p>
              <p>- People of GOT</p>
              <p>- Login and signup modal</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>ADVANCED CSS</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Complex Selectors</p>
              <p>- Preprocessor (SASS)</p>
              <p>- Transform, Transition & Animation</p>
              <p>- CSS Grid</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- SaaS - Admin Panel Layouts</p>
              <p>- Portfolio Design</p>
              <p>- Browser Extension Design</p>
              <p>- Final Project</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>ADVANCED JAVASCRIPT</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Higher order functions</p>
              <p>- Scope</p>
              <p>- Closure</p>
              <p>- Advanced DOM & Canvas</p>
              <p>- Prototypal nature of object</p>
              <p>- Prototypal inheritance, this & Classes</p>
              <p>- AJAX, Promise & Async/await</p>
              <p>- Error Handling & Writing Tests</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- 2D Breakout Game</p>
              <p>- Quiz app using OOP</p>
              <p>- Implement fetch</p>
              <p>- Reddit clone</p>
              <p>- Github finder</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>Node.js</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- HTTP Protocol</p>
              <p>- Introduction to Node.js</p>
              <p>- Node.js Architecture</p>
              <p>- Creating HTTP server</p>
              <p>- Working with FileSystem</p>
              <p>- Working with core Node.js modules</p>
              <p>- Package Manager and External modules</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Dynamic Portolio App</p>
              <p>- Building CLI in Node.js</p>
              <p>- FileSystem CRUD</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>MongoDB</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- SQL vs NoSQL</p>
              <p>- Introduction to MongoDB</p>
              <p>- Working with Mongo Shell</p>
              <p>- CRUD operations in MongoDB</p>
              <p>- Advanced query and update operations</p>
              <p>- Indexes</p>
              <p>- Aggregations</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Twitter Database Model</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>SERVER SIDE APPS WITH Express.js & MongoDB</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Express.js Fundamentals</p>
              <p>- Middlewares in Express.js</p>
              <p>- MVC Pattern</p>
              <p>- Templating and Rendering Dynamic Pages</p>
              <p>- Mongoose ORM</p>
              <p>- Designing Database Models</p>
              <p>- Error Handling & Writing Tests</p>
              <p>- CRUD in Express with Mongoose</p>
              <p>- Session Based Authentication & Authorization</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Blog App</p>
              <p>- Shopping Cart</p>
              <p>- Book Store</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>API & AUTH</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- OAuth using Passport.js</p>
              <p>- APIs in Node.js</p>
              <p>- JWT based Authentication</p>
              <p>- API Versioning, Authentication & Authorization</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Medium Clone API</p>
              <p>- Shopping Cart</p>
              <p>- Book Store</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>React.js Fundamentals</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Why React?</p>
              <p>- Component and Props</p>
              <p>- State and Events</p>
              <p>- Lifecycle and Data fetching</p>
              <p>- Forms (Controlled Component)</p>
              <p>- Lifting state up</p>
              <p>- Thinking in React</p>
              <p>- Type Checking with PropTypes</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- ToDo App</p>
              <p>- News App</p>
              <p>- Tic tac toe</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>Advanced React.js</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Routing in React</p>
              <p>- Authentication and authorisation</p>
              <p>- Uncontrolled Component</p>
              <p>- Context</p>
              <p>- Accessibility & Error Boundaries</p>
              <p>- Why Redux?</p>
              <p>- Async Actions, Reducers and Store in Redux</p>
              <p>- Redux Middlewares and Connecting with React</p>
              <p>- Optimizing Performance</p>
              <p>- React Hooks</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Medium Clone</p>
              <p>- Redux Implementation</p>
              <p>- Writing Custom Redux Middleware</p>
              <p>- Instagram Clone</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>Advanced Server Side Applications</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Advanced Database Design</p>
              <p>- Realtime Apps with Socket</p>
              <p>- Caching with Redis</p>
              <p>- Working with third-party APIs</p>
              <p></p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Slack Clone</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>Web Security & Deployment</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- XSS, CSRF, CORS</p>
              <p>- Session Attacks</p>
              <p>- DDoS</p>
              <p>- Configuring & Deploying Applications</p>
            </div>
            <div class='module-projects'></div>
          </div>
        </div>

        <div class='module-container'>
          <h3>Data Structure & Algorithms</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Linked List, Queue, Stack, Hash Table, Heap, Tree</p>
              <p>- Math, Sets, Strings</p>
              <p>- Sorting and Searches</p>
            </div>
            <div class='module-projects'>
              <h5>EXERCISES</h5>
              <p>- Solve 100s of problems</p>
            </div>
          </div>
        </div>

        <div class='module-container'>
          <h3>Capstone</h3>
          <div class='module-details'>
            <div class='module-topics'>
              <h5>TOPICS</h5>
              <p>- Putting Everything Together</p>
            </div>
            <div class='module-projects'>
              <h5>PROJECTS</h5>
              <p>- Shopify Clone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
