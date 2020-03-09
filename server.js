require('./server/config/config')

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')



const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.get('/', (req, res) => {
    res.json({
        Name: "Api restful with node and mongoDB"
    })
})

const ticketRoutes = require('./server/routes/ticket.routes')
app.use('/api/tickets', ticketRoutes)



//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27018/ticketsversion',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB Connection established succesfully')
})

//LocalHost -- server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})