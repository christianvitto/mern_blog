import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
    {
        title: { type: String },
        comments: []
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model('Article', articleSchema);
export default Article;