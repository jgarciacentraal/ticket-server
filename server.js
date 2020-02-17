require('./server/config/config')

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        Name: "Api restful with node and mongoDB"
    })
})

const ticketRoutes = require('./server/routes/ticket.routes')
app.use('/tickets', ticketRoutes)



//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27018/users',{ useUnifiedTopology: true,  useNewUrlParser: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB Connection established succesfully')
})

//LocalHost -- server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${process.env.PORT}`)
})