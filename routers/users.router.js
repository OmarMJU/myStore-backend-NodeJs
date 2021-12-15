const express = require("express");
const UserService = require("../services/users.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { getUserSchema, createUserSchema, updateUserSchema } = require("../schemas/usersDTO");

// Ruteador para los usuarios.
const routerUsers = express.Router();

// Instab¡ncia del servicio.
const service = new UserService();

// Todos los usuarios.
routerUsers.get("/", async (req, res, next) => {
    try {
        const users = await service.getAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
});

// Usuario por id.
routerUsers.get("/:id", validatorHandler(getUserSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await service.getOne(id);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
});

// Crear Usuario
routerUsers.post("/", validatorHandler(createUserSchema, "body"), async (req, res, next) => {
    const datas = req.body;

    try {
        const userCreate = await service.create(datas);

        res.status(201).json({
            message: "User created",
            userCreate
        });
    } catch (error) {
        next(error);
    }
});

// Actualizar usuario
routerUsers.patch("/:id", validatorHandler(getUserSchema, "params"), validatorHandler(updateUserSchema, "body"), async (req, res, next) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const userUpdate = await service.update(id, datas);

        res.status(201).json({
            message: "User updated",
            userUpdate
        });
    } catch (error) {
        next(error);
    }
});

// Eliminar usuario.
routerUsers.delete("/:id", validatorHandler(getUserSchema, "params"), async (req, res, next) => {
    const { id } = req.params;

    try {
        const userDelete = await service.delete(id);

        res.status(201).json({
            message: "User deleted",
            userDelete
        });
    } catch (error) {
        next(error);
    }
});

module.exports = routerUsers;
