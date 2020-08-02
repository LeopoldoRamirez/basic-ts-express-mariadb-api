import express from "express";
import morgan from "morgan";
import router from "./routes/index.router";

import { appPort } from "./config";

import "./database";


export const init = async() => {
    const app = express();

    //configure middlewares
    app.use( express.json() );
    app.use( express.urlencoded({ extended: false}) );
    app.use( morgan('dev') );

    //configure routes
    app.use( router );


    app.listen( appPort );
    console.log(`Welcome to API Node.js, Express, TypeScript and TypeORM ,Listening on port ${appPort}`);
}
