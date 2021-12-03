const express = require('express');

const router = express.Router();

const especieControllers = require('../controllers/especieController');


router.get('/especie',especieControllers.index);
router.get('/especie/:id', especieControllers.show);
router.post('/especie', especieControllers.create);
router.put('/especie/:codigo', especieControllers.update);
router.delete('/especie/:codigo', especieControllers.delete);

module.exports = router;
