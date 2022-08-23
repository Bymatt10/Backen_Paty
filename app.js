// Se declara express para poder levantar el servicio web y cors le dice a la app que use cors
const env = require("dotenv").config()
const  express = require('express')
const cors = require('cors')
const  app = express()

app.use(cors())
//se crea lo que es el puerto para la variable de entorno

const  port= process.env.PORT || 30001
//comienza a escuchar por el puerto 3000 y devuelve el sms
app.listen(port, () =>{
    console.log(`Server un on ${port}`)
})