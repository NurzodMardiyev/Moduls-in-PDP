const formEl = document.querySelector("#formEl");
const users = [];

formEl.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = event.target[0];

  try {
    const res = await fetch(
      "https://crudcrud.com/api/f13946f6a0974d2296a9c1fda5fec33a/users",
      {
        method: "POST",
        // mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.value,
        }),
      }
    );
    if (!res.ok) {
      throw new Error("Error something");
    }
    const data = await res.json();
    const token = data.name;
    users.push(token);
    name.value = "";
    console.log(users);

    // Random
    const randomEl = document.querySelector("#randomEl");

    // const myArray = [1, 2, 3, 4, 5];

    // Massivni shuffle qilish uchun funksiya
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];

        console.log(j);
      }
    }

    // Massivni shuffle qilish
    randomEl.addEventListener("click", () => {
      shuffleArray(users);
    });

    // Natijani consolga chiqarish
    console.log(users);
  } catch (error) {
    console.error("Error", error);
  }
});
