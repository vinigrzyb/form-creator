import "dotenv/config";
import app from "./backend/app.js";
import cors from "cors";

//habilista o cors pro frontend
app.use(cors({
  origin: 'http://localhost:3001/', // Substitua pela origem correta do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});