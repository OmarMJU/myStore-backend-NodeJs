const express = require("express");
const UserService = require("../services/users.service");
const routerUsers = express.Router();

// Instab¡ncia del servicio.
const service = new UserService();

// Todos los usuarios.
routerUsers.get("/", async (req, res) => {
    const users = await service.getAll();
    res.status(200).json(users);
});

// Usuario por id.
routerUsers.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const user = await service.getOne(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({
            error: "Error to get user",
            message: error
        });
    }
});

// Crear Usuario
routerUsers.post("/", async (req, res) => {
    const datas = req.body;
    const userCreate = await service.create(datas);

    res.status(201).json({
        message: "User created",
        userCreate
    });
});

// Actualizar usuario
routerUsers.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const datas = req.body;

    try {
        const userUpdate = await service.update(id, datas);

        res.status(201).json({
            message: "User updated",
            userUpdate
        });
    } catch (error) {
        res.status(404).json({
            error: "Error to update user",
            message: error
        });
    }
});

// Eliminar usuario.
routerUsers.delete("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const userDelete = await service.delete(id);

        res.status(201).json({
            message: "User deleted",
            userDelete
        });
    } catch (error) {
        res.status(404).json({
            error: "Error to delete user",
            message: error
        });
    }
});

module.exports = routerUsers;
