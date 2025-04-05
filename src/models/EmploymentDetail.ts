import { DataTypes, Model } from "sequelize";
import User from "./User";
import sequelize from "@/database/connection";

interface EmploymentDetailAttributes {
  id?: string;
  user_id: string; // Foreign Key to User
  job_title: string;
  department_id?: string;
  reporting_manager_id?: string; // Foreign Key to User
  employment_type: "FULL_TIME" | "PART_TIME" | "CONTRACT" | "INTERNSHIP";
  employment_status?: "ACTIVE" | "INACTIVE" | "TERMINATED" | "RESIGNED";
  work_location: string;
  join_date: Date;
  end_date?: Date;
  probation_end_date: Date;
  confirmation_date?: Date;
  salary?: number;
  currency_unit?: "INR" | "USD" | "EUR";
  is_active?: boolean;
  created_by: string; // Self-referencing Foreign Key
  updated_by: string; // Self-referencing Foreign Key
}

class EmploymentDetail
  extends Model<EmploymentDetailAttributes>
  implements EmploymentDetailAttributes
{
  public id?: string;
  public user_id!: string;
  public job_title!: string;
  public department_id!: string;
  public reporting_manager_id?: string;
  public employment_type!:
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACT"
    | "INTERNSHIP";
  public employment_status?: "ACTIVE" | "INACTIVE" | "TERMINATED" | "RESIGNED";
  public work_location!: string;
  public join_date!: Date;
  public end_date?: Date;
  public probation_end_date!: Date;
  public confirmation_date?: Date;
  public salary?: number;
  public currency_unit?: "INR" | "USD" | "EUR";
  public is_active?: boolean;
  public created_by!: string;
  public updated_by!: string;
}

EmploymentDetail.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    department_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reporting_manager_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: User,
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    employment_type: {
      type: DataTypes.ENUM("FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"),
      allowNull: true,
    },
    employment_status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE", "TERMINATED", "RESIGNED"),
      allowNull: true,
      defaultValue: "ACTIVE",
    },
    work_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    join_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    probation_end_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    confirmation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    salary: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    currency_unit: {
      type: DataTypes.ENUM("INR", "USD", "EUR"),
      allowNull: true,
      defaultValue: "INR",
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    created_by: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    updated_by: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: User,
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    sequelize,
    modelName: "EmploymentDetail",
    tableName: "employment_details",
    timestamps: true,
  }
);

// **Associations**
User.hasOne(EmploymentDetail, {
  foreignKey: "user_id",
  as: "employmentDetails",
});

EmploymentDetail.belongsTo(User, { foreignKey: "user_id", as: "user" });

export default EmploymentDetail;
