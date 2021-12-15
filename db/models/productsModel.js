const { Model, DataTypes, Sequelize } = require("sequelize");

const PRODUCTS_TABLE = "products";
const ProductsSchema = {
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
    price: {
        allowNull: false,
        type: DataTypes.DOUBLE
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isBlock: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: "is_block",
        defaultValue: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    }
};

class Products extends Model {
    static associate() {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCTS_TABLE,
            modelName: "Product",
            timestamps: false
        }
    }
}

module.exports = { PRODUCTS_TABLE, ProductsSchema, Products };
