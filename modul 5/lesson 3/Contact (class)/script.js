const createContactForm = document.querySelector("#createForm");
const lists = document.querySelector(".lists");

const contactDB = JSON.parse(localStorage.getItem("contacts")) || [];

console.log(contactDB);
class Contact {
  constructor(ism, familya, telNum, email, id, complate) {
    this.ism = ism;
    this.familya = familya;
    this.telNum = telNum;
    this.email = email;
    this.id = id;
    this.complate = complate;
  }

  save() {
    contactDB.push(this);
    this.updateLocalData("contacts", contactDB);
  }

  updateLocalData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static render(lists) {
    lists.innerHTML = "";
    contactDB.map((contact) => {
      const { ism, familya, telNum, email } = contact;

      const template = `
                  <li
                      class="w-100 d-flex justify-content-between align-items-center list mt-3 py-2"
                    >
                      <div class="left d-flex align-items-center">
                        <div class="user_img">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s"
                            alt=""
                          />
                        </div>
                        <div class="user_info d-flex flex-column ms-3">
                          <h3 class="fs-5 mb-0">${ism} ${familya}</h3>
                          <p class="fs-6 m-0">${telNum}</p>
                        </div>
                      </div>
                      <div class="right d-flex align-items-center">
                        <div class="star">
                        <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="treNuft">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </li>
      `;

      lists.innerHTML += template;
    });
  }
}
createContactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const [ism, familya, telNum, email] = event.target;

  const user = new Contact(
    ism.value,
    familya.value,
    telNum.value,
    email.value,
    uuidv4(),
    false
  );
  console.log(user);
  user.save();
  Contact.render(lists);
});
Contact.render(lists);

// UUID
function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16)
  );
}

// Star
const star = document.querySelector(".star .fa-regular");
star.addEventListener(
  "click",
  (starFunc = () => {
    if (star.classList.contains("fa-regular")) {
      star.classList.remove("fa-regular");
      star.classList.add("fa");
      user.setComplate(true);
      console.log(Contact);
    } else {
      star.classList.add("fa-regular");
      star.classList.remove("fa");
    }
  })
);

// Image Update
const addImageBtn = document.querySelector(".yourImg span img");
const yourImage = document.querySelector(".yourImg > img");
console.log(yourImage);

addImageBtn.addEventListener("click", () => {
  let userInput = prompt("Iltimos, img url kiriting:", "");
  if (userInput !== null) {
    yourImage.src = `${userInput}`;
  } else {
    console.log("working");
  }
});
