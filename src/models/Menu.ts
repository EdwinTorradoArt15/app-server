import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { Permission } from "./Permission";

class Menu extends Model {
  public id_menu!: number;
  public name!: string;
  public icon!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Menu.init(
  {
    id_menu: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    icon: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "menus",
  }
);

Menu.belongsTo(Permission, {
  foreignKey: "id_permission",
  as: "permission",
});

export { Menu };
