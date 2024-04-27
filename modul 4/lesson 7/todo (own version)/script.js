"use script";

const todoForm = document.querySelector("#todoForm");
const createTodo = document.querySelector("#createTodo");

const todoDB = [];

console.dir(todoForm);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = e.target[0];

  let inputEnterObj = {
    id: todoDB.length,
    value: input.value.trim(),
    complated: false,
  };

  if (input.value === "") {
    alert("you are idiot");
  } else {
    todoDB.push(inputEnterObj);
    render();
    input.value = "";
  }

  console.log(todoDB);
});

function render() {
  createTodo.innerHTML = "";
  todoDB.forEach((todo) => {
    const template = `
    <div
        class="alert alert-dark d-flex align-items-center gap-2 justify-content-between"
        role="alert"
      >
      <input
        type="text"
        class="form-control"
        value="${todo.value}"
        readonly
      />
      <div class="d-flex gap-2">
        <buttun class="btn btn-success" onclick="editRender()">edit</buttun>
        <buttton class="btn btn-danger">delate</buttton>
      </div>
    </div>
    `;
    createTodo.innerHTML += template;
  });
}
