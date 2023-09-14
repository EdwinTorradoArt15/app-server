import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  database: "",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
});

export default sequelize;
