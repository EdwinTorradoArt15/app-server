import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Permission extends Model {
  public id_permission!: number;
  public name!: string;
  public status!: boolean;
  public url!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Permission.init(
  {
    id_permission: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    url: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "permissions",
  }
);

export { Permission };
