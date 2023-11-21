const { RequestError } = require("../../helpers");
const News = require("../../models/news");

const findNewsById = async (req, res) => {
    const { newsId } = req.params;
    const result = await News.findById(newsId);
    if (!result) throw RequestError(404, "Not found");
    res.json(result);
};

module.exports = findNewsById;
