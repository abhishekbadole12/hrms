import sequelize from "@/database/connection";
import { DataTypes, Model } from "sequelize";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

interface UserAttributes {
  user_id?: string;
  first_name: string;
  middle_name?: string; // Optional field
  last_name: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  country_code: string;
  phone_number: string;
  email: string;
  user_role: "ADMIN" | "MANAGER" | "EMPLOYEE" | "HR";
  password?: string;
  status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "RESIGNED" | "TERMINATED";
  isVerified?: boolean;
  created_by?: string; // Self-referencing Foreign Key
  updated_by?: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public user_id!: string;
  public first_name!: string;
  public middle_name?: string;
  public last_name!: string;
  public gender!: "MALE" | "FEMALE" | "OTHER";
  public country_code!: string;
  public phone_number!: string;
  public email!: string;
  public user_role!: "ADMIN" | "MANAGER" | "EMPLOYEE" | "HR";
  public password!: string;
  public status?:
    | "ACTIVE"
    | "INACTIVE"
    | "SUSPENDED"
    | "RESIGNED"
    | "TERMINATED";
  public created_by?: string;
  public updated_by?: string;

  // Hash password before saving
  // public async hashPassword(): Promise<void> {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
}

User.init(
  {
    user_id: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
      unique: true,
      defaultValue: () =>
        `EMP-${uuidv4().split("-")[0].toUpperCase()}-${uuidv4()
          .split("-")[1]
          .toUpperCase()}`,
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
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
      validate: {
        isNumeric: true,
        len: [10, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
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
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    created_by: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    hooks: {
      beforeCreate: async (user: User) => {
        if (!user.password) {
          const randomPassword = crypto.randomUUID(); // generate random UUID
          user.password = await bcrypt.hash(randomPassword, 10); // hash randomPassword

          // You can store `randomPassword` in another field if needed (optional)
          (user as any)._plainPassword = randomPassword; // Temporary store for reference
        } else if (!user.password.startsWith("$2b$")) {
          // Hash only if not already hashed
          user.password = await bcrypt.hash(user.password, 10);
        }
      },
    },
  }
);

export default User;
