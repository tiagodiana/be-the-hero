const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
/* 
    Rotas / Recurso
*/

/* 
    Métodos HTTP:
    GET: Buscar um informação do back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/* 
    Tipos de parâmetros:

    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) 
    Route Params: Parâmetros utilizados para indentificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/



app.listen(3333)

