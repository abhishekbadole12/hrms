import { DataTypes, Model } from "sequelize";
import sequelize from "@/database/connection";
import User from "./User";

interface SocialAndMoreAttributes {
  id?: string;
  user_id?: string;
  linkedin_url?: string;
  twitter_url?: string;
  github_url?: string;
  created_by?: string;
  updated_by?: string;
  is_active?: boolean;
  // Timestamps
  created_at?: Date;
  updated_at?: Date;
}

class SocialAndMore
  extends Model<SocialAndMoreAttributes>
  implements SocialAndMoreAttributes
{
  public id?: string;
  public user_id?: string;
  public linkedin_url?: string;
  public twitter_url?: string;
  public github_url?: string;
  public created_by?: string;
  public updated_by?: string;
  public created_at?: Date;
  public updated_at?: Date;
  public is_active?: boolean;
}

SocialAndMore.init(
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
    linkedin_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    github_url: {
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
    },
    updated_by: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "SocialAndMore",
    tableName: "social_and_more",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

SocialAndMore.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

export default SocialAndMore;
