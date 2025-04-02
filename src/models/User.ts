// import { sequelize } from "@/database";

import sequelize from "@/database/connection";
import { DataTypes, Model } from "sequelize";


interface UserAttributes {
  user_id?: number;
  first_name: string;
  middle_name?: string; // Optional field
  last_name: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  country_code: string;
  phone_number: string;
  email: string;
  user_role: "ADMIN" | "MANAGER" | "EMPLOYEE" | "HR";
  password: string;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
}

class User extends Model<UserAttributes> implements UserAttributes {
  public user_id!: number;
  public first_name!: string;
  public middle_name?: string;
  public last_name!: string;
  public gender!: "MALE" | "FEMALE" | "OTHER";
  public country_code!: string;
  public phone_number!: string;
  public email!: string;
  public user_role!: "ADMIN" | "MANAGER" | "EMPLOYEE" | "HR";
  public password!: string;
  public status?: "ACTIVE" | "INACTIVE" | "SUSPENDED";
}

User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("MALE", "FEMALE", "OTHER"),
      allowNull: false,
    },
    country_code: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "+91", // Default - India
    },
    phone_number: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: false,
      validate: {
        isNumeric: true,
        len: [10, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    user_role: {
      type: DataTypes.ENUM("ADMIN", "MANAGER", "EMPLOYEE", "HR"),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE", "SUSPENDED"),
      defaultValue: "ACTIVE",
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ["email", "phone_number"],
      },
    ],
  }
);

export default User;
