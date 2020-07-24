import express from "express";
import morgan from "morgan";

import "./database";

import productRouter from "./routes/product.routes";

export const init = async() => {
    const app = express();

    //configure middlewares
    app.use( express.json() );
    app.use( express.urlencoded({ extended: false}) );
    app.use( morgan('dev') );

    //configure routes
    app.use( productRouter );


    app.listen(3000);
    console.log('Welcome to API Node.js, Express, TypeScript and TypeORM ,Listening on port 3000');
}
