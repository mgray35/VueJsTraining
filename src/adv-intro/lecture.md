# VueJS Lecture 1

> No-build pipeline tutorial for VueJS

## Presenters
* Robert Macdonald, CASS, Junior SDE
* Alex Lepinski, CASS, SDE

---

## What is VueJS?

Topics

* Introduction
* Where does it fit
* Front-end comparison https://stateofjs.com/2017/front-end/results
* Tiny, ~30KB gzip production build

#### Learn More:
* https://vuejs.org/v2/guide/

---

### VueJS features

* Reactive Interfaces
* Declarative Rendering
* Data Binding
* Directives
* Template Logic
* Components
* Event Handling
* Computed Properties
* CSS Transitions and Animations
* Filters

### Install Options

* cdn, used in this lecture
* npm, recommended
* bower

---

## Vue Basics

### Vue Instance

* The start of the Vue application

```js
var app = new Vue({
    el: "#app",
    data: {}
});
```

---

### Basic Handlebars Template

* Vue uses an HTML-based template
* Creates virtual DOM
* Interpolations: `<span>{{ message }}</span>`

---

### Exercise 1: Using Vue and handlebars

1. Create an index.html file
2. Create html and body elements
3. Create div element with id app in body `<div id="app"></div>`
4. Add `{{ message }}` within div app
5. Add `<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
6. Create script tag
7. Create Vue instance `var app = new Vue({ el: '#app' })` in script
8. Add `data: {message: 'Hello World!'}` to Vue instance
9. Open in browser to see Hello World!

???

* VM, console, this and arrow

---

## Vue Templates and Directives

Interpolation with handlebars syntax is the simplest thing to do in Vue templates. Vue directives are HTML attributes that enable iteration and conditional blocks in templates. Directives are special html attributes that use a `v-` prefix.

- `{{ expression }}`
- `v-if="expression"`
- `v-else`
- `v-show="expression"`
- `v-for="item in list"`
- `v-bind:attr="value"`
- `v-on:event="handler"`
- `v-model="value"`
- `v-html="rawHtmlExpression"`

#### Learn More:
- https://vuejs.org/v2/guide/syntax.html#Directives

---

### Exercise 2: Add `v-model` Directive
The `v-model` directive binds two-ways the data object with an HTML input.

1. Open Exercise hello world
2. Add `<input v-model="message">` within div app
3. Open in browser
4. Change input field
5. Message will retrieve the updated message
6. Message will also update to reflect changes

---

## Vue Components

* Templates
* Props (attributes you can use)
* Data (each component has its own state)
* Computed values (automatically recomputes on changed data)
* SOC Great for managing and reusing code
* Makes testing easy
* In the future, use build tools and SFC for larger applications
  * Scoped CSS
  * Templates
  * Scripts

#### Learn More:
> https://vuejs.org/v2/guide/components.html


---

### Exercise 3: Add Component

1. Register a new component
2. Change the html to include your component tag `<my-component></my-component>`
3. Open in browser

```js
Vue.component('my-component', {
    template: `<div>Hello World</div>`
})
```

---

### Component Props

* One direction flow
* Parent passes props to child
* Parent can modify and child cannot (should not)
* Dynamic props
  * `v-bind` prop updates will flow to child components
* Prop validation! multiple types, required, and defaults!
  * String
  * Number
  * Boolean
  * Function
  * Object
  * Array
  * Symbol
* Child can call parent to update props
  * sync
  * event
  * methods

#### Learn More:
- https://vuejs.org/v2/guide/components.html#Props

???

* Props are the way to move smaller pieces in the application
* State and props. Who owns who. TODO list whiteboard 
this.message this.$props.message

---

### Exercise 4: Add Props

1. Add props to the component `props: ['message']`
2. Change the html to include your prop with value
  - `<my-component message="Hello World!"></my-component>`
3. Add handlebar for message to component template
4. Open the browser
5. Change the component to bind Vue instance's message
  - `<my-component v-bind:message="message"></my-component>`
6. Open the browser

```js
Vue.component('my-component', {
    props: ['message'],
    template: `<div>{{ message }}</div>`
})
```

---
### Component State

* Local data: must be a function!
* Useful for forms or local view logic
* Computed properties
* Computed getters and setters
* Methods vs computed
* Vuex, state management, (later) is used for single state tree

#### Learn More:
- https://vuejs.org/v2/guide/computed.html
- https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function

???

Data not a function

---

### Exercise 5: Add data and computed

1. Use result of Exercise 4
2. Add a data property as function to component that returns empty object
3. Add a new property called now to the data object equal to `new Date()`
4. Add handlebar for the now property right next to message
5. Open in browser
6. Create a computed property that concatenates message and now
7. Update the handlebar to only use the computed property
8. Open in browser

---

## Lists and `v-for` Directive

* Vue directive to iterate over a collection to produce html elements

---

### Exercise 6: Use `v-for` Directive

1. Create an array in the Vue instance
  - `data: { people:[{firstName: "john"}, {firstName: "ann"}] }`
2. Create an ul tag
3. Create a li tag with v-for directive
4. Output each members firstName with handlebars


---

### Exercise: Use `v-for` with computed

1. Create a component that outputs a single person
2. Add property to take an object
3. Add template to output firstname
4. Replace html to use person-component for each li
5. Verify in the browser all member first names are listed
6. Create a computed property in person-component for full name
7. Change the template to use computed property
8. Open in browser

---

# Thank you!

We will see you next Thursday for part 2

Please fill out our survey https://goo.gl/32KMT2

## Questions?

We will be sticking around if you have any questions

---

# Lecture 2 
> No-build pipeline tutorial for VueJS part 2

## Presenters
* Robert Macdonald, CASS, Junior SDE
* Alex Lepinski, CASS, SDE

---

## Events and `v-on` Directive

* Pass data
* Update dom
* Call API
* Much more
* Use `this.$emit` to create an event
* Subscribe to event by `v-on:event-name` or `@event-name`

### Code Walk: Custom Events

---

### Exercise 7: Add and use custom events
1. Using Exercise 6 `v-for` people
2. Add a method on the app instance to remove a person with the given index
3. In the person component, add a button with text "X"
4. Add a prop labeled index to the component
5. Add a method to handle the onclick in the component
6. Add this.$emit(event-name, value) to the click handler
7. Update the button to include the `v-on:click`
8. Within the `v-for` person component, bind the custom event `v-on="event-name"
9. Open up the browser


---
## Application Hierarchy

* TODO: add graphic
* SOC
* Testing
* Reusing

---

### Exercise 8: Break up code

1. Create a new component to render a person
2. Change out the list to use the new component
3. TODO: Add steps

---
## Components Part II

### Default Slot
- Add the special `<slot/>` tag to render the children of a component.

```js
Vue.component('my-component', {
    template: `<div><slot/></div>`
})
Vue.component('other-component', {
    template: `<my-component>Hello world!</my-component>`
})
```

---

### Global Scoped Components
So far we have been using global scoped components.

```js
Vue.component('my-component', {
  props: ['message']
  template: `<div>{{ message }}</div>`
})
```

---

### Local Scoped Components

```js
var MyComponent = {
  props: ['message']
  template: `<div>{{ message }}</div>`
}
var app = new Vue({
    el: "#app",
    components: {
      MyComponent: MyComponent
    }
});
```
---

### Final Exercise
Create an invoice demo that allows a user to enter a customer's name, a list of products purchased, and an calculated total price. Create the HTML layout, break it into components, add props, then add events to buttons and handle those events.

---
## Template Directives Explained

### `v-if` Directive

Include or exclude the element and anything inside of it.

```html
<span v-if="user">Logged in as {{ user.name }}.</span>
<span v-else>Optional else block.</span>
```

If you want to leave the HTML on the page, but just hide it, use `v-show` instead.

```html
<span v-show="user">Logged in as {{ user.name }}.</span>
```

---

Use the `key` attribute on elements inside of `v-if` blocks to help Vue destroy instead of reuse children.

```html
<span v-if="inputMode === 'email'">
   <input type="email" key="email-input">
</span>
<span v-else>
   <input type="text" key="text-input">
</span>
```

---
### `v-for` Directive

Create an element for every item in the list. Include a `key` attribute with unique identifiers to help Vue render efficiently.

```html
<ul>
  <li v-for="user in list" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

```html
<span v-for="(user, index) in list" :key="user.id">
  {{ index }}: {{ user.name }}
</span>
```

```html
<span v-for="(value, key) in dictionary" :key="key">
  {{ key }}: {{ value }}
</span>
```
---

Trigger Updates:

* list.push()
* list.pop()
* list.shift()
* list.unshift()
* list.splice()
* list.sort()
* list.reverse()
* list = list.filter(filterFn)

---

### `v-bind:attr` Directive

Connects components state and any HTML attribute.

```html
<progress v-bind:value="currentStep" max="10"></progress>
<progress :value="currentStep" max="10"></progress>
```

---
### `v-on:event` Directive

Listen to HTML and component events. $event is the event that is firing and is necessary when using native HTML elements. Most Vue components fire events with simple data.

```html
<input v-on:change="name = $event.target.value">
<button @click="saveNameChange">Save Name</button>
```

This directive accepts both the name of methods and an expression of methods. This makes listed buttons or inputs easier to wire up.

```html
<ul>
  <li v-for="user in list" :key="user.id">
    <span>{{ user.name }}</span>
    <button @click="someUserMutation(user)">Change</button>
  </li>
</ul>
```

---

### `v-model` Directive

A shorthand for listening to input events.

```html
<input type="range" v-model="brightness">
<input type="range" v-bind:value="brightness" v-on:input="brightness = $event.target.value">
```

### `v-html` Directive

The only way to render raw HTML into a template. Beware of cross-site scripting exploitations.

```html
<div v-html="helpDocHtml"></div>
```
---

# Thank you!

Please fill out our survey https://goo.gl/32KMT2

## Questions?

We will be sticking around if you have any questions
