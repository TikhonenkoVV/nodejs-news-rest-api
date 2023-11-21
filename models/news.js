const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
    {
        title: String,
        abstract: String,
        section: String,
        url: String,
        imgUrl: String,
        published_date: String,
        readed: { type: Boolean, default: false },
        favorite: { type: Boolean, default: false },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { versionKey: false, timestamps: { createdAt: true, updatedAt: false } }
);

const News = model("news", newsSchema);

module.exports = News;
