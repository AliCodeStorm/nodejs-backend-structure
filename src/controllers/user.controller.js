// src/controllers/userController.js
const userService = require("../services/userServices");

const getUserData = (req, res) => {
  const { userId } = req.params;
  const user = userService.getUser(userId);
  res.json(user);
};

module.exports = { getUserData };
