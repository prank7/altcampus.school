---
title: 'Basic array methods in JavaScript'
description: 'This article will cover the basic array methods in JavaScript. For simplicity, we will be splitting them into groups like adding items, removing items, iteration and searching.'
date: '2020-06-27'
blurb: This article will cover the basic array methods in JavaScript. For simplicity, we will be splitting them into groups like adding items, removing items, iteration and searching.
photo: '/images/posts/basic-array-methods-in-javascript.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: kabir4691
---

## Adding items

### 1. push()

This method is used to add one or more elements to the end of an array. This method changes the original array and returns the new length of the array.

```js
let array = [2, 5, 7];
let result = array.push(8);
console.log(result); // prints 4
console.log(array); // prints [2, 5, 7, 8]

// To add multiple elements
array.push(10, 12, 14);
console.log(array); // prints [2, 5, 7, 8, 10, 12, 14]
```

### 2. concat()

This method allows you to take an array and combine it with another array or elements. It doesn't change the original array. Instead, it returns a new array.

```js
let array = [2, 5, 7];
let result = array.concat(8);
console.log(result); // prints [2, 5, 7, 8]

let addMultiple = array.concat(9, 10);
console.log(addMultiple); // prints [2, 5, 7, 9, 10]

let combine = array.concat(result);
console.log(combine); // prints [2, 5, 7, 2, 5, 7, 8]

console.log(array); // prints [2, 5, 7]
```

### 3. unshift()

This method adds an item at the beginning of an array. Like `push()`, this changes the original array and returns the new length of the array.

```js
let array = [2, 5, 7];
let result = array.unshift(8);
console.log(result); // prints 4
console.log(array); // prints [8, 2, 5, 7]
```

### Removing items

### 4. pop()

This methods removes the last element of an array and returns that element. This method changes the original array.

```js
let array = [2, 5, 7];
let result = array.pop();
console.log(result); // prints 7
console.log(array); // prints [2, 5]
```

### 5. shift()

This methods removes the first element of the array and returns that element. This method changes the original array.

```js
let array = [2, 5, 7];
let result = array.pop();
console.log(result); // prints 2
console.log(array); // prints [5, 7]
```

### 6. slice()

This method allows you to create a 'slice' of an array and return it as a new array. The syntax for it is: `array.slice(*start*, *end*);`

This method returns a copy of this array with elements from the _start_ position upto the _end_ position (i.e. excluding the element at _end_ ). If you only pass in 1 argument, then it returns a new array from that position till the end of the original array. Note that `slice()` does not changes the original array and instead returns a new array.

```js
let array = ['a', 'l', 't', 'c', 'a', 'm', 'p', 'u', 's'];
let result = array.slice(3, 7);
console.log(result); // prints ['c', 'a', 'm', 'p']
```

This method support negative arguments too and hence something like this would work as well

```js
let array = ['a', 'l', 't', 'c', 'a', 'm', 'p', 'u', 's'];
let result = array.slice(-6, -2);
console.log(result); // prints ['c', 'a', 'm', 'p']
result = array.slice(-6);
console.log(result); // prints ['c', 'a', 'm', 'p', 'u', 's']
```

Another interesting thing to note is that calling this method without any arguments returns a full copy of the array. This is often used when you want to quickly create a deep copy of an array.

### 7. splice()

This method allows you to both add as well as remove elements from an array. The syntax for the method is: `array.splice(*index*, *removeCount*, *addElem1*, ... *addElemN*);`

The _index_ argument specifies the position from which to start removing elements. The _removeCount_ argument is a number that specifies the number of elements to remove. The remaining arguments in the method are the indvidual elements you wish to add to the array after the removal (if any)). Let us see this in action to understand it better

```js
let array = ['A', 'B', 'C', 'D'];
array.splice(1, 2); // this removes 1 element, starting from position 1
console.log(array); // prints ['A', 'D']
```

Note that `splice()`, unlike `slice()`, changes the original array. This also allows us to quickly replace items in an array as shown below

```js
let array = ['I', 'love', 'coding'];
array.splice(1, 1, 'really', 'like'); // this removes 1 element, starting from position 1, and then adds 'really' and 'like' at the same position
console.log(array); // prints ['I', 'really', 'like', 'coding']
```

## Iteration

### 8. forEach()

We can iterate over an array using a generic `for..of` loop. However, arrays come with their own method to iterate over their elements once and perform any actions, called `forEach`. The syntax is:

```js
array.forEach(function (element, index, array) {});
```

The method accepts a callback function that accepts 3 arguments. The first argument is the current element being processed. The next 2 arguments are optional, which are the position of the element in the array and the array itself.

```js
let array = [2, 5, 7];
array.forEach(function (element, index, array) {
  console.log(element);
});
// prints
// 2
// 5
// 7
```

## Searching

### 9. indexOf()

This method looks for the occurence of an item in an array, from the beginning of the array till the end (i.e. from left to right). If the item is found, it's position is returned else `-1` will be returned. The syntax is: `array.indexOf(*element*, *start*);`

The _start_ argument is an optional argument that specfies the position to start searching from, left to right, till the end of the array.

```js
let array = [1, '2', '1'];
console.log(array.indexOf(1)); // prints 0
console.log(array.indexOf(2)); // prints -1
console.log(array.indexOf(1, 1)); // prints -1
```

Similiarly, `array.lastIndexOf()` searches for an element, but from the end of the array to the beginning (i.e. from right to left). `array.includes()` checks if an element exists in the array and returns a boolean.

```js
let array = [1, 2, 1];
console.log(array.indexOf(1)); // prints 0
console.log(array.lastIndexOf(1)); // prints 2
console.log(array.includes(2)); // prints true
```

### 10. find()

What if we wish to find an item in an array but we don't know the exact value of the item yet and only know the conditions that it fulfills? The `array.find()` method helps you do exactly that. Say that we have an array of objects:

```js
let array = [
  { id: 1, name: 'Mike' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Rob' }
];
```

We wish to find the object whose id is 2. We then use the `find()` method as follows:

```js
let item = array.find(function (element, index, array) {
  if (element.id === 2) return true;
});
console.log(item); // prints {id: 2, name: "John"}
```

`find()` iterates over the array and applies a callback function on each element. The callback function takes 3 arguments. The first argument is the element currently being matched against. The next 2 arguments are optional, which are the position of the element in the array and the array itself. When `true` is returned in a callback (which you do when the search criteria is satisfied), then the iteration is stopped and the element is returned. If no elements match the criteria, then `undefined` is returned.

`array.findIndex()` works in the same way as `array.find()`, with the difference being that the index of the matched element is returned in case of success, and -1 in case of no match.

### 11. filter()

The `find` method returns only the first element that matches the given criteria. But what if we wish to get all elements that satisfy a given criteria? That's where the `filter()` method is used. Althoug its syntax is very similiar to `find()`, the difference lies in the fact that `filter()` returns an array of all elements that match the given criteria. Let's say we have an array of objects such as:

```js
let array = [
  { name: 'Mercedes', color: 'black' },
  { name: 'Lamborghini', color: 'yellow' },
  { name: 'BMW', color: 'black' },
  { name: 'Audi', color: 'white' }
];
```

We wish to get an array of all elements with color as 'black'.

```js
let result = array.filter(function (element, index, array) {
  return element.color === 'black';
});
console.log(result); // prints [{name: 'Mercedes', color: 'black'}, {name: 'BMW', color: 'black'}]
```

Note that `filter()` does not changes the original array and returns a new array with the filtered elements instead.
