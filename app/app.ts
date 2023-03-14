import express from 'express';

export const startServer = () => {

    const app = express();
    const {PORT} = process.env;

    app.listen(
        PORT,
        () => console.log(`SERVER IS LISTENING ON ${PORT}`)
    )
}