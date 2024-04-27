const formEl = document.querySelector(".formEl");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullname = event.target[0],
    password = event.target[1];

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: fullname.value,
      password: password.value,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      const token = res.token;
      localStorage.setItem("token", token);
      location.replace("/signin.html");
    })
    .catch((err) => console.log(err));
});
