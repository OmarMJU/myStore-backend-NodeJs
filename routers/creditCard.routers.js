const express = require("express");
const CreditCardService = require("../services/creditCard.service");
const validatorHandler = require("../middlewares/validatorHandler");
const { getCreditCardSchema, createCreditCardSchema, updateCreditCardSchema, getNumberCreditCardSchema } = require("../schemas/creditCardDTO");

const cardsRouter = express.Router();
const service = new CreditCardService();

cardsRouter.get("/:idUser", validatorHandler(getCreditCardSchema, "params"), validatorHandler(getNumberCreditCardSchema, "query"), async (req, res, next) => {
    const { idUser } = req.params;
    const { numCard } = req.query;

    try {
        const creditCard = await service.getCreditCards(idUser, numCard);
        res.status(200).json(creditCard);
    } catch (error) {
        next(error);
    }
});

cardsRouter.post("/", validatorHandler(createCreditCardSchema, "body"), async (req, res, next) => {
    const datas = req.body;

    try {
        const creditCard = await service.createCreditCard(datas);
        res.status(201).json({
            message: "Credit card create.",
            creditCard
        });
    } catch (error) {
        next(error);
    }
});

cardsRouter.patch("/:idUser", validatorHandler(getCreditCardSchema, "params"), validatorHandler(updateCreditCardSchema, "body"), async (req, res, next) => {
    const { idUser } = req.params;
    const datas = req.body;

    try {
        const creditCard = await service.updateCreditCard(idUser, datas);
        res.status(201).json({
            message: "Credit card updated.",
            creditCard
        });
    } catch (error) {
        next(error);
    }
});

cardsRouter.delete("/:idUser", validatorHandler(getCreditCardSchema, "params"), validatorHandler(getNumberCreditCardSchema), async (req, res, next) => {
    const { idUser } = req.params;
    const datas = req.body;

    try {
        const cardDelete = await service.deleteCreditCard(idUser, datas);
        res.status(201).json({
            message: "Credit card deleted.",
            cardDelete
        });
    } catch (error) {
        next(error);
    }
});

module.exports = cardsRouter;
