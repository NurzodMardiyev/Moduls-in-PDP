const formParent = document.querySelector("#formParentEl"),
  submitedForm = document.querySelector("#submited-form");

console.log(submitedForm.children[1].children[1]);
const users = [];

formParent.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = event.target[0],
    birthday = event.target[1],
    number = event.target[2],
    abanament = event.target[3],
    sportType = event.target[4];

  console.log(abanament);

  let inputsValue = {
    id: users.length,
    save: false,
    inputName: name.value,
    inputBirth: birthday.value,
    inputNum: number.value,
    inputAbanament: abanament.value,
    inputSport: sportType.value,
  };

  users.push(inputsValue);
  console.log(users);
  submitedForm.innerHTML = "";
  let template = `
    <div class="mb-2 d-flex gap-3">
      <span class="text-black">Name: </span>
      <p class="text-body-secondary">${inputsValue.inputName}</p>
    </div>
    <div class="mb-2 d-flex gap-3">
      <span class="text-black">Birthday: </span>
      <p class="text-body-secondary">${inputsValue.inputBirth}</p>
    </div>
    <div class="mb-2 d-flex gap-3">
      <span class="text-black">Number: </span>
      <p class="text-body-secondary">${inputsValue.inputNum}</p>
    </div>
    <div class="mb-2 d-flex gap-3">
      <span class="text-black">Abanament: </span>
      <p class="text-body-secondary">${inputsValue.inputAbanament}</p>
    </div>
    <div class="mb-2 d-flex gap-3">
      <span class="text-black">Sport type: </span>
      <p class="text-body-secondary">${inputsValue.inputSport}</p>
    </div>
    <div class="d-flex justify-content-end">
      <button type="submit" class="btn btn-primary">Save</button>
    </div>
  `;

  submitedForm.innerHTML += template;

  event.target[0].value = "";
  event.target[1].value = "";
  event.target[2].value = "";
  event.target[3].value = "";
  event.target[4].value = "";
});
