const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    gender: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isBlock: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: "is_block",
        defaultValue: false
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "costumer"
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    }
};

class User extends Model {
    static associate(models) {
        this.hasOne(models.Costumer, {
            as: "costumer",
            foreignKey: "userId"
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: false
        };
    }
}

module.exports = { USER_TABLE, UserSchema, User };
