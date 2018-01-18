# VueJS Lecture 1

> No-build pipeline tutorial for VueJS

## Presenters
* Robert Macdonald, CASS, Junior SDE
* Dan Van Horn, CASS, Junior SDE
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
2. Create `html` and `body` elements
3. Create `<div/>` element with id `app` in body
```html
<div id="app"></div>
```
4. Add `{{ message }}` within the `app` div
5. Add the Vue cdn to your html document
```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
7. Create a Vue instance in a separate `<script/>` tag
```js
var app = new Vue({ el: '#app' })
```
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
The `v-model` directive binds the data object with an HTML input two ways.

1. Open Exercise hello world
2. Add `<input v-model="message">` within the `#app` div
3. Open in browser
4. Change the input field
5. Message will retrieve the updated message
6. Message will also update to reflect changes

---

## Vue Components

* Templates
* Props (attributes you can use)
* Data (each component has its own state)
* Computed values (automatically recomputes on changed data)
* Separation of concerns, Great for managing and reusing code
* Makes testing easy
* In the future, use build tools and SFC for larger applications
  * Scoped CSS
  * Templates
  * Scripts

#### Learn More:
> https://vuejs.org/v2/guide/components.html


---

### Exercise 3: Add Component

1. Create and register a new Vue component
2. Change the html to include your component tag `<my-component/>`
3. Open in browser

```js
Vue.component('my-component', {
    template: `<div>Hello World</div>`
})
```

---

### Component Props

* Unidirectional data flow
* Parents their local data to children as `props`
* Children only access `props`, DO NOT manipulate props in chldren.
* Dynamic `props`:
  * `v-bind` prop updates will flow to child components.
* `props` are validated using JS native types:
  * String, Number, Boolean, Function, Object, Array, Symbol
* Child can call parent to update `props`:
  * sync, event, methods

```
props: {
  text: {
    type: Boolean,
    required: true
  }
}
...
props: ["text"]
```

#### Learn More:
- https://vuejs.org/v2/guide/components.html#Props

???

* Props are the way to move smaller pieces in the application
* State and props. Who owns who. TODO list whiteboard
this.message this.$props.message

---

### Exercise 4: Add Props

1. Add props to your component `props: ['message']`
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

* Local data: must be accessed with a function
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
2. Add a `data` property as function to your component that returns empty object
3. Add a new property called `now` to the returned object equal to `new Date()`
4. Add handlebar for the `now` property right next to `message`
5. Open in browser
6. Create a computed property that concatenates `message` and `now`
7. Update the handlebar to only use the computed property
8. Open in browser

---

## Lists and `v-for` Directive

* Vue directive to iterate over a collection to produce html elements

```html
  <script>
    var array = [1,2,3,4,5];
  </script>
  <ul>
    <li v-for="item in array">{{item}}</li>
  </ul>
```

---

### Exercise 6: Use `v-for` Directive

1. Create an array in the Vue instance

```js
data: { 
  people: [
    {firstName: "Timothy", lastName: "Typist"}, 
    {firstName: "Hannah", lastName: "Hacker"}
  ] 
}
```

2. Create a `<ul/>` tag
3. Create a `<li/>` tag with `v-for` directive
4. Output each member's `firstName` with handlebars

---

### Exercise: Use `v-for` with computed

1. Create a component that outputs a single person
2. Add property to take an object
3. Add template to output `firstName`
4. Replace html to use person-component for each `<li/>`
5. Verify in the browser all member first names are listed
6. Create a computed property `fullName` in person-component that concatenates `firstName` and `lastName`. 
7. Change the template to use computed property
8. Open in browser

---

# Thank you!

We will see you next Thursday for part 2

Please fill out our survey https://goo.gl/32KMT2

## Questions?

We will be sticking around if you have any questions