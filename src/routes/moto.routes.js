const { Router } = require('express')
const router=Router();
const controladormotos = require("../controllers/moto.controllers")

router.get('/registro', controladormotos.obtenermoto)
router.post('/insertar', controladormotos.insertarmoto)
module.exports = router