const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

// TODO: Add validation, email is email etc.
module.exports = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING(255),
    allowNull: false,
    validate: {
      len: [7, 255],
    },
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      len: [5, 50],
    },
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      len: [8, 20],
    },
  },
});
