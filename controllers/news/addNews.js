const News = require("../../models/news");

const addNews = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await News.create({ ...req.body, owner });
    res.status(201).json(result);
};

module.exports = addNews;
