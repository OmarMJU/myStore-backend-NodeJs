const { Model, DataTypes, Sequelize } = require("sequelize");

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
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    }
};

class Costumer extends Model {
    static associate() {
        //
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
