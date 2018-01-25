Vue.component('todo-component', {
    template: `
        <div class="wrapper">
            <h1>Super Rad Todo List</h1>
            <todo-creator @create-todo="addTodo"/>    
            <todo-list @remove-todo="removeTodo" 
                @complete-todo="completeTodo"
                @done-editing="doneEditing" 
                :items="items"
            />
            <completed-todo-list :todoList="completed"/>
        </div>
    `,
    data: function(){
        return {
            items: ["Get milk", "Call Family", "Go to the gym"],
            completed: []
        }
    },
    methods: {
        addTodo: function(todo){
            todo ? this.items.push(todo) : undefined;
        },
        removeTodo: function(todo){
            this.items = this.items.filter(t => todo !== t).map(t => t);
        },
        completeTodo: function(todo){
            var item = this.items.splice(this.items.indexOf(todo), 1);
            console.log(item);
            this.completed.push(item[0]);
        },
        doneEditing: function(todo){
            this.removeTodo(todo.oldTodo);
            this.addTodo(todo.newTodo);
        }
    }
})

Vue.component('todo-creator',{
    template: `
        <div>
            <label for="add-todo">Add Todo</label>
            <input id="add-todo" v-model="todoItem"/>
            <button @click="$emit('create-todo', todoItem)">Add</button>   
        </div>
    `,
    data: function(){
        return {todoItem: ""}
    }
})

Vue.component('todo-list', {
    template: `
        <ul>
            <todo v-for="item in items" 
                :item="item" 
                @remove-todo="$emit('remove-todo', item)"
                @complete-todo="$emit('complete-todo', item)"
                @done-editing="emitDoneEditing"
            />    
        </ul>
    `,
    props: ["items"],
    methods: {
        emitDoneEditing: function(todo){
            console.log(todo)
            this.$emit('done-editing', todo);
        }
    }
})

Vue.component('todo', {
    template: `
        <li :key="item">
            <todo-editor v-if="editing" @done-editing="toggleEdit" :todo="item"/>
            <div v-else>
                {{item}}
                <div>
                    <button @click="$emit('complete-todo', item)">Complete</button>
                    <button @click="$emit('remove-todo', item)">Remove</button>
                    <button @click="editing = true">Edit</button>
                </div>
            </div>
        </li>
    `,
    data: function(){
        return {editing: false}
    },
    props: ["item"],
    methods: {
        toggleEdit: function(todo){
            this.editing = false;
            this.$emit('done-editing', todo);
        }
    }

})

Vue.component('completed-todo-list', {
    template: `
        <div v-show="todoList.length > 0">
            <h3>Completed</h3>
            <ul>
                <li v-for="todo in todoList">
                    {{todo}}
                </li>
            </ul>    
        </div>
    `,
    props: ["todoList"]
})

Vue.component('todo-editor', {
    template: `
        <div>
            <label for="todo-editor"/>
            <input id="todo-editor" v-model="newTodo" :newTodo="newTodo"/>
            <button @click="emitDoneEditing">Done</button>    
        </div>
    `,
    data: function(){
        return { oldTodo: this.todo, newTodo: this.todo }
    },
    props: ["todo"],
    methods: {
        emitDoneEditing: function(){
            var todos = {
                newTodo: this.newTodo,
                oldTodo: this.oldTodo
            }
            this.$emit('done-editing', todos);
        }
    }
})

var app = new Vue({
    el: "#app"
}); 