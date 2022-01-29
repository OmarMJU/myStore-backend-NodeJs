const { Sequelize, Model, DataTypes } = require("sequelize");
const { USER_TABLE } = require("./userModel");

const CREDIT_CARD_TABLE = "credit_card";
const creditCardSchema = {
    cartNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "cart_number"
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
        type: DataTypes.NUMBER,
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
        }
    }
}

module.exports = { CREDIT_CARD_TABLE, creditCardSchema, CreditCard };
