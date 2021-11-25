const express = require("express");
const UserService = require("../services/users.service");
const routerUsers = express.Router();

// Instab¡ncia del servicio.
const service = new UserService();

// Todos los usuarios.
routerUsers.get("/", (req, res) => {
    const users = service.getAll();
    res.status(200).json(users);
});

// Usuario por id.
routerUsers.get("/:id", (req, res) => {
    const { id } = req.params;
    const user = service.getOne(id);
    res.status(200).json(user);
});

// Crear Usuario
routerUsers.post("/", (req, res) => {
    const datas = req.body;
    const userCreate = service.create(datas);

    res.status(201).json({
        message: "User created",
        userCreate
    });
});

// Actualizar usuario
routerUsers.patch("/:id", (req, res) => {
    const { id } = req.params;
    const datas = req.body;
    const userUpdate = service.update(id, datas);

    res.status(201).json({
        message: "User updated",
        userUpdate
    });
});

// Eliminar usuario.
routerUsers.delete("/:id", (req, res) => {
    const { id } = req.params;
    const userDelete = service.delete(id);

    res.status(201).json({
        message: "User deleted",
        userDelete
    });
});

module.exports = routerUsers;
