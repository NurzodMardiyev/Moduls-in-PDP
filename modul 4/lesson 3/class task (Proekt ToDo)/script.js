// "use strict";

const todoForm = document.querySelector("#todoForm"),
  todosListEl = document.querySelector("#todosList"),
  complatedTodosListEl = document.querySelector("#complatedTodos");

const todos = [
  {
    id: 0,
    task: "Nurzod",
    time: "2024-01-27",
    complated: false,
    currentTime: "2024-1-5",
  },

  {
    id: 1,
    task: "Farrux",
    time: "2024-01-30",
    complated: false,
    currentTime: "2024-1-5",
  },
];

renderTodos(todos);

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get Value From Input
  const taskInput = event.target[0];
  const timeInput = event.target[1];

  const date = new Date();

  // Creating Object Todo
  const todo = {
    id: todos.length,
    task: taskInput.value,
    time: timeInput.value,
    complated: false,
    currentTime: `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`,
  };

  // Add todo to Todos Array
  todos.push(todo);

  // Empty Input value
  taskInput.value = "";
  timeInput.value = "";

  console.log(todos);
  renderTodos(todos);
});

function renderTodos(todos) {
  todosListEl.innerHTML = "";
  complatedTodosListEl.innerHTML = "";
  todos.forEach((todo) => {
    const template = `
    <li class="list-group-item d-flex justify-content-between" ondblclick="complateTodo('${todo.id}')")>
      <span>${todo.task}</span>
      <span>${todo.time}</span>
    </li>
    `;

    if (todo.complated) {
      complatedTodosListEl.innerHTML += template;
    } else {
      todosListEl.innerHTML += template;
    }
  });
}

function complateTodo(id) {
  console.log(id);

  const newTodos = todos.map((todo) => {
    if (todo.id == id) {
      todo.complated = !todo.complated;
      return todo;
    } else {
      return todo;
    }
  });

  todos = newTodos;
  renderTodos(todos);
}
