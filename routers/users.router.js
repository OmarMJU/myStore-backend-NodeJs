const express = require("express");
const routerUsers = express.Router();

/* Endpoints users */
routerUsers.get("/", (req, res) => {
    const { limit, offset} = req.query;

    if (limit && offset) {
        res.json({
            limit: limit,
            offset: offset
        });
    } else {
        res.json([
            { name: "Daniela", lastName: "Zamudio", age: "30", mail: "danni_zam@mail.com" },
            { name: "Manoli", lastName: "Hernandez", age: "35", mail: "mano_her35@mail.com" },
            { name: "Pamela", lastName: "Rosas", age: "52", mail: "pam.rosas@mail.com" },
            { name: "Janneth", lastName: "Carmona", age: "45", mail: "jan-car@mail.com" }
        ]);
    }
});

routerUsers.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "Daniela",
        lastName: "Zamudio",
        age: "30",
        mail: "danni_zam@mail.com"
    });
});

routerUsers.get("/:id/shopping", (req, res) => {
    const { id } = req.params;
    res.json({
        idUser: id,
        shopping: [
            { name: "Micoblading", price: 2500, date: "14/10/2021" },
            { name: "Facial", price: 300, date: "05/11/2021" }
        ]
    });
});

routerUsers.get("/:idUser/shopping/:idShop", (req, res) => {
    const { idUser, idShop } = req.params;
    res.json({
        idUser,
        idShop,
        shop: { name: "Micoblading", price: 2500, date: "14/10/2021" }
    });
});

module.exports = routerUsers;
