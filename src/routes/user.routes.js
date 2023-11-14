// Importa o módulo Router do Express, que permite a criação de rotas.
const { Router } = require("express");

// Cria uma instância do Router para definir as rotas relacionadas aos usuários.
const userRoutes = Router();

// Define uma rota que responde a requisições HTTP do tipo POST no caminho "/".
userRoutes.post("/", (request, response) => {
    // Extrai os dados do corpo da requisição, que são esperados estar no formato JSON.
    const { name, email, password } = request.body;

    // Retorna os dados recebidos como resposta no formato JSON.
    response.json({ name, email, password });
});

// Exporta as rotas definidas para que possam ser usadas em outros lugares do aplicativo.
module.exports = userRoutes;
