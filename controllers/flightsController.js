const express = require('express')
const router = express.Router()
const Flight = require('../models/flight')
// const Destination = require('./models/destination')


// ------------------- SEED ROUTE ---------------------
// no seed route


// ------------------- INDEX (GET) ---------------------
// ready to send off to controller
router.get('/', async (req,res) =>{
  
    try {
      const foundFlight = await Flight.find({})
        res.status(200).render('flights/Index',{ flights:foundFlight })
  
    } catch (error) {
        res.status(400).send(error)
    }
  })
  
  
  
  
  // ------------------- NEW (GET) ---------------------
  // ready to send off to controller
  router.get('/new',(req,res) => {
    res.render('flights/New')
  })
  
  
  
  
  
  
  // --------------------- DELETE (DELETE) --------------------
  router.delete('/:id',async (req,res) =>{
    try {
      await Flight.findByIdAndDelete(req.params.id);
      res.status(200).redirect('/')
    } catch (error) {
      res.status(400).send(err);
    }
  })
  
  
  
  // --------------------- UPDATE (PUT) --------------------
  router.put('/:id', async (req,res) =>{
    try {
      const updateFlight = await Flight.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true})
        console.log(updateFlight)
        // res.redirect(`/flights/${req.params.id}`)
        res.redirect('/flights')
    } catch (error) {
      res.status(400).send(err);
    }
  })
  
  
  
  
  
  
  // --------------------- CREATE (POST) --------------------
  // ready to send off to controller
  router.post('/',async (req,res) =>{
    try {
      const newFlight = await Flight.create(req.body)
      console.log(newFlight)
      res.redirect('/flights')
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
  
  
  
  // --------------------- EDIT (GET) --------------------
  router.get('/:id/edit', async (req,res) => {
    try {
      const foundFlight = await Flight.findById(req.params.id)
      res.render('flights/Edit',{
        flight: foundFlight
      })
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
  
  
  
  // --------------------- SHOW (GET) --------------------
  router.get('/:id', async (req,res) => {
    try {
      const foundFlight = await Flight.findById(req.params.id)
      res.render('flights/Show',{flight:foundFlight})
    } catch (error) {
      res.status(400).send(error)
    }
  })
  
  module.exports = router;