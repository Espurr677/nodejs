const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');

const local = dbConfig.local;
const development = dbConfig.development;
const test = dbConfig.test;
const production = dbConfig.production;

const sequelize = new Sequelize(
  local.database,
  local.username,
  local.password,
  {
    host: local.host,
    dialect: local.dialect,
    operatorsAliases: false
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model.js')(sequelize, Sequelize);
module.exports = db;
