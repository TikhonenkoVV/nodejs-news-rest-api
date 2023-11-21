const News = require("../../models/news");

const getAll = async (req, res) => {
    const { _id: owner } = req.user;
    const { favorite = [true, false], readed = [true, false] } = req.query;
    const result = await News.find({ owner, favorite, readed }, "-owner");

    res.json(result);
};

module.exports = getAll;
