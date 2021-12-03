const express = require('express');

const router = express.Router();

const produtoControllers = require('../controllers/produtoController');


router.get('/produto',produtoControllers.index);
router.get('/produto/:id', produtoControllers.show);
router.post('/produto', produtoControllers.create);
router.put('/produto/:codigo', produtoControllers.update);
router.delete('/produto/:codigo', produtoControllers.delete);

module.exports = router;