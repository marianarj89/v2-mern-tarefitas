const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')	

require('dotenv').config()

const routes = require('./routes/RotasTarefitas')

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Conectado ao MongoDB!'))
    .catch((error) => console.log(error))

    app.use(routes)

app.listen(PORT, () => console.log(`Servidor iniciado na prota: ${PORT}!`))
