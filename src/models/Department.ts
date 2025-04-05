import { DataTypes, Model } from "sequelize";
import sequelize from "@/database/connection";
import slugify from "slugify";
import User from "./User";

interface DepartmentAttributes {
  department_id?: string;
  name: string;
  value?: string;
  description?: string;
  manager_id?: string; // Manager is also a user
  created_by?: string; // Creator of the department
  status?: "ACTIVE" | "INACTIVE";
}

class Department
  extends Model<DepartmentAttributes>
  implements DepartmentAttributes
{
  public department_id!: string;
  public name!: string;
  public description?: string;
  public manager_id?: string;
  public created_by?: string;

  // Virtuals
  public get value() {
    return this.department_id;
  }

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Department.init(
  {
    department_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    manager_id: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: "users",
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    created_by: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: "users",
        key: "user_id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      defaultValue: "ACTIVE",
    },

    // Virtuals
    // This is a virtual field that will not be stored in the database
    value: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue("department_id");
      },
    },
  },
  {
    sequelize,
    modelName: "Department",
    tableName: "departments",
    timestamps: true,
    hooks: {
      beforeValidate: (department: Department) => {
        if (!department.department_id && department.name) {
          const slug = slugify(department.name, { lower: true, strict: true });
          department.department_id = `DEPT-${slug.toUpperCase()}`;
        }
      },
    },
  }
);

// Associations
Department.belongsTo(User, {
  foreignKey: "created_by",
  as: "creator",
});

Department.belongsTo(User, {
  foreignKey: "manager_id",
  as: "manager",
});

export default Department;
