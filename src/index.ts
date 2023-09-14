import { App } from "./app";
import sequelize from "./config/database";

async function main() {
  try {
    const app = new App();
    await sequelize.sync();
    await app.listen();
  } catch (error) {
    console.error(error);
  }
}

main();
