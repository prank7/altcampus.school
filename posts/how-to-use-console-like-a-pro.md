---
title: 'How to use console like a pro'
description: 'Learn to use console in a better way. You will get to know about semantic logging, string substitution and other helper methods like group, count etc.'
date: '2020-05-28'
blurb: 'Learn to use console in a better way. You will get to know about semantic logging, string substitution and other helper methods like group, count etc.'
photo: '/images/posts/how-to-use-console-like-a-pro.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: nnnkit
---

Debugging the code is a major part of the development process. The most common way of debugging is using `console.log`. For example

```js
console.log('Hello ', 'World'); // Hello World!
console.log('Cannot load the file!'); // Cannot load the file
console.log('Cannot connect to server!'); // Cannot connect to server
```

Looking at the output, you can see some messages are critical and some are not. But visually they all look the same in the console. But what if there was a way to convey more information with the same message.

`log` is just one of the methods in the `console` object. Try doing `console.log(console)` you will see there are many other methods that we don't use regularly. In this article we will learn about using other console methods.

![Console Object](/images/posts/how-to-use-console-like-a-pro/console.png)

## Semantic Logging

Semantic logging is a way to use appropriate methods to provide extra bit of information. This will help the user or the developer to understand how critical the issue is. All these methods work like `console.log`, but the difference is in how the message is displayed.

- `console.warn` for displaying warnings.
- `console.error` for displaying an error.
- `console.info` for displaying any piece of information.

![Console Filter](/images/posts/how-to-use-console-like-a-pro/filter.png)

> Using these methods also gives you an option to filter them in console.

## String Substitution

We know that `console.log` takes an infinite number of arguments (any data types) and prints them with a space in the console. There is a special case where if the first argument is a `string` you can use **string substitution.**

If the first argument is using any string substitution character (like %c, %s) it uses the next argument as the substitution.

```jsx
console.log('Hello %s!', 'Arya'); // Hello Arya
console.log('Hello %s, I am %d years old!', 'Arya', 19);
// Hello Arya, I am 19 years old!
```

- **`%s` -** for string
- **`%d` -** for digit
- **`%o` -** for object
- **`%c` -** for css or style

There is also a special directive `%c` that is used to apply style to the `console` output. Go ahead, open console and try the code below. 🤩🤩

```jsx
console.log(
  'Hello %cArya',
  'color: yellow; font-style: italic; font-size: 20px; background-color: black; padding: 2px;'
);
```

_How was that? Try doing something creative and tag us using @altcampus on twitter._

## Extra Functionality

**`console.group`** helps you group multiple messages together under one title. You can collapse or open it.

```jsx
let users = [
  { name: 'Arya', age: 19 },
  { name: 'John', age: 25 },
  { name: 'Sansa', age: 23 }
];
// without grouping
for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
  console.log(users[i].age);
}
// with grouping
for (let i = 0; i < users.length; i++) {
  console.group(users[i].name);
  console.log(users[i].name);
  console.log(users[i].age);
  console.groupEnd();
}
```

![Console Group](/images/posts/how-to-use-console-like-a-pro/group.png)

**`console.time`** helps you track time taken by any operation. Each timer accepts a unique name.

```jsx
console.time('creatingData');
var data = [];
for (let i = 0; i < 100000; i++) {
  data.push(i * 2);
}
console.timeEnd('creatingData');

// OUTPUT
// creatingData: 2.803955078125ms
```

**The name passed to `time` and `timeEnd` should be same.**

**`console.table`** displays the data in tabular format. The data passed as an argument should either be an `array` or an `object`. It also accepts second parameter that will be an array of key you want to be visible in the table.

```jsx
let users = [
  { name: 'Arya', age: 19 },
  { name: 'John', age: 25 },
  { name: 'Sansa', age: 23 }
];
console.table(users);
console.table(users, ['name']);
console.table(users, ['age']);
```

![Table](/images/posts/how-to-use-console-like-a-pro/table.png)

```jsx
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.count();
  }
}
/*
Output:
default: 1
default: 2
default: 3
default: 4
default: 5
*/
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.count('even numbers');
  }
}
/*
Output:
even numbers: 1
even numbers: 2
even numbers: 3
even numbers: 4
even numbers: 5
*/
```

> **TIPS**: Instead of doing `console.log(user)` do `console.log({user})`. Easier to track because you get a key indicating the value.
