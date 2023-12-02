const { RequestError } = require("../../helpers");
const User = require("../../models/user");

const updateTheme = async (req, res) => {
    const { theme } = req.body;
    const { _id } = req.user;
    if (!theme) {
        throw RequestError(409, "Theme is required");
    }

    const user = await User.findByIdAndUpdate(_id, { theme }, { new: true });

    return res.json({
        theme: user.theme,
    });
};

module.exports = updateTheme;
