const User = require("../../models/user");
const { RequestError, createAvatar } = require("../../helpers");

const uploadAvatar = async (req, res) => {
    if (!req.file) {
        throw RequestError(400, "File is requred");
    }
    const { filename } = req.file;
    const { _id } = req.user;

    const data = await createAvatar(filename, _id);

    const user = await User.findByIdAndUpdate(_id, data, { new: true });

    return res.json({
        avatarURL: user.avatarURL,
        avatarURLsmall: user.avatarURLsmall,
    });
};

module.exports = uploadAvatar;
