import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Producto extends Model {
    public name!: string;
    public descripcion!: string;
    public talla!: string;
    public precio!: number;
}

Producto.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      talla: {
        type: new DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
    }
  );