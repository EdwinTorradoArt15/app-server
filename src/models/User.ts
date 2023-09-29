import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import { Role } from "./Role";

class User extends Model {
  public id_user!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public address!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public readonly rol?: Role;
}

User.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);

User.belongsTo(Role, {
  foreignKey: "id_rol",
  as: "rol",
});

export { User };
