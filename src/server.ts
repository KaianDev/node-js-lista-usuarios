import express from "express";
import path from "path";
import dotenv from "dotenv";
import mustache from "mustache-express";
import cors from "cors";

import mainRouter from "./routes/index";
import userRouter from "./routes/users";

dotenv.config();

const server = express();

server.use(cors());

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views"));
server.engine("mustache", mustache());

console.log(path.join(__dirname, "/views"));

server.use(express.static(path.join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(mainRouter);
server.use("/api", userRouter);

server.listen(process.env.PORT, () =>
    console.log(`Rodando na porta ${process.env.PORT}`)
);
