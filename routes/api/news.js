const express = require("express");
const controllWrapper = require("../../helpers/ctrlWrapper");
const newsCtrl = require("../../controllers/news");
const { auth, validateBody } = require("../../middlewares");
const schema = require("../../schemas/newsSchema");

const router = express.Router();

router.get("/", controllWrapper(auth), controllWrapper(newsCtrl.getAll));

router.get(
    "/:newsId",
    controllWrapper(auth),
    controllWrapper(newsCtrl.findNewsById)
);

router.post("/", controllWrapper(auth), controllWrapper(newsCtrl.addNews));

router.patch(
    "/favorite/:newsId",
    controllWrapper(auth),
    validateBody(schema.toggleFavoriteSchema),
    controllWrapper(newsCtrl.toggleFavorite)
);

router.delete(
    "/:newsId",
    controllWrapper(auth),
    controllWrapper(newsCtrl.deleteNews)
);

module.exports = router;
