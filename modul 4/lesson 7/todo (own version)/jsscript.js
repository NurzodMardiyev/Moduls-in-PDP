"use strict";

const createTodo = document.querySelector("#createTodo");
const enterTodo = document.querySelector("#todoForm");

const todoBase = [];

const token = localStorage.getItem("token");

enterTodo.addEventListener("submit", async (e) => {
  e.preventDefault();

  const task = e.target[0].value;

  try {
    const res = await fetch("https://todo-for-n92.cyclic.app/todos/add", {
      method: "POST",
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: task,
      }),
    });
    const data = await res.json();
    render(data.todo.task, data.todo._id);
    todoBase.push({ task: data.todo.task, id: data.todo._id });
    console.log(todoBase);
    editRender();
  } catch {
    console.error("error");
  }
});

function render(task, id) {
  const template = `
    <div
      class="alert alert-dark d-flex align-items-center gap-2 justify-content-between"
      role="alert"
    >
      <div id="listItem">${task}</div>
      <div class="d-flex gap-2">
        <buttun class="btn btn-success" onclick="editRender('${id}')"
          > edit </buttun>
        <buttton class="btn btn-danger" onclick="deleteRender('${id}')">delate</buttton>
      </div> 
    </div>
  `;

  createTodo.innerHTML += template;
}

editRender = (id) => {
  const listItem = document.querySelectorAll("#listItem");
  console.log(listItem);
  todoBase.map((item) => {
    const template = `
      <div class="input-group" id="saveTodoEl">
            <input
              type="text"
              class="form-control"
              value = ${item.task}
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
              onclick="save()"
            >
              Save
            </button>
          </div>
      `;
    listItem[0].innerHTML = template;
  });
};

deleteRender = async (id) => {
  try {
    const res = await fetch(`https://todo-for-n92.cyclic.app/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
    render();
    console.log("red");
  } catch {
    console.log("Error");
  }
};
