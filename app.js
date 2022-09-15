// Se declara express para poder levantar el servicio web y cors le dice a la app que use cors
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const Connection = require('./config/connection');
// const { associations } = require('./config/associations')

// routes
const PersonaRoutes = require('./routes/persona');
const ProductoRoutes = require('./routes/producto');
const PrecioRoutes = require('./routes/precio');
const AlmacenRoutes = require('./routes/almacen');
const AlmacenInvRoutes = require('./routes/almacenInv');
const CategoriaRoutes = require('./routes/categoria');
const MetodoPagoRoutes = require('./routes/metodoPago');
const PermisoRoutes = require('./routes/permiso');
const ProveedorRoutes = require('./routes/proveedor');
const RolRoutes = require('./routes/rol');
const UsuarioRoutes = require('./routes/usuario');


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// se crea lo que es el puerto para la variable de entorno

// routes for postman o insomnia
app.use('/persona', PersonaRoutes);
app.use('/producto', ProductoRoutes);
app.use('/precio', PrecioRoutes);
app.use('/almacen', AlmacenRoutes);
app.use('/almacenInv', AlmacenInvRoutes);
app.use('/categoria', CategoriaRoutes);
app.use('/metodopago', MetodoPagoRoutes);
app.use('/permiso', PermisoRoutes);
app.use('/proveedor',ProveedorRoutes);
app.use('/rol',RolRoutes);
app.use('/usuario',UsuarioRoutes);

const port = process.env.PORT || 3001;
// comienza a escuchar por el puerto 3000 y devuelve el sms

app.get('/', (req, res) => {
  res.send('Up and running');
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  const connection = new Connection();
  connection.sequelize
    .authenticate()
    .then(() => {
      console.log('Database connected');
      // associations().then(() => {
      //     console.log('Models associated')
      // })
    })
    .catch((error) => console.error(error));
});
