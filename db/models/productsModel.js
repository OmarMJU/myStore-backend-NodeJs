const { Model, DataTypes, Sequelize } = require("sequelize");
const { CATEGORIES_TABLE } = require("./categoriesModel");

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
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    },
    categoryId: {
        field: "category_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORIES_TABLE,
            key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    }
};

class Products extends Model {
    static associate(models) {
        this.belongsTo(models.Category, {
            as: "category"
        });
    }

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
