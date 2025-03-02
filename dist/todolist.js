"use strict";
class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    addTodo(task, dueDate = new Date()) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
    completeTodo(id) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.completed = true;
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    removeTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    }
    listTodos() {
        return this.todos;
    }
    filterTodos(completed) {
        return this.todos.filter((todo) => todo.completed === completed);
    }
    updateTask(id, newTask) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.log(`Todo with ID ${id} not found.`);
        }
    }
    clearCompletedTodos() {
        this.todos = this.todos.filter((todo) => !todo.completed);
    }
}
;
const todoList = new TodoList();
todoList.addTodo("Buy chicken and beef", new Date("05-03-2025"));
todoList.addTodo("Post Sunday pictures");
todoList.addTodo("Eat my cake and have it again", new Date("07-03-2025"));
todoList.addTodo("Finish teachable programme for the day", new Date("10-03-2025"));
todoList.addTodo("Download movies", new Date("08-03-2025"));
todoList.completeTodo(2);
console.log("Todos after completing ID 2:");
console.log(todoList.listTodos());
console.log("Completed Todos:");
console.log(todoList.filterTodos(true));
todoList.updateTask(1, "Buy foodstuffs and order takeaway");
console.log("Todos after updating ID 1:");
console.log(todoList.listTodos());
todoList.clearCompletedTodos();
console.log("Todos after clearing completed:");
console.log(todoList.listTodos());
