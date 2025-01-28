import express from "express";
import dbConnect from "./config/db.js";
import routes from "./routes/index.js";

const connection = await dbConnect();

connection.on("error", (e) => {
  console.error("erro de conexão", e.message);
});

connection.once("open", () => {
  console.log("Conectado com o banco de dados");
})

const app = express();
routes(app);

export default app;