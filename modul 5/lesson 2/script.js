const sickForm = document.querySelector("#sickForm");

sickForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const [fullname, sickness, adress, phoneNumber, male, female, level] =
    event.target;

  const newSickObj = {
    fullname: fullname.value,
    sickness: sickness.value,
    adress: adress.value,
    phoneNumber: phoneNumber.value,
    gender: male.checked ? "male" : "female",
    level: level.value,
  };

  const newSick = new Sick(newSickObj);
  newSick.save();
  Sick.render("tableId");
  this.reset();
  console.log(sicknessDB);
  console.log(newSickObj);
});
