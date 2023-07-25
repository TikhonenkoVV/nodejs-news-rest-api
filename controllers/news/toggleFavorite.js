const News = require("../../models/news");
const { RequestError } = require("../../helpers");

const toggleFavorite = async (req, res) => {
    const { newsId } = req.params;
    const result = await News.findByIdAndUpdate(newsId, req.body, {
        new: true,
    });
    if (!result) throw RequestError(404, "Not Found");
    res.json(result);
};

module.exports = toggleFavorite;
