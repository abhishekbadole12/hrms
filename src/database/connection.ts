import { Sequelize } from "sequelize";
import { PROCESS } from "./env";

const sequelize = new Sequelize({
  database: PROCESS.DB.NAME,
  username: PROCESS.DB.USER,
  password: PROCESS.DB.PASSWORD,
  host: PROCESS.DB.HOST,
  port: Number(PROCESS.DB.PORT),
  benchmark: true,
  dialect: "mysql",
  dialectModule: require("mysql2"),
  pool: {
    max: 5, // Maximum connections in pool
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // Sync tables
    console.log("Database connected and models synced.");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();

export default sequelize;
