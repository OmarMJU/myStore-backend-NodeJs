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
    },
    total: {
        type: DataTypes.VIRTUAL,
        get() {
            if (this.items && this.items.length > 0) {
                return this.items.reduce((total, item) => {
                    return total + (item.price * item.OrderProduct.amount);
                }, 0);
            }

            return 0;
        }
    }
};

class Order extends Model {
    static associate(models) {
        // Asiciacion con cliente.
        this.belongsTo(models.Costumer, { as: "costumer" });

        // Asociacion con Productos.
        this.belongsToMany(models.Product, {
            as: "items",
            through: models.OrderProduct,
            foreignKey: "orderId",
            otherKey: "productId"
        });
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
