const { Router } = require('express')
const router=Router();
const controladorclientes = require("../controllers/empleado.controllers")


router.get('/', controladorclientes.obtenerEmpleados)
router.post('/insertar', controladorclientes.insertarEmpleado)
router.get('/registro',controladorclientes.obtenerEmpleado)
module.exports = router