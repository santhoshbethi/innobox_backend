module.exports = {
  HOST: "localhost",
  USER: "innouser",
  PASSWORD: "Innobox@2020",
  DB: "api",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
