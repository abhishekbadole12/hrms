import { DataTypes, Model } from "sequelize";
import sequelize from "@/database/connection";
import User from "./User";

interface PreviousEmploymentDetailAttributes {
  id?: string;
  user_id: string; // Foreign Key to User
  company_name: string;
  position: string;
  employment_type: string;
  start_date: Date;
  end_date?: Date;
  salary?: number;
  reference_name?: string;
  reference_email?: string;
  reference_phone_number?: string;
  created_by: string; // Self-referencing Foreign Key
  updated_by: string; // Self-referencing Foreign Key
  created_at?: Date;
  updated_at?: Date;
  is_active?: boolean;
}

class PreviousEmploymentDetail
  extends Model<PreviousEmploymentDetailAttributes>
  implements PreviousEmploymentDetailAttributes
{
  public id?: string;
  public user_id!: string;
  public company_name!: string;
  public position!: string;
  public employment_type!: string;
  public start_date!: Date;
  public end_date?: Date;
  public salary?: number;
  public reference_name?: string;
  public reference_email?: string;
  public reference_phone_number?: string;
  public created_by!: string;
  public updated_by!: string;
  public created_at?: Date;
  public updated_at?: Date;
  public is_active?: boolean;
}

PreviousEmploymentDetail.init(
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
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employment_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    reference_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reference_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reference_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
      onUpdate: "CASCADE",
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
      onUpdate: "CASCADE",
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
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: "PreviousEmploymentDetail",
    tableName: "previous_employment_details",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

PreviousEmploymentDetail.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

export default PreviousEmploymentDetail;
