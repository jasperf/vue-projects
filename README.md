# VueJS Basics

In this repository I put all the Vue projects I worked on using Laracasts.com and other workshops on the web to learn Vue.js .  Here is the list of the current projects I am working on and those that are done:

- Attribute and Class Binding - v-bind
- Axios - Promised Based HTTP and VueJS
- Basic Data Binding: v-model
- Component with message
- Components 101
- Computed Properties & Caching
- ES6 & Babel - ES6 in VueJS
- Event Listeners: v-on
- Twitter
- Lists:v-for

## Attribute and Class Binding - v-bind
In this workshop work with ```v-bind```. We use it to change the class and attributes of html tags to create new state.

## Axios
Basic Axios - Promised Based HTTP Client - Ajax call loading Json from Laravel Route with array. Vue is used to add the data or skills in this case to the DOM using an empty array. Axios fills the array with data from the Larvel Route skills.

## Basic Databinding
Showing how you can reactively bind data to an input field using v-model as well as echoing the data using the moustache ```{{}}``` syntax.

This type of data binding using ```v-model``` is for input fields and text areas only. For binding of classes and styles ```v-bind``` is used.

## Components with Message
Working with a component here in more detail using the properties:prop, extended template details as well as a method to show or hide a message block. Directive used here to work with the method to hide the message is ```v-show```. Bulma is used here it being Jeffrey Way,'' favorite CSS framework.
## ES6
Basic ES6 (EMCA2015) example using ES6 Syntax and Babel to convert it to regular JavaScript which use can use cross-browser. Setup in package.json to convert ES6 to JavaScript is:
```
"scripts": {
    "build": "babel src -d dist"
  }
  ```
  [Babel CLI](https://babeljs.io/docs/setup/#installation) setup is used to setup Babel for this project

## Event Listeners
In this workshop event listeners are setup. The example using vanilla JavaScript is used first and then commented out:
```
document.querySelector('#button').addEventListener('click', () => {
	let name = document.querySelector('#input');
	app.names.push(name.value);
	name.value = ''; //empty the field
});
```
This to show how event listeners are set up in Vue JS with a lot less code and way easier then using JavaScript or jQuery. The event listener is set up using the directive ```v-on:click``` . With it a method can be bound to it.