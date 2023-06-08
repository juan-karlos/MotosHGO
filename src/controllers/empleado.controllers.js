const pool = require('../database')
const controladorclientes = {}

controladorclientes.obtenerEmpleados = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM Empleado');
    // res.json(rows);
    res.render('inicio_admin')
}

controladorclientes.insertarEmpleado = async (req, res)=>{
    
    const {Sucursal,Id_Empleado,Nombre,Apellidos,Direccion,Fecha_nacimiento,Telefono,Correo, Contraseña} = req.body
    const [rows] = await pool.query('INSERT INTO Cliente VALUES(?,?,?,?,?,?,?)', [Sucursal,Id_Empleado,Nombre, Apellidos,Direccion,Fecha_nacimiento,Telefono,Correo,Contraseña])
    
    res.send({
        Id_Empleado:rows.Id_Empleado,
        Sucursal,
        Nombre,
        Apellidos,
        Direccion,
        Fecha_nacimiento,
        Telefono,
        Contraseña,
        Correo,
        
    },res.render('index'))
    
}
controladorclientes.obtenerEmpleado=async(req,res)=>{
    const [rows]=await pool.query('SELECT * FROM Empleado');
    // res.json(rows);
    res.render('menu')
    
}

module.exports = controladorclientes