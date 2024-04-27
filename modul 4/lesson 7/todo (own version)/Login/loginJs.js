"use strict";

const here = document.querySelector(".here");
// const login_Sign = document.querySelector(".login_Sign");
const signUpForm = document.querySelector("#signUpForm");
const signInForm = document.querySelector("#signInForm");
here.addEventListener("click", () => {
  signUpForm.classList.toggle("hide");
  signInForm.classList.toggle("show");
});

// *Reigister
signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = e.target[0].value,
    password = e.target[1].value;

  try {
    const res = await fetch("https://todo-for-n92.cyclic.app/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!res.ok) {
      throw new Error("Error something");
    }
    const data = await res.json();
    localStorage.setItem("token", data.token);
    signUpForm.reset();
  } catch {
    console.log("error");
  }
});

// *Login
signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = e.target[0].value,
    password = e.target[1].value;

  try {
    const res = await fetch("https://todo-for-n92.cyclic.app/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!res.ok) {
      throw new Error("Error something");
    }
    const data = await res.json();
    if (data.token) {
      location.href = "../index.html";
    }
    signUpForm.reset();
  } catch {
    console.log("error");
  }
});
