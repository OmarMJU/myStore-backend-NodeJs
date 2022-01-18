const { Model, DataTypes, Sequelize } = require("sequelize");
const { COSTUMER_TABLE } = require("../models/costumerModel");

const ORDER_TABLE = "orders";
const OrderSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    status: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "pending"
    },
    addressDelivery: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "address_delivery"
    },
    totalPrice: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        field: "total_price:"
    },
    costumerId: {
        field: "costumer_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: COSTUMER_TABLE,
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    },
    createAt: {
        field: "create_at",
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
};

class Order extends Model {
    static associate(models) {
        this.belongsTo(models.Costumer, { as: "costumer" });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: "Order",
            timestamps: false
        }
    }
}

module.exports = { ORDER_TABLE, OrderSchema, Order }
