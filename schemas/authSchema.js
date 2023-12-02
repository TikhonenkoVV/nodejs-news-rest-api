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
    theme: joi.string(),
});

const signInSchema = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
});

const updThemeSchema = joi.object({
    theme: joi.string().required(),
});

module.exports = {
    signUpSchema,
    signInSchema,
    updThemeSchema,
};
