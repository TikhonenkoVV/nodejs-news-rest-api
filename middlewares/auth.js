const { RequestError } = require("../helpers");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { JWT_SECRET } = process.env;

const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
        throw RequestError(401, "Unsupported token type");
    }
    if (!token) {
        throw RequestError(401, "No token provided");
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(payload.userId);
        req.user = user;
    } catch (error) {
        if (
            error.name === "TokenExpiredError" ||
            error.name === "JsonWebTokenError"
        ) {
            throw RequestError(401, "Not authorized");
        }
        throw error;
    }
    next();
};

module.exports = auth;
