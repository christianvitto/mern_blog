import Article from '../model/articleModel.js'
import { createArticle } from '../utils/data.js';

export const addComments = async (req, res) => {
    const { name: articleName } = req.params;
    const article = await Article.findOne({ title: articleName });

    if (!article) res.status(500).send("No article found!");

    try {
        const { username, text } = req.body;

        article.comments.push({ username, text });
        await article.save();

        console.log(article);

        res.status(200).send({ article });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createArticles = async (req, res) => {
    try {
        const createdArticles = await Article.insertMany(createArticle);

        console.log('Articles Created!');
        res.status(201).send({ createdArticles });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export const getArticles = async (req, res) => {
    try {
        const { name: articleName } = req.params;
        const article = await Article.find({ title: articleName });

        if (!article) res.status(500).send("No article found!");

        res.status(200).send({ article });
    } catch (error) {
        res.status(500).send(error);
    }

}

export const getComments = async (req, res) => {
    const { name: articleName } = req.params;

    try {
        const article = await Article.find({ title: articleName });

        res.status(200).send(article);
    } catch (error) {
        res.status(500).send(error);
    }
}