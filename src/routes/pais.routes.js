const express = require('express');
const router = express.Router();
const paisController = require('../controllers/pais.controller');
router.post('/',paisController.crear);
router.get('/',paisController.listar);
router.get('/:id',paisController.ObtenerUno);
router.put('/:id',paisController.actualizar);
router.delete('/:id',paisController.eliminar);
module.exports = router;