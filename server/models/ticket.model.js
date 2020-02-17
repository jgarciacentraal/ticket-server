const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ticketSchema = new Schema({
    user_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        require: true
    },
    ans: {
        type: String
    }
})

module.exports = mongoose.model('Ticket', ticketSchema)