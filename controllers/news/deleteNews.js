const News = require("../../models/news");
const { RequestError } = require("../../helpers");

const deleteNews = async (req, res) => {
    const { newsId } = req.params;
    const result = await News.findByIdAndRemove({ _id: newsId });
    if (!result) throw RequestError(404, "Not found");
    res.json({ message: "News deleted successful" });
};

module.exports = deleteNews;
