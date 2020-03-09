const router = require('express').Router()
const Ticket = require('../models/ticket.model')


//Getting all tickets
router.get('/', async (req, res) => {
    try {
        let ticket = await Ticket.find()
        res.json(ticket)
    } catch (error) {
        res.status(500).json({ message: error.message })
       }
})


// // Create ticket 
// router.post('/', async (req, res) => {
//     let ticket = new Ticket({
//         user_id: req.body.user_id,
//         title: req.body.title,
//         message: req.body.message
//         // ans: req.body.ans
//      })

//      try {
//          const newticket = await ticket.save()
//          res.status(200).json(newticket)
//      } catch (error) {
//         res.status(500).json({ message: error.message })
//      }
// })

router.post('/', async (req, res) => {
    try {
        const { user_id, title, message } = req.body
        const ticket = new Ticket({ user_id, title, message })
        await ticket.save()
        res.json({ status: 'Ticket saved' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


//Gettint Ticket by ID
router.get('/:id', async (req, res) => {
    try {
        let ticket = await Ticket.findById(req.params.id)
        res.status(200).json(ticket)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


//Update ticket by Id
router.put('/:id',async (req, res) => {

    if (!req.body.user_id && !req.body.title && !req.body.message) {
        return res.status(400).send({
            message: 'Ticket content can not be empty'
        })
    }

    try {
        let updateticket = await Ticket.findByIdAndUpdate(req.params.id, {
            user_id: req.body.user_id,
            title: req.body.title,
            message: req.body.message
        }, { new: true })
        res.status(200).json(updateticket)
    } catch (error) {
        res.status(400).send({message: error.message})
    }

 })

// Delete ticket by Id
router.delete('/:id', async (req, res) => {

    try {
        await Ticket.findByIdAndRemove(req.params.id)
        res.send({ message: 'Ticket delete successfully' })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})


module.exports = router;