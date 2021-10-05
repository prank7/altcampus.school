---
title: 'Most fequently Asked React JS Interview Questions'
description: Learning a framework/library like React JS comes with lot of practice. For practice we need different project ideas. In this list I will help you with projects to create while learning React JS
date: '2021-09-15'
blurb: Learning a framework/library like React JS comes with lot of practice. For practice we need different project ideas. In this list I will help you with projects to create while learning React JS
photo: '/images/posts/10-project-ideas-for-learning-react-js.jpg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: nnnkit
---

### 1. What is JSX?

JSX is a syntax extension to JavaScript which looks similar to HTML. It is used to describe what the UI should look like. It allows us to write HTML in React by converting HTML tags into React elements. JSX makes it a lot more easier to create DOM element using JavaScript.

Below is an example of how we write a component in React with and without JSX:

```js
// With JSX
class App extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

// Without JSX
class App extends React.Component {
  render() {
    return React.createElement('h1', null, 'Hello World!');
  }
}
```

### 2. What is the difference between React Element and React Component?

**React element** is an object representation of a DOM node. Which is used to create the DOM element that get's rendered into the browser.

We write JSX in React like `<h1>Hello</h1>` which gets converted into React element using `React.createElement()`. The React element is than converted to DOM element with the help of `ReactDOM.render` and get's renderd on the browser. The object created by `React.createElement` is known as React element.

![From JSX to Browser](/images/posts/ultimate-guide-to-react/element.png)

Example of a React element:

```js
// How to create a React element
React.createElement('h1', { className: 'heading' }, 'Hello World');

// What React element looks like
{
  type: 'h1',
  props: {
    children: 'Hello World',
    className: 'heading'
   }
}

// What get's rendered with the help of ReactDOM.render()
<h1 className="heading">Hello World</h1>
```

A **React component** is a function or a Class which can accept input and returns a React element.

```js
// Example of a component
function App(props) {
  return <h1>Hello {props.username}</h1>;
}

// Above component get's converted to React element like this
function App(props) {
  return React.createElement('h1', null, 'Hello ', props.username);
}
```

### 3. Why the component name starts with uppercase?

In JSX, lower-case tag names are considered to be HTML tags like `div`, `h1`, `p` etc. So, to differentiate between DOM elements and React components React team made a rule that all React components must start with a upper case letter, or contain a dot.

- `<component />` compiles to `React.createElement('component')` (html tag)
- `<Component />` compiles to `React.createElement(Component)`
- `<obj.component />` compiles `to React.createElement(obj.component)`

### 4. Can web browsers read JSX directly?

No, browsers only understands HTML, CSS and JavaScript. For browser to understand JSX it needs to be converted to plain JavaScript. The conversion is done by tools like [babel](https://babeljs.io/repl) and [htm](https://github.com/developit/htm)

### 5. How are JSX different from HTML?

- You need to return a single parent element in JSX
- You can write JavaScript directly in JSX
- All tags in JSX can be self-closing
- `class` becomes `className` and `for` becomes `htmlFor` in JSX
- All HTML attributes are written as camelCase in JSX

### 6. When to use a Class Component over a Function Component?

If the component needs **state** or **lifecycle methods** then use class component otherwise use function component.

With the introduction of [hooks](https://reactjs.org/docs/hooks-intro.html) you can use state and lifecycle even in functional component.

### 7. What are the differences between state and props?

**Similarities**

- State can change but props are immutable
-

### 8. Why should we not update the state directly?

### 9. What are synthetic events in React?

### 10. What is the benefit of using `key` prop in arrays of elements?

### 11. What is Virtual DOM and how it works?

### 12. What is the difference between controlled and uncontrolled component?

### 13. What is Lifting State Up in React? And when do we use it?

### 14. What are the different phases of component lifecycle?

### 15. When to use context in React?

### 16. What is the use-case of fragments in React?

### 17. Is it possible to loop inside JSX? If not how can we write loop in JSX?

### 18. How can we pass data from children to parent?

### 19. What are the advantages of using React Hooks?

### 20. How does `useEffect` hooks work?

If you are someone new to all of this, take a look at [our course](https://altcampus.school) which takes you from absolute beginner to becoming a full-stack developer and getting your first developer job. It includes everything (assignments, video lectures, quizzes, interview questions and job prepration) you will need for you journey of becoming a full-stack developer.
