const News = require("../../models/news");

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 5, favorite } = req.query;
    const skip = (page - 1) * limit;
    const result = await News.find({ owner }, "-createdAt -updatedAt -owner", {
        skip,
        limit,
    });

    res.json(result);
};

module.exports = getAll;
