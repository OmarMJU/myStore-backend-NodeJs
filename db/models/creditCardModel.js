const { Sequelize, Model, DataTypes } = require("sequelize");
const { USER_TABLE } = require("./userModel");

const CREDIT_CARD_TABLE = "credit_card";
const creditCardSchema = {
    id: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nameOwner: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "name_owner"
    },
    expirationDate: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "expiration_date"
    },
    secureCode: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "secure_code"
    },
    billingAddress: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "billing_address"
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: "user_id",
        references: {
            model: USER_TABLE,
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class CreditCard extends Model {
    static associate(models) {
        // User relationship.
        this.belongsTo(models.User, { as: "user"});
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CREDIT_CARD_TABLE,
            modelName: "CreditCard",
            timestamps: false
        };
    }
}

module.exports = { CREDIT_CARD_TABLE, creditCardSchema, CreditCard };
