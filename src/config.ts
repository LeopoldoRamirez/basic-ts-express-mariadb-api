import dotenv from "dotenv";

dotenv.config();

export const appPort = process.env.APPLICATION_PORT || 8080;

