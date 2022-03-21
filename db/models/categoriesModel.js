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
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    },
    // items: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         if (this.products) {
    //             return this.products.length;
    //         }

    //         return 0;
    //     }
    // }
};

class Category extends Model {
    static associate(models) {
        this.hasMany(models.Product, {
            as: "products",
            foreignKey: "categoryId"
        });
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
