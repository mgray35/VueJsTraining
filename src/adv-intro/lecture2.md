
# Lecture 2
> No-build pipeline tutorial for VueJS part 2

## Presenters
* Robert Macdonald, CASS, Junior SDE
* Alex Lepinski, CASS, SDE

---

## Vue's view model


```js
Vue.component('my-component', {
  template: `<input :disabled="isDisabled">`,
  props: ['initialValue'],
  data: function () {
    return { isDisabled: false };
  },
  computed: {
    constant () { return 'something constant'; }
  },
  methods: {
    someHandler () { }
  }
})
```

```js
{
  // this
  initialValue,
  isDisabled,
  constant,
  someHandler,
  ...
}
```

## View model & `v-bind`

```js
Vue.component('my-component', {
  template: `<input :disabled="isDisabled">`,
  props: ['initialValue'],
  data: function () {
    return { isDisabled: false };
  },
  computed: {
    constant () { return 'something constant'; }
  },
  methods: {
    someHandler () { }
  }
})
```

```html
<input> <!-- this.isDisabled = false; -->
<input disabled> <!-- this.isDisabled = true; -->
<input disabled="boat"> <!-- this.isDisabled = `boat`; -->
```

---

## Events and `v-on` Directive

* Pass data
* Update DOM
* Call API
* Much more
* Use `this.$emit` to create an event
* Subscribe to event by `v-on:event-name` or `@event-name`

---

### Event Examples

???

Inputs fire their own events.
```js
Vue.component('my-component', {
  template: `<button @click="handleClick">click me</button>`,
  methods: {
    handleClick () { alert('We were clicked!'); }
  }
});
```

Components can trigger custom events too.
```js
Vue.component('my-component', {
  template: `<button v-on:click="handleClick">click me</button>`,
  methods: {
    handleClick () { this.$emit('anything'); }
  }
});
```

```js
Vue.component('my-component', {
  template: `<button @click="$emit('anything')">click me</button>`
});
```

#### Code Walk: Custom Events

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

* SOC
* Testing
* Reusing

---

### Event Hierarchy
> A complex example

* See example-hierarchy.html

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

```html
<div>Hello world!</div>
```

---

### Global vs Local Scoped Components
So far we have been using global scoped components.

```js
Vue.component('my-component', {
  props: ['message']
  template: `<div>{{ message }}</div>`
})
var app = new Vue({
    el: "#app"
});
```

---
### Local Example

Instead, skip the Vue.component call:
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

#### Break Up Code


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