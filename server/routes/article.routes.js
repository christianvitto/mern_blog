import express from 'express';

import {
    addComments,
    createArticles,
    getArticles,
    getComments,
} from '../controller/article.controller.js';

const articleRouter = express.Router();

articleRouter.get('/articles/:name/', getArticles);
articleRouter.get('/articles/:name/comments', getComments);
articleRouter.post('/articles/:name/add-comments', addComments);
articleRouter.post('/articles/seed', createArticles);

export default articleRouter;