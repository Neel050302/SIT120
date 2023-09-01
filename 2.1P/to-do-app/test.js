const App = {
    data() {
        return {
            newTodo: '',
            todos: []
        };
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({ id: Date.now(), text: this.newTodo.trim(), completed: false });
                this.newTodo = '';
            }
        },
        removeTodo(todo) {
            this.todos = this.todos.filter(t => t.id !== todo.id);
        }
    }
};

Vue.createApp(App).mount('#app');
