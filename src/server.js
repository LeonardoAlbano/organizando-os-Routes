// Importa o framework Express, que é utilizado para facilitar a criação de servidores web em Node.js.
const express = require("express");

// Importa as rotas definidas no arquivo routes.js.
const routes = require("./routes");

// Cria uma instância do aplicativo Express.
const app = express();

// Middleware para interpretar o corpo das requisições como JSON.
app.use(express.json());

// Aplica as rotas importadas ao aplicativo.
app.use(routes);

// Define a porta em que o servidor vai escutar as requisições. Neste caso, a porta é 3333.
const PORT = 3333;

// Inicia o servidor na porta especificada e exibe uma mensagem no console quando o servidor estiver rodando.
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
