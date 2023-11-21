const { RequestError } = require("../../helpers");

const getCurrentUser = async (req, res) => {
    const { user } = req;
    if (!user) {
        throw RequestError(404, "User not found");
    }
    res.json({ email: user.email, subscription: user.subscription });
};

module.exports = getCurrentUser;
