const User = require("../../models/user");
const { createAvatar, RequestError } = require("../../helpers");

const uploadAvatar = async (req, res) => {
    const { avatar } = req.body;
    const { _id } = req.user;
    if (!avatar) {
        throw RequestError(409, "Avatar is required");
    }

    const data = await createAvatar(avatar, _id);

    const user = await User.findByIdAndUpdate(_id, data, { new: true });

    return res.json({
        avatarURL: user.avatarURL,
        avatarURLsmall: user.avatarURLsmall,
    });
};

module.exports = uploadAvatar;
