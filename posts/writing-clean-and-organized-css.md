---
title: 'Writing clean and organized CSS'
description: 'In my previous article, I have listed a few best practices that will keep our HTML code clean and impressive. Similar to HTML, in order to write solid CSS and avoid mistakes, here again, I am listing a few best CSS practices.'
date: '2021-01-28'
blurb: 'In my previous article, I have listed a few best practices that will keep our HTML code clean and impressive. Similar to HTML, in order to write solid CSS and avoid mistakes, here again, I am listing a few best CSS practices.'
photo: '/images/posts/writing-clean-and-organized-css.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: suraj122
---

In my previous [article](https://altcampus.io/blog/writing-semantically-correct-and-clean-html), I have listed a few best practices that will keep our HTML code clean and impressive.

Similar to HTML, in order to write solid CSS and avoid mistakes, here again, I am listing a few best CSS practices.

### 1. Write CSS using multiple lines and spaces(make it readable)

The readability of your code is really important. Better readability makes code easier to read and edit in the future.

**Bad:**

```css
a,
.btn {
  background: #aaa;
  color: #f60;
  font-size: 18px;
  padding: 6px;
}
```

**Good:**

```css
a,
.btn {
  background: #aaa;
  color: #f60;
  font-size: 18px;
  padding: 6px;
}
```

### 2. Organize code with comments

Over time the CSS file can become quite extensive, spanning hundreds of lines. And if it is a multi-page website it may go more than that, maybe thousands of lines. So it is easy to get lost and becomes hard to manage a large file, edit them when necessary. Therefore let's organize our code in a logical group and then provide a comment before each group, saying the following styles belong to which group.

**Bad:**

```css
header {
  ...;
}
article {
  ...;
}
.btn {
  ...;
}
```

**Good:**

```css
/* Primary Navigation */
.navbar {
  ...;
}

/* Featured article */
article {
  ...;
}

/* Buttons */
.btn {
  ...;
}
```

### 3. Chose proper class names

Use modular class names (or values) according to the content within an element, not according to the appearance of an element. Also, use lowercase for the class names (or values), to keep consistent.

**Bad:**

```css
.Red-Box {
  ...;
}
```

**Good:**

```css
.alert-message {
  ...;
}
```

### 4. Build proficient selectors

It is easy to get carried away with CSS selectors if they are not carefully maintained. They can easily become long and too specific.

Keep the selectors as short as possible, in order to keep the low specificity. The higher specificity may cause undesirable issues. Nest them not more than two or three levels.

Also, avoid the ID selectors, as it can quickly raise the specificity level of selectors.

**Bad:**

```css
#aside #featured ul.news li a {
  ...;
}
#aside #featured ul.news li a em.special {
  ...;
}
```

**Good:**

```css
.news a {
  ...;
}
.news .special {
  ...;
}
```

### 5. Use classes when necessary

There are times when selectors become longer. Especially beginners mostly use type selector and keep on nesting, which leads to a longer selector, and does not make sense. So instead, using a class selector alone is better.

**Bad:**

```css
section aside h1 em {
  ...;
}
```

**Good:**

```css
.text-offset {
  ...;
}
```

### 6. Use shorthand properties and values

Using shorthand properties and values allows us to quickly set and identify the styles. It also keeps our code clean.

**Bad:**

```css
img {
  margin-top: 5px;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-left: 10px;
}
button {
  padding: 0 0 0 20px;
}
```

**Good:**

```css
img {
  margin: 5px 10px;
}
button {
  padding-left: 20px;
}
```

### 7. Use shorthand hexadecimal color values

When available use three-character hexadecimal color values and always keep the characters in lowercase. The idea is to be consistent and prevent confusion.

**Bad:**

```css
.module {
  background: #dddddd;
  color: #ff6600;
}
```

**Good:**

```css
.module {
  background: #ddd;
  color: #f60;
}
```

### 8. Drop units from zero values

Adding a unit to zero value is unnecessary and provides no additional value.

**Bad:**

```css
div {
  margin: 20px 0px;
  letter-spacing: 0%;
  padding: 0px 5px;
}
```

**Good:**

```css
div {
  margin: 20px 0;
  letter-spacing: 0;
  padding: 0 5px;
}
```

### 9. Group and align vendor prefixes

Within CSS codes the vendor prefixes can make our cluttered and unreadable. They must be kept organized in order to make the styles easier to read and to edit.

**Bad:**

```css
div {
  background: -webkit-linear-gradient(#a1d3b0, #f6f1d3);
  background: -moz-linear-gradient(#a1d3b0, #f6f1d3);
  background: linear-gradient(#a1d3b0, #f6f1d3);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

**Good:**

```css
div {
  background: -webkit-linear-gradient(#a1d3b0, #f6f1d3);
  background: -moz-linear-gradient(#a1d3b0, #f6f1d3);
  background: linear-gradient(#a1d3b0, #f6f1d3);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

### 10. Modularize styles for reuse

This is one of the important parts. Use modular classes, in order to avoid repetition. Do not style the page keeping just one element in mind at a time. Look at the layout or page carefully, choosing a modular class, and then assign the styles, so that it should be available to share across elements as necessary.

**Bad:**

```css
.news {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.events {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}
```

**Good:**

```css
.feat-box {
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 6px;
}
```

### 11. Use developer tools

Often, we forget to use the browser's developer tools, which is the best practice to figure out the problems. Use developer tools to inspect the elements and find out what is rendering and what's not. Keep, using developer tools, in your habit, that will save a lot of time in order to solve the problem.

### 12. Learn to search

Searching can be a skill in itself. First of all never hesitate to search for anything, if you are stuck somewhere, also if it is necessary. But in that case, you must know what to search in order to get the best search results. Therefore develop this skill for the long run.

### 13. Continually refactor code

Again, it is good to take breaks and refactor our code as we work. This will help us to save time, in the end, identifying the errors especially when our document is too lengthy.
