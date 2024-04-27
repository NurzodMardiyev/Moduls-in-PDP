const sicknessDB = JSON.parse(localStorage.getItem("patients")) || [];

class Sick {
  constructor({ fullname, sickness, adress, phoneNumber, gender, level }) {
    this.fullname = fullname;
    this.sickness = sickness;
    this.adress = adress;
    this.phoneNumber = phoneNumber;
    this.gender = gender;
    this.level = level;
  }

  save() {
    const newSick = {
      id: sicknessDB[sicknessDB.length - 1]?.id + 1 || 0,
      ...this,
    };

    sicknessDB.push(newSick);
    localStorage.setItem("patients", JSON.stringify(sicknessDB));
    return newSick;
  }

  static deleteById(id) {
    const index = sicknessDB.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      sicknessDB.splice(index, 1);
      localStorage.setItem("patients", JSON.stringify(sicknessDB));
      this.render();
    } else {
      console.log("not found");
    }
    // sicknessDB.splice(id, 1);
    // localStorage.setItem("patients", JSON.stringify(sicknessDB));
  }

  static editById(id) {
    const index = sicknessDB.findIndex((item) => item.id === Number(id));
    if (index !== -1) {
      const editSickName = prompt("Enter the new value Name");
      if (editSickName === "") {
        alert("Please enter the name");
        return prompt("Enter the new value Name");
      }
      sicknessDB[index].fullname = editSickName;
      console.log(editSickName);
      // const editSickness = prompt("Enter the new value sickness");
      // sicknessDB[index].sickness = editSickness;
      localStorage.setItem("patients", JSON.stringify(sicknessDB));
      this.render();
    } else {
      console.log("not found");
    }
  }

  static render(renderElId = "tableId") {
    const renderEl = document.getElementById(renderElId);
    renderEl.innerHTML = "";
    for (let patient of sicknessDB) {
      const { id, fullname, sickness, adress, phoneNumber, level, gender } =
        patient;
      const template = `
        <tr>
          <th scope="row">${id}</th>
          <td>${fullname}</td>
          <td>${sickness}</td>
          <td>${adress}</td>
          <td>${phoneNumber}</td>
          <td>${gender}</td>
          <td>${level}</td>
          <td><button class="btn btn-danger" onclick="Sick.deleteById('${id}')"</button>Delete</td>
          <td><button class="btn btn-success" onclick="Sick.editById('${id}')"</button>Edit</td>
        </tr>
      `;

      renderEl.innerHTML += template;
    }
  }
}
Sick.render();
