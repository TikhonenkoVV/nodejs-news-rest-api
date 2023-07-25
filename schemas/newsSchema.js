const joi = require("joi");

const toggleFavoriteSchema = joi.object({
    favorite: joi.boolean().required(),
});

module.exports = { toggleFavoriteSchema };
