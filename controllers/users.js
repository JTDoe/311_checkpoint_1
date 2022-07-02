const users = require("../data/index.js");
const sampleUser = require("../data/sampleUser.js");
let userCounter = users.length;

const listUsers = (req, res) => {
  res.json(users);
};

const showUser = (req, res) => {
  let person = users.find((user) => user.id == req.params.id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).json({
      msg: `User ${req.params.id} is not found.`,
    });
  }
};

const createUser = (req, res) => {
  sampleUser.id = userCounter + 1;
  users.push(sampleUser);
  res.json(users);
};

const updateUser = (req, res) => {
  let findUser = users.find((user) => user.id === parseInt(req.params.id));
  if (findUser) {
    users.forEach((user) => {
      if (user.id === parseInt(req.params.id)) {
        user.name = sampleUser.name;
        return res.json(user);
      }
    });
  } else {
    res.status(400).json({ msg: `User ${req.params.id} is not found.` });
  }
};

const deleteUser = (req, res) => {
  let findUser = users.find((user) => user.id === parseInt(req.params.id));
  if (findUser) {
    users.forEach((user) => {
      if (user._id === parseInt(req.params.userId)) {
        return res.json(user);
      }
    });
  } else {
    res.status(400).json({ msg: `User ${req.params.id} is not found.` });
  }
  res.send("User deleted!");
};
module.exports = { listUsers, showUser, createUser, updateUser, deleteUser };
