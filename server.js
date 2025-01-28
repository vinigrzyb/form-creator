import "dotenv/config";
import app from "./backend/app.js";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});