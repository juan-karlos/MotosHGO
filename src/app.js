const express = require('express')
const morgan = require('morgan')
const app = express()




//Settings
app.set('port', process.env.PORT || 3000)

app.set('view engine','ejs') 

//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

// app.use('/api/sucursal', require('./routes/sucursal.routes'));
app.use('/api/moto', require('./routes/moto.routes'));
app.use('/api/cliente', require('./routes/cliente.routes'));
app.use('/appi/empleado',require('./routes/empleado.routes'))
// app.use('/api/proveedor', require('./routes/proveedor.routes'));
// app.use('/api/producto_adi', require('./routes/producto_adi.routes'));
// app.use('/api/Pedidos', require('./routes/pedidos.routes'));





module.exports = app