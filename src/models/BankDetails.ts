import sequelize from "@/database/connection";
import { DataTypes, Model } from "sequelize";
import User from "./User";

interface BankDetailsAttributes {
  id?: string;
  user_id: string; // Foreign Key to User
  account_holder: string;
  account_number: string;
  bank_name: string;
  branch_name: string;
  ifsc_code: string;
  account_type: "SAVINGS" | "CURRENT";
  pan_number: string;
  created_by: string; // Self-referencing Foreign Key
  updated_by: string; // Self-referencing Foreign Key
  is_active?: boolean;

  // Timestamps
  created_at?: Date;
  updated_at?: Date;
}

class BankDetails
  extends Model<BankDetailsAttributes>
  implements BankDetailsAttributes
{
  public id?: string;
  public user_id!: string; // Foreign Key to User
  public account_holder!: string;
  public account_number!: string;
  public bank_name!: string;
  public branch_name!: string;
  public ifsc_code!: string;
  public account_type!: "SAVINGS" | "CURRENT";
  public pan_number!: string;
  public created_by!: string; // Self-referencing Foreign Key
  public updated_by!: string; // Self-referencing Foreign Key
}

BankDetails.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    account_holder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [9, 18],
      },
    },
    bank_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ifsc_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Z]{4}0[A-Z0-9]{6}$/i,
      },
    },
    account_type: {
      type: DataTypes.ENUM("SAVINGS", "CURRENT"),
      allowNull: false,
    },
    pan_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      },
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize, // Pass the connection instance
    tableName: "bank_details",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

// Associations
BankDetails.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Export the model
export default BankDetails;
