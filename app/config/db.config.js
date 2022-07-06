module.exports = {
  local: {
    username: 'local',
    password: 'qweasd44443',
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  development: {
    username: 'develpoment',
    password: 'qweasd44443',
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'test',
    password: 'qweasd44443',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: 'qweasd44443',
    database: 'database',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
