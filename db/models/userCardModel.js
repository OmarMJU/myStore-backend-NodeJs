const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel");
const { CREDIT_CARD_TABLE } = require("./creditCardModel");

const USER_CARD_TABLE = "user_card";
const userCardSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    },
    userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: USER_TABLE,
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    cardId: {
        field: "card_id",
        allowNull: false,
        type: DataTypes.STRING,
        references: {
            model: CREDIT_CARD_TABLE,
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    }
};

class UserCard extends Model {
    static associate() {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_CARD_TABLE,
            modelName: "UserCard",
            timestamps: false
        };
    }
}

module.exports = { USER_CARD_TABLE, userCardSchema, UserCard };
