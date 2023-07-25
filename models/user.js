const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Set user name"],
        },
        password: {
            type: String,
            required: [true, "Set password for user"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        token: String,
        avatarURL: { type: String, default: "" },
        avatarURLsmall: { type: String, default: "" },
    },
    { versionKey: false, timestamps: true }
);

const User = model("users", userSchema);

module.exports = User;
