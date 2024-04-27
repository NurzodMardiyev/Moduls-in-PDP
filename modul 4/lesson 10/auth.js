// const token = localStorage.getItem("token");
// if (!token) {
//   location.replace("/signin.html");
// }

const formEl = document.querySelector("#formEl");

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target[0],
    age = event.target[1],
    date = event.target[2];

  const student = {
    fullname: name.value,
    age: Number(age.value),
    joinDate: new Date(date.value).toISOString(),
    // course: course.value,
  };
  try {
    const res = await fetch(
      "https://crudcrud.com/api/f659daa8e67745c587e56b30f0739565/students",
      {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      }
    );
    if (!res.ok) {
      throw new Error("Error while creating student");
    }
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
    alert("Error while creating student");
  }
});
