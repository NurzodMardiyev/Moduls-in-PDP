const userPromise = (url, firstname, edit) => {
  const users = ["Ibrohim", "Bobur", "Ezoza", "Gulchapchap"];
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (url === "/users" && firstname && edit) {
        resolve(
          users.map((user) => {
            if (user == firstname) {
              user = edit;
              // return user;
            }
            return user; //else return user;
          })
        );
      } else {
        reject(new Error("User not found"));
      }
    }, 2000);
  });
};

// console.log(users);
const date = userPromise("/users", "Ibrohim", "ilhom")
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    throw new Error("involid date");
  })
  .finally(() => console.log("Finally"));
