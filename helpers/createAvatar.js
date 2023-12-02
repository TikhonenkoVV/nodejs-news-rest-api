const cloudinary = require("cloudinary").v2;

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_SECRET_KEY } =
    process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_SECRET_KEY,
});

const createAvatar = async (file, _id) => {
    const data = { avatarURL: "", avatarURLsmall: "" };
    try {
        await cloudinary.uploader
            .upload(file, {
                public_id: `bitenews/avatars/${_id}`,
                transformation: { width: 250, crop: "pad" },
            })
            .then((res) => (data.avatarURL = res.secure_url));
        await cloudinary.uploader
            .upload(file, {
                public_id: `bitenews/avatars/${_id}_small`,
                transformation: { width: 64, crop: "pad" },
            })
            .then((res) => (data.avatarURLsmall = res.secure_url));
        return data;
    } catch (error) {
        throw error;
    }
};

module.exports = createAvatar;
