---
title: 'Array methods explained with pictorial representation'
description: 'We will learn about the array methods like map, forEach, concat, filter, pop, push, reduce etc. Lets look at each of them in detail and also understand them via a nice pictorial representation.'
date: '2020-05-22'
blurb: We will learn about the array methods like map, forEach, concat, filter, pop, push, reduce etc. Lets look at each of them in detail and also understand them via a nice pictorial representation.
photo: '/images/posts/array-methods-explained-pictorial-representation.jpeg'
cta: true
ctaText: AltCampus helps you learn faster by inculcating these systems as part of the learning model. 🙌
author: bim240
---

## Pictorial Representation

| Data                 | Method  | Condition/Parameter | Result                       |
| :------------------- | :------ | :------------------ | :--------------------------- |
| 🥚️🍓️🍎️🍗️🍖️🍇️   | filter  | veg                 | 🍓️🍎️🍇️                    |
| 🥚️🍓️🍎️🍗️🍖️🍇️   | filter  | non-veg             | 🥚️🍗️🍖️                    |
| 🍗️🍖️🍞️🌶️🌰️🥩️    | reduce  | sandwich            | 🥪️                          |
| 🍗️🍖️🍞️🌶️🌰️🥩️    | reduce  | eat                 | 💩️                          |
| 😷️🤒️🤕️🤧️🤮️      | map     | meet a doc 👨‍🎨️      | 😌️😌️😌️😌️😌️              |
| 🐓️🐓️🐓️🐓️🐓️      | map     | edible              | 🍗️🍗️🍗️🍗️🍗️🍗️           |
| 👨️👶️👴️👦️         | sort    | default             | 👶️ 👦️👨️ 👴️               |
| 🤵️🤵️🤵️🤵️🤵️🤵️   | concat  | 🎓️                 | 🤵️🤵️🤵️🤵️🤵️🤵️ 🎓️       |
| 🍗️🍖️🍞️🌶️🌰️🥩️    | push    | 🐓️                 | 🍗️🍖️🍞️🌶️🌰️🥩️ 🐓️        |
| 🍗️🍖️🍞️🌶️🌰️🥩️🐓️ | pop     |                     | 🍗️🍖️🍞️🌶️🌰️🥩️            |
| 🥚️🍓️🍎️🍗️🍖️🍇️   | shift   | default             | 🍓️🍎️🍗️🍖️🍇️              |
| 🥚️🍓️🍎️🍗️🍖️🍇️   | unshift | 👨️👶️👴️           | 👨️👶️👴️ 🥚️🍓️🍎️🍗️🍖️🍇️ |
| 🦊️🐺️🦅️🦌️🐰️      | reverse |                     | 🐰️🦌️🦅️🐺️🦊️              |

---

## Array methods

### 1. concat()

The `concat()` method is used to concatenate two or more arrays. It doesn't mutate the original arrays, rather creates a new one.

**Returns -** A new Array instance.

**Example -**

```js
var concatAlphabets = ['ab', 'bb', 'cb'].concat(['db', 'eb', 'fb']);
console.log(concatAlphabets);
// The value of concatedAlphabets would be - ['ab', 'bb', 'cb', 'db', 'eb', 'fb']
```

### 2. filter()

The `filter()` method returns an array of all those elements who have passed the testing conditions. The returned array length is always less than or equal to the original length. It doesn't mutate the original array.

**Returns -** A new array with all the elements that pass the test else an empty array.

```js
var words = ['spray', 'exuberant', 'destruction', 'present'].filter(
  (word) => word.length > 7
);
console.log(words);
// The value of words would be - ["exuberant", "destruction", "present"]
```

### 3. map()

The `map()` method accepts a callback function and executes the function on each element. The length of the returned array is the same as the mapped array. It doesn't change the original array.

**Returns -** A new array with each element being the result of the callback function.

**Example -**

```js
var multiplyByTwo = [1, 4, 10, 16].map((x) => x * 2);
console.log(multiplyByTwo);
// The value of multiplyByTwo would be - [2, 8, 20, 32]
```

### 4. pop()

The `pop()` method mutates the original array by removing its last element. The resulting array has a length less than the original array.

**Returns -** The removed element from the array, undefined if the array is empty.

**Example -**

```js
var returnedValue = ['hey', 'hello', 'array', 'object', 'tomato'].pop();
console.log(returnedValue);
// The value of returnedValue would be - "tomato"
```

### 5. push()

The `push()` method mutates the original array by adding new elements to the end of the array.

**Returns -** The new length of the array upon which the method was called.

**Example -**

```js
var returnedValue = ['pigs', 'goats', 'sheep'].push('cows');
console.log(returnedValue);
// The value of returnedValue would be - 4
```

### 6. reduce()

The `reduce()` method accepts a callback function and executes the function on each element.

**Returns -** The single value that results from the reduction. The returned value can be a string, number, array, object, or any other data type.

**Example -**

```js
var returnedValue = [1, 2, 3, 4].reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(returnedValue);
// The value of returnedValue would be - 10
```

### 7. reverse()

The `reverse()` method reverses the original array.

**Returns -** The reversed array.

**Example -**

```js
var reversedArray = ['one', 'two', 'three'].reverse();
console.log(reversedArray);
// The value of reversedArray would be - ["three", "two", "one"]
```

### 8. shift()

The `shift()` method mutates the original array by removing elements from the beginning. As a side effect, it changes the length of the array.

**Returns -** The removed element from the array; undefined if the array is empty.

**Example -**

```js
var returnedValue = [1, 2, 3].shift();
console.log(returnedValue);
// The value of returnedValue would be - "1"
```

### 9. sort()

The `sort()` method sorts the elements in ascending order by default. The default method includes converting elements to strings and comparing their sequences of UTF-16 code unit values.

**Returns -** The sorted array. Note that the array is sorted in place, and no copy is made.

**Example -**

```js
var sortedValue = [1, 30, 44, 21, 12].sort();
console.log(sortedValue);
// The value of sortedValue would be - [1, 12, 21, 30, 44]
```

### 10. unshift()

The `unshift()` method mutates the original array by adding new elements at the beginning of the array.

**Returns -** The new length of the array.

**Example -**

```js
var returnedValue = [1, 2, 3].unshift(4, 5);
console.log(returnedValue);
// The value of returnedValue would be - 5
```
