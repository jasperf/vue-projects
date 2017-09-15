# VueJS Basics

In this repository I put all the Vue projects I worked on using Laracasts.com and other workshops on the web to learn Vue.js .  Here is the list of the current projects I am working on and those that are done:

- Attribute and Class Binding - v-bind
- Axios - Promised Based HTTP and VueJS
- Basic Data Binding: v-model
- Component with message
- Components 101
- Computed Properties & Caching
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

The `@click` used here is  a short version of `v-on:click` and you can add a method to be called. Also see [listening to events chapter at Vue](https://vuejs.org/v2/guide/events.html#Listening-to-Events)

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

## Twitter

Twitter Tweet field in progress

## V-For and Lists
Wonderful basic example showing how you can use Vue's v-for loops. From within a component with a data function an array of data is loaded:
```
data: { // data
                names: ['Joe', 'Mary', 'John'] // array with elements
                //try app.names.push('Jeremiah')
            }
```
This array is loaded onto the page using:
```
<li v-for="name in names">{{ name }}</li>
```
The `{{}}` moustache curly braces are used here again to echo the actual name from the for loop.

## Components within Components
Basic example showing you how you can use html tags defined in one component:
```
<task v-for="task in tasks" :key="task.id">{{ task.task }}</task>
```
and reuse those in the second component. Do remember that Vue wants you do a top bottom approach so components at the top depend on the ones following them. And a new Vue instance follows at the end
