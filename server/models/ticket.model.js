const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ticketSchema = new Schema({
    user_id: Number,
    title: String,
    message: String,
    ans: String || 'unanswered ticket'
})

module.exports = mongoose.model('Ticket', ticketSchema)