const Token = require("../../models/token");

const signOut = async (req, res) => {
    const { user } = req;
    await Token.findOneAndDelete(user.id);

    res.status(204).json({ message: "No Content" });
};

module.exports = signOut;
