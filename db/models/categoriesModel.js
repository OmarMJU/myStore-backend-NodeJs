const { Model, DataTypes, Sequelize } = require("sequelize");

const CATEGORIES_TABLE = "categories";
const CategoriesSchema = {
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
    items: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    }
};

class Category extends Model {
    static associate() {
        //
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORIES_TABLE,
            modelName: "Category",
            timestamps: false
        };
    }
}

module.exports = { CATEGORIES_TABLE, CategoriesSchema, Category };
