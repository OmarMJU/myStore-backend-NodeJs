const { Model, DataTypes, Sequelize } = require("sequelize");
const { USER_TABLE } = require("./userModel");

const COSTUMER_TABLE = "costumer";
const costumerSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nameUser: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "name_user"
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
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    },
    userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: true,
        references: {
            model: USER_TABLE,
            key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
    }
};

class Costumer extends Model {
    static associate(models) {
        // User relationship.
        this.belongsTo(models.User, { as: "user" });

        // Orders relationship.
        this.hasMany(models.Order, {
            as: "order",
            foreignKey: "costumerId"
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: COSTUMER_TABLE,
            modelName: "Costumer",
            timestamps: false
        }
    }
}

module.exports = { COSTUMER_TABLE, costumerSchema, Costumer };
