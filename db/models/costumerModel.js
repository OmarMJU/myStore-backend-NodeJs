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
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "last_name"
    },
    phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "phone_number",
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
        this.belongsTo(models.User, {as: "user"});
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
