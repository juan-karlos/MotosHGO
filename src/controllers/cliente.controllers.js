const pool = require('../database')
const controladorclientes = {}

controladorclientes.obtenerclientes = async (req, res) => {
    const [rows]=await pool.query('SELECT * FROM Cliente');
    // res.json(rows);
    res.render('index')
}

controladorclientes.insertarcliente = async (req, res)=>{
    
    const {Nombre, Apellidos,Direccion,Fecha_nacimiento,Telefono,correo, Contraseña} = req.body
    const [rows] = await pool.query('INSERT INTO Cliente VALUES(?,?,?,?,?,?,?)', [Nombre, Apellidos,Direccion,Fecha_nacimiento,Telefono,correo,Contraseña])
    
    res.send({
        correo:rows.correo,
        Nombre,
        Apellidos,
        Direccion,
        Fecha_nacimiento,
        Telefono,
        Contraseña
        
    },res.render('index'))
    
}
controladorclientes.obtenerCliente=async(req,res)=>{
    const correo = req.params.correo
    const [row]=await pool.query('SELECT * FROM Cliente WHERE correo=?', [correo])
    res.send(row)
}

module.exports = controladorclientes