const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class CreditCardService {
    async getCreditCards(userId, numCard) {
        const options = {
            where: {
                userId: userId
            }
        };

        if (numCard) {
            options.where.id = numCard;
        }

        const creditCards = await models.CreditCard.findAll(options);

        if (!creditCards || creditCards.length === 0) {
            throw boom.notFound("Credit card not found.");
        }

        return creditCards;
    }

    async createCreditCard(datas) {
        const newCard = await models.CreditCard.create(datas);
        return newCard;
    }

    async updateCreditCard(userId, numCard, datas) {
        const creditCards = await this.getCreditCards(userId, numCard);
        const creditCardUpdate = await creditCards[0].update(datas);
        return creditCardUpdate;
    }

    async deleteCreditCard(userId, numCard) {
        const creditCards = await this.getCreditCards(userId, numCard);
        await creditCards[0].destroy();
        return {
            userId,
            numCard
        };
    }
}

module.exports = CreditCardService;
