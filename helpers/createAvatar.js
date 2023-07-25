const path = require("path");
const fs = require("fs/promises");
const jimp = require("jimp");

const createAvatar = async (file, newFile, newFileSmall) => {
    const tmpFile = path.resolve(__dirname, "../tmp", file);
    const publicFile = path.resolve(__dirname, "../public/avatars", newFile);
    const publicFileSmall = path.resolve(
        __dirname,
        "../public/avatars",
        newFileSmall
    );
    try {
        await fs.copyFile(tmpFile, publicFile);
        await fs.rename(tmpFile, publicFileSmall);
    } catch (error) {
        await fs.unlink(tmpFile);
        throw error;
    }
    (await jimp.read(publicFile)).cover(250, 250).write(publicFile);
    (await jimp.read(publicFileSmall)).cover(64, 64).write(publicFileSmall);
};

module.exports = createAvatar;
