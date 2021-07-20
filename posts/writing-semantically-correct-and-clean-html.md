---
title: 'Writing semantically correct and clean HTML'
description: 'Whether we are a beginner or an expert in HTML it is important to follow some set of rules to keep our HTML documents consistent and well organized.'
date: '2020-05-30'
blurb: 'Whether we are a beginner or an expert in HTML it is important to follow some set of rules to keep our HTML documents consistent and well organized.'
photo: '/images/posts/writing-semantically-correct-and-clean-html.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: suraj122
---

Whether we are a beginner or an expert in HTML it is important to follow some set of rules to keep our HTML documents consistent and well organized. Writing clean code should be one of our biggest concerns.

> Initially, beginners just focus on making the layout. While this is an important first step, it leaves us with messy code.
> One should always refactor and try to make the code look as clean and beautiful as possible.

Writing the best code not only keeps our code clean but also plays an important role in SEO. Here I am listing a few best practices that will keep our HTML code clean and impressive for those who read it including ourselves.

### 1. Use Proper Document Structure

HTML, by nature, is a forgiving language that allows even poorly written code to execute. Our pages will render without elements such as `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`. But without these structural elements, pages will not render properly in every browser.

**Bad:**

```html
<html>
  <h1>Hello World</h1>
  <p>This is a web page.</p>
</html>
```

**Good:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <!-- Other meta tags -->
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

### 2. Always Write Standards-Compliant Markup

Make sure to open and close and nest elements properly.

**Bad:**

```html
<p id="intro"><strong>AltCampus, the alternative to college
that you wish existed.</p></strong>
<p id="intro">A 6-month program that helps you become a software developer.
```

**Good:**

```html
<p class="intro">
  <strong>AltCampus, the alternative to college that you wish existed.</strong>.
</p>
<p class="intro">
  A 6-month program that helps you become a software developer.
</p>
```

### 3. Indent the code

Intended code is easier to read, easier to understand, and easier to maintain.

**Bad:**

```
<!DOCTYPE html>
<html>
<head>
<title>Hello World</title>
</head>
<body>
<h1>Hello World</h1>
<p>This is a web page.</p>
</body>
</html>
```

**Good:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

### 4. Keep the Syntax Organised

There are a few quick rules that can help us to keep our code organized. Such as:

- Indent the nested elements.
- Use lowercase for elements, attributes, and values.
- Use either single or double quotes, but we should be consistent with whatever we choose.
- Omit the values for the boolean attribute.

**Bad:**

```html
<aside>
  <h3>Chicago</h3>
  <h5 hidden="HIDDEN">City in Illinois</h5>
  <img
    src="chicago.jpg"
    alt="Chicago, the third most populous city in the United States"
  />
  <ul>
    <li>234 square miles</li>
    <li>2.715 million residents</li>
  </ul>
</aside>
```

**Good:**

```html
<aside>
  <h3>Chicago</h3>
  <h5 hidden>City in Illinois</h5>
  <img
    src="chicago.jpg"
    alt="Chicago, the third most populous city in the United States"
  />
  <ul>
    <li>234 square miles</li>
    <li>2.715 million residents</li>
  </ul>
</aside>
```

Consistency is important to keep our code fully organized. When we find a specific practice that we like. We should stick to it, and use it everywhere, and not mix up.

### 5. Make Use of Semantic Elements

The library of HTML elements is really big, we can use any elements to display our content. Displaying our content on a page is easy, but displaying with proper meaning and intent can be tricky. So choose tags wisely, it should always be semantically correct.

For e.g. an important line should not be wrapped in `<span>` tag but in any of the heading tags(`<h1>..<h6>`). Use `<aside>` for creating sidebar rather than generic `<div>` etc.

**Bad:**

```html
<span class="heading"><strong>AltCampus</span></strong>
<br><br>
The Alternative to College That You Wish Existed
<br><br>
```

**Good:**

```html
<h1>AltCampus</h1>
<p>The Alternative to College That You Wish Existed</p>
```

### 6. Use `<h1>` Tag Only Once Per Page

The `<h1>` tag plays a significant role in ranking our page on search engines, so we should assign it to the most important text on our page.

**Bad:**

```html
<h1>AltCampus</h1>
<p>The Alternative to College That You Wish Existed</p>
<h1>Full Stack Web Development</h1>
<p>
  Immersive bootcamp, rigorous curriculum, and the right environment to learn
  software development.
</p>
```

**Good:**

```html
<h1>AltCampus</h1>
<p>The Alternative to College That You Wish Existed</p>
<h2>Full Stack Web Development</h2>
<p>
  Immersive bootcamp, rigorous curriculum, and the right environment to learn
  software development.
</p>
```

### 7. Exterminate "Divitis"

We often overuse divs, to style the elements. It works for styling purposes but does not add meaning to our content on a page.

**Bad:**

```html
<div class="container">
  <div class="article">
    <div class="headline">Headlines Across the World</div>
  </div>
</div>
```

**Good:**

```html
<section class="container">
  <article>
    <h1>Headlines Across the World</h1>
  </article>
</section>
```

### 8. Avoid Too Much Commenting

Commenting code is good practice, but too much commenting makes our code look bad. HTML provides self-explanatory elements. Use commenting to make things a bit clearer, not for obvious or badly written code.

> "Don't comment bad code. Rewrite it." - Brian W. Kernighan

**Bad:**

```html
<!-- Primary Section -->
<div>
  <!-- Article -->
  <div>
    <!-- Heading -->
    <div>Headlines Across the World</div>
  </div>
</div>
```

**Good:**

```html
<!-- Primary Section -->
<section>
  <article>
    <h1>Headlines Across the World</h1>
  </article>
</section>
```

### 9. Do Not Use Inline Styling, Instead Use External Stylesheet

Inline styling may seem easier at first, but it is harder to maintain and also increases the line of code.

Using external stylesheet gives us the option to reuse our code. Also, we can style all our pages using a single external stylesheet.

**Bad:**

```html
<p style="color: #393; font-size: 24px;">Thank you!</p>
```

**Good:**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Hello World</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <p class="greeting">Hello, how are you?</p>
  </body>
</html>
```

### 10. Alternative Text Attribute on Images

Using alternative text attributes on <img> elements provides context to screen readers and is good for accessibility.

**Bad:**

```
<img src="football.jpg">
```

**Good:**

```html
<img
  src="football.jpg"
  alt="Two little kids are playing footbal, while their moms are watching"
/>
```

### 11. Practical ID and Class Values:

Choosing good class and id names requires a skill that comes with experiences. One thing we can do as a beginner is to try to choose our class or id names based on the content and not on its styles.

**Bad:**

```html
<p class="red">Error! please try again.</p>
```

**Good:**

```html
<p class="error">Error! please try again.</p>
```

### 12. Use Proper White Spaces

Many people especially beginners write messed up codes without using whitespaces. Also, it is common to find they use extra spaces in the attribute values.

**Bad:**

```
<body>
<h1>List</h1>
<ul class=" list "><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li></ul>
</body>
```

**Good:**

```html
<body>
  <h1>List</h1>
  <ul class="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
</body>
```

### 12. Continually Refactor Code

Over time as websites grow and evolve, the codebase also grows, which may lead to some unwanted and complexity in the code. Instead of waiting until we are finished, it is good to take breaks and refactor our code multiple times as we work. This will help us to save time in the end identifying the errors especially when our document is too lengthy.

With so many elements, attributes, values, and many more there is always a lot to learn. These are the few best practices that we must keep in mind in our next project which will make a HUGE difference between clean and messy codes.

We should always start our next project with a motto:

> "This would be the best code I have ever written in any project so far".
