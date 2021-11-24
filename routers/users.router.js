const express = require("express");
const faker = require("faker");

const routerUsers = express.Router();

// Todos los usuarios.
routerUsers.get("/", (req, res) => {
    const { limit } = req.query;
    const size = limit || 20;
    const users = [];

    for (let i = 0; i < size; i++) {
        users.push({
            id: faker.datatype.uuid(),
            name: faker.name.findName(),
            gender: faker.name.gender(),
            email: faker.internet.email()
        });
    }

    res.status(200).json(users);
});

// Usuario por id.
routerUsers.get("/:id", (req, res) => {
    const { id } = req.params;

    res.status(200).json({
        id,
        name: faker.name.findName(),
        gender: faker.name.gender(),
        email: faker.internet.email()
    });
});

// Crear Usuario
routerUsers.post("/", (req, res) => {
    const datas = req.body;

    res.status(201).json({
        message: "User created",
        id: faker.datatype.uuid(),
        datas
    });
});

// Actualizar usuario
routerUsers.patch("/:id", (req, res) => {
    const { id } = req.params;
    const datas = req.body;

    res.status(201).json({
        message: "User updated",
        id,
        datas
    });
});

// Eliminar usuario.
routerUsers.delete("/:id", (req, res) => {
    const { id } = req.params;

    res.status(201).json({
        id,
        message: "User deleted"
    });
});

module.exports = routerUsers;
