import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { Permission } from "./Permission";

class Role extends Model {
  public id_role!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init(
  {
    id_role: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: "roles",
  }
);

Role.belongsTo(Permission, {
  foreignKey: "id_role",
  as: "permission",
});


export { Role };
