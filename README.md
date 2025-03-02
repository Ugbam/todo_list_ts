# Todo_list_ts


This is a simple Todo List application built with TypeScript. It allows the users to manage their tasks by adding, completing, removing, and listing todo items. This application also supports filtering tasks by completion status and updating task descriptions.

---

## Features
- **Add a new todo item**: Add a task with an optional due date.
- **Complete a todo item**: Mark a task as completed.
- **Remove a todo item**: Delete a task from the list.
- **List all todos**: View all tasks in the list.
- **Filter todos by completion status**: View only completed or incomplete tasks.
- **Update a todo task**: Modify the description of a task.
- **Clear completed todos**: Remove all completed tasks from the list.

---

## Installation

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Ugbam/todo_list_ts.git
   cd todo_list_ts
   npm install
   tsc
   node dist/todolist.js


### Example Code

Here’s an example of how to use the TodoList class:

## Usage

### Example Code and Output
Here’s an example of how to use the `TodoList` class and the expected output:

```typescript 
// Create a new instance of TodoList
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
```

## Expected Output

The output will look like this:
```bash
Todos after completing ID 2:
[
  { id: 1, task: 'Buy chicken and beef', completed: false, dueDate: 2025-05-03T00:00:00.000Z },
  { id: 2, task: 'Post Sunday pictures', completed: true },
  { id: 3, task: 'Eat my cake and have it again', completed: false, dueDate: 2025-07-03T00:00:00.000Z },
  { id: 4, task: 'Finish teachable programme for the day', completed: false, dueDate: 2025-10-03T00:00:00.000Z },
  { id: 5, task: 'Download movies', completed: false, dueDate: 2025-08-03T00:00:00.000Z }
]

Completed Todos:
[
  { id: 2, task: 'Post Sunday pictures', completed: true }
]
```
### Methods

- addTodo(task: string, dueDate?: Date): void
Adds a new todo item to the list.

- Parameters:

task: The description of the task.

dueDate (optional): The due date of the task.

completeTodo(id: number): void
Marks a todo item as completed.

- Parameters:

id: The ID of the task to complete.

removeTodo(id: number): void
Removes a todo item from the list.

- Parameters:

id: The ID of the task to remove.

listTodos(): TodoItem[]
Returns all todo items in the list.

filterTodos(completed: boolean): TodoItem[]
Filters todo items by their completion status.

- Parameters:

completed: true to filter completed tasks, false to filter incomplete tasks.

updateTask(id: number, newTask: string): void
Updates the description of a todo item.

- Parameters:

id: The ID of the task to update.

newTask: The new description of the task.

clearCompletedTodos(): void
Removes all completed tasks from the list.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

### Contributing
Contributions are welcome! Please open an issue or submit a pull request.
