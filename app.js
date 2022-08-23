// Se declara express para poder levantar el servicio web y cors le dice a la app que use cors
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const Connection = require('./config/connection');
// const { associations } = require('./config/associations')

// routes
const EmployeesRoutes = require('./routes/employees.routes');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// se crea lo que es el puerto para la variable de entorno

// routes for postman o insomnia
app.use('/employees', EmployeesRoutes);

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
