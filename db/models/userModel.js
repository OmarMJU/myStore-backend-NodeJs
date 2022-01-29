const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";
const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "full_name"
    },
    gender: {
        allowNull: false,
        type: DataTypes.STRING
    },
    isBlock: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        field: "is_block",
        defaultValue: false
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "costumer"
    },
    phoneNumber: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "phone_number",
    },
    address1: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "address_1"
    },
    address2: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_2"
    },
    address3: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_3"
    },
    address4: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_4"
    },
    address5: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_5"
    },
    address6: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_6"
    },
    address7: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_7"
    },
    address8: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_8"
    },
    address9: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_9"
    },
    address10: {
        allowNull: true,
        type: DataTypes.STRING,
        field: "address_10"
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: "create_at",
        defaultValue: Sequelize.NOW
    }
};

class User extends Model {
    static associate(models) {
        this.hasOne(models.Costumer, {
            as: "costumer",
            foreignKey: "userId"
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: "User",
            timestamps: false
        };
    }
}

module.exports = { USER_TABLE, UserSchema, User };
