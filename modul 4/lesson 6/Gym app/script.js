const birthdateEl = document.querySelector("#birthdate");
birthdateEl.max = new Date().toISOString().split("T")[0];

// ! Variables
const memberForm = document.querySelector("#membersForm");

// ! Data Base for Members
let memberDB = {
  members: JSON.parse(localStorage.getItem("members")) || [],
  addMember(newMember) {
    this.members.push(newMember);
  },
};
// console.log(memberDB);

renderData("membersList", "members");

// !Membership data base
let memberShipDB = {
  memberships: JSON.parse(localStorage.getItem("memberships")) || [],
  addMemberShip(newMemberShip) {
    this.memberships.push(newMemberShip);
  },
};
// ! Members add form
memberForm.addEventListener("submit", (event) => {
  event.preventDefault(); //* prevents default do not reloading

  const fullname = event.target[0];
  const gender = event.target[1].value;
  const birthDate = event.target[2];
  const email = event.target[3];
  const adress = event.target[4];

  console.log(event);

  // ! Member Object
  const memberObj = {
    id: memberDB.members.length,
    fullname: fullname.value,
    gender,
    birthDate: birthDate.value,
    email: email.value || null,
    adress: adress.value || null,
  };

  // ! data of MemberDB setting in localStorage
  memberDB.addMember(memberObj);
  localStorage.setItem("members", JSON.stringify(memberDB.members));
  renderData("membersList", "members");
});

// ! Membership and Form
const memberShipAddForm = document.querySelector("#memberShipAddForm");

memberShipAddForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const from = event.target[0],
    to = event.target[1],
    price = event.target[2],
    memberId = event.target[3].value;

  // membershipObj
  const memberShipObj = {
    id: memberShipDB.memberships.length,
    memberId,
    from: from.value,
    to: to.value,
    price: price.value,
  };

  memberShipDB.addMemberShip(memberShipObj);
  localStorage.setItem("memberships", JSON.stringify(memberShipDB.memberships));

  renderData("memberShipsList", "membership", memberId);
  console.log(event);
});

// ! Rendering data
function renderData(perntElId, renderType, id) {
  const parentEl = document.getElementById(perntElId);

  parentEl.innerHTML = "";

  switch (renderType) {
    case "members":
      memberDB.members.forEach((member) => {
        const template = `
        <tr class = "">
          <th class="py-3" scope="row">${member.id}</th>
          <td class="py-3">${member.birthDate}</td>
          <td class="py-3">${member.fullname}</td>
          <td class="py-3">${member.gender}</td>
          <td class="py-3">${member.email || "Mavjud emas"}</td>
          <td class="py-3">${member.adress || "mavjud emas"}</td>
          <td>
            <button type="button" data-bs-toggle="modal" data-bs-target="#memberModal" class="btn btn-outline-success" >Info</button>
          </td>
          </tr>
        `;

        parentEl.innerHTML += template;
      });
      break;

    case "membership":
      const userMemberships = memberShipDB.memberships.filter(
        (membership) => membership.memberId == id
      );

      userMemberships.forEach((membership) => {
        const template = `
        <tr class = "">
          <th class="py-3" scope="row">${membership.id}</th>
          <td class="py-3">${membership.from}</td>
          <td class="py-3">${membership.to}</td>
          <td class="py-3">${membership.price}</td>
          <td>
            <button type="button" data-bs-toggle="modal" data-bs-target="#membershipModal" class="btn btn-success" >Delete</button>
          </td>
          </tr>
        `;
        parentEl.innerHTML = template;
      });
      break;

    default:
      break;
  }
}

function openModel(id) {
  const foundMember = memberDB.members.find((member) => member.id == id);
  document.querySelector("#memberModalTitle").innerHTML = foundMember.fullname;

  const memberIdInput = document.querySelector("#memberId");
  memberIdInput.value = id;

  renderData("memberShipsList", "membership", id);
}
