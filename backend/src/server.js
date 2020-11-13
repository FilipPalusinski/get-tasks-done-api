require("dotenv").config();
const express = require("express");

const db = require("./database/connection");
const User = require("./model/User");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

const start = async () => {
  try {
    await db.sync({ force: true, logging: console.log });
  } catch (err) {
    console.log("There was an error with db sync", err);
  }

  // TODO: Make router router
  app.post("/addUser", addUser);
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

// TODO: Make user controller and place this func inside
const addUser = async (req, res) => {
  const { name, password, email } = req.body;
  await User.create({ username: name, email, password });
};

start();
