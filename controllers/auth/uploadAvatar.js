const User = require("../../models/user");
const { RequestError, createAvatar } = require("../../helpers");

const uploadAvatar = async (req, res) => {
    if (!req.file) {
        throw RequestError(400, "File is requred");
    }
    const { filename } = req.file;
    const { _id } = req.user;

    const split = filename.split(".");
    const fileExt = split[split.length - 1];
    const fileNameLarge = `${_id}.${fileExt}`;
    const fileNameSmall = `${_id}_small.${fileExt}`;

    await createAvatar(filename, fileNameLarge, fileNameSmall);

    const avatarURL = `avatars/${fileNameLarge}`;
    const avatarURLsmall = `avatars/${fileNameSmall}`;
    const user = await User.findByIdAndUpdate(
        _id,
        {
            avatarURL,
            avatarURLsmall,
        },
        { new: true }
    );

    return res.json({
        avatarURL: user.avatarURL,
        avatarURLsmall: user.avatarURLsmall,
    });
};

module.exports = uploadAvatar;
