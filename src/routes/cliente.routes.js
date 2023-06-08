const { Router } = require('express')
const router=Router();
const controladorclientes = require("../controllers/cliente.controllers")


router.get('/', controladorclientes.obtenerclientes)
router.post('/insertar', controladorclientes.insertarcliente)
router.get('/:correo',controladorclientes.obtenerCliente)
module.exports = router