const router = require('express').Router()
const Ticket = require('../models/ticket.model')

//Getting all tickets
router.get('/', async (req, res) => {
    try {
        let ticket = await Ticket.find()
        res.json(ticket)
    } catch (error) {
        res.status(500).json({ message: err.message })
       }
})

router.post('/', async (req, res) => {
    let ticket = new Ticket({
        user_id: req.body.user_id,
        title: req.body.title,
        message: req.body.message,
        ans: req.body.ans
     })

     try {
         const newticket = await ticket.save()
         res.status(200).json(newticket)
     } catch (error) {
        res.status(500).json({ message: err.message })
     }
})


module.exports = router;