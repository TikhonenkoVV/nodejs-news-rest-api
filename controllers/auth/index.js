const signUp = require("./signUp");
const signIn = require("./signIn");
const signOut = require("./signOut");
const uploadAvatar = require("./uploadAvatar");
const getCurrentUser = require("./getCurrent");
const refreshTokens = require("./refreshToken");
const updateTheme = require("./updateTheme");

module.exports = {
    signUp,
    signIn,
    signOut,
    uploadAvatar,
    getCurrentUser,
    refreshTokens,
    updateTheme,
};
