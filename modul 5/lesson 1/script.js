const users = [];

class User {
  constructor(name, age) {
    (this.name = name), (this.year = age), (this.course = course);
  }

  save() {
    const user = {
      id: Date.now(),
      ...this,
    };
    users.push(user);
    return user;
  }

  static findById(id) {
    return users.find((u) => u.id === id);
  }

  static deleteById(id) {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  }
}
function addUser() {
  const user = new User("Ibrohim", 22, "Frontend");
  user.save();
}

function render(id) {
  const user = User.findById(id);
}
