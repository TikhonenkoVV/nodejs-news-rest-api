const path = require("path");
const fs = require("fs/promises");
const cloudinary = require("cloudinary").v2;

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } =
    process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY,
});

const createAvatar = async (file, _id) => {
    const tmpFile = path.resolve(__dirname, "../tmp", file);
    const data = { avatarURL: "", avatarURLsmall: "" };
    try {
        await cloudinary.uploader
            .upload(tmpFile, {
                public_id: `bitenews/${_id}`,
                transformation: { width: 250, crop: "pad" },
            })
            .then((res) => (data.avatarURL = res.url));
        await cloudinary.uploader
            .upload(tmpFile, {
                public_id: `bitenews/${_id}_small`,
                transformation: { width: 64, crop: "pad" },
            })
            .then((res) => (data.avatarURLsmall = res.url));
        await fs.unlink(tmpFile);
        return data;
    } catch (error) {
        await fs.unlink(tmpFile);
        throw error;
    }
};

module.exports = createAvatar;
