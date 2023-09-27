import { DataTypes, Model } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UsersInstance extends Model {
    id: number;
    name: string;
    age: number;
    email: string;
}

export const Users = sequelize.define<UsersInstance>(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: 18,
        },
    },
    {
        tableName: "users",
        timestamps: false,
    }
);
