import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import rolesRoutes from "./routes/roles.routes";
import userRoutes from "./routes/user.routes";
import productoRoutes from "./routes/producto.routes";

dotenv.config();

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set("port", process.env.PORT || 4000);
  }

  middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(cookieParser());
  }

  routes() {
    this.app.use("/api/auth", authRoutes);
    this.app.use("/api/roles", rolesRoutes);
    this.app.use("/api/users", userRoutes);
    this.app.use("/api/productos", productoRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log("Server on port", this.app.get("port"));
  }
}
