const express = require("express");
const controllWrapper = require("../../helpers/ctrlWrapper");
const newsCtrl = require("../../controllers/news");
const { auth, validateBody } = require("../../middlewares");
const schema = require("../../schemas/newsSchema");

const router = express.Router();

router.get("/", controllWrapper(auth), controllWrapper(newsCtrl.getAll));

router.post("/", controllWrapper(auth), controllWrapper(newsCtrl.addNews));

router.patch(
    "/:newsId/favorite",
    controllWrapper(auth),
    validateBody(schema.toggleFavoriteSchema),
    controllWrapper(newsCtrl.toggleFavorite)
);

module.exports = router;
