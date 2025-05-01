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
    console.log("✅ Database connection authenticated");

    // Sync tables
    if (PROCESS.NODE_ENV === "PRODUCTION") {
      await sequelize.sync({ alter: true });
      console.log("✅ Database connection established successfully. env: ", PROCESS.NODE_ENV);
    } else {
      await sequelize.sync();
      console.log("✅ Database connection established successfully. env: ", PROCESS.NODE_ENV);
    }
  } catch (error) {
    console.error("❌ Database connection failed:", (error as Error).message);
  }
})();

export default sequelize;
