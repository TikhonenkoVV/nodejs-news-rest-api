const joi = require("joi");
const { emailRegex, passwordRegex } = require("./patterns");

const signUpSchema = joi.object({
    name: joi.string().required(),
    email: joi
        .string()
        .regex(emailRegex.pattern)
        .required()
        .messages({ "string.pattern.base": emailRegex.message }),
    password: joi
        .string()
        .regex(passwordRegex.pattern)
        .required()
        .messages({ "string.pattern.base": passwordRegex.message }),
});

const signInSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
});

module.exports = {
    signUpSchema,
    signInSchema,
};
