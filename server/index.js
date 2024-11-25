import express from 'express';
import mongoose from 'mongoose';

import articleRouter from './routes/article.routes.js';

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1/mern_app').then(() => {
    console.log('Connected to db');
}).catch((err) => {
    console.log(err.message);
});

app.use('/api', articleRouter);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
    if (error) {
        res.status(500).send("Error occurred, server can't start");
    }

    console.log(`Server is running at http://localhost:${PORT}`);
})