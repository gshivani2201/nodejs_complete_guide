const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Mysql@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
