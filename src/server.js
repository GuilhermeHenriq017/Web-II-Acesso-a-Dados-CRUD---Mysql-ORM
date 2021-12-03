const express = require('express');
const cors = require('cors');

const routerEspecie = require('./api/routes/especieRoutes.js');
const routerProduto = require('./api/routes/produtoRoutes.js');

require('./database/indexDB.js');

const app = express();
app.use(cors());

app.use(express.json());

app.use(routerEspecie);
app.use(routerProduto);

app.listen(3333);
