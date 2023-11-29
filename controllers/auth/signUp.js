const { RequestError, sendEmail } = require("../../helpers");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
    const { name, email, password, theme } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
        throw RequestError(409, "Email is already in use");
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = await User.create({
        name,
        email,
        password: hashedPassword,
        avatarURL: "",
        avatarURLsmall: "",
        theme,
    });

    res.status(201).json({
        user: {
            name: result.name,
            email: result.email,
        },
    });
};

module.exports = signUp;
