require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('./config/database')
// const {connect, connection} = require('mongoose') no need to require as database(line 5) made connection to mongoose
const Flight = require('./models/flight')
const Destination = require('./models/destination')
const methodOverride = require('method-override')



// --------------------- VIEW ENGINE --------------------
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
app.set('view engine', 'jsx');
app.set('views', './views');



// --------------------- MIDDLEWARE -------------------
// This enables the req.body, after app has been defined
app.use(express.urlencoded({ extended: false })); 
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));
// app.use(express.static('public'))





// --------------------- CUSTOM MIDDLEWARE --------------------
app.use((req, res, next) => {
  // console.log('Middleware running...');
  next();
});






// --------------------- ROUTES --------------------

// I.N.D.U.C.E.S
// ------------------- INDEX (GET) ---------------------
// ready to send off to controller
app.get('/', async (req,res) =>{
  
  try {
    const foundFlight = await Flight.find({})
      res.status(200).render('flights/Index',{ flights:foundFlight })

  } catch (error) {
      res.status(400).send(error)
  }
})




// ------------------- NEW (GET) ---------------------
// ready to send off to controller
app.get('/new',(req,res) => {
  res.render('flights/New')
})






// --------------------- DELETE (DELETE) --------------------
app.delete('/flights/:id',async (req,res) =>{
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.status(200).redirect('/')
  } catch (error) {
    res.status(400).send(err);
  }
})



// --------------------- UPDATE (PUT) --------------------
app.put('/flights/:id', async (req,res) =>{
  try {
    const updateFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true})
      console.log(updateFlight)
      res.redirect(`/flights/${req.params.id}`)
  } catch (error) {
    res.status(400).send(err);
  }
})






// --------------------- CREATE (POST) --------------------
// ready to send off to controller
app.post('/',async (req,res) =>{
  try {
    const newFlight = await Flight.create(req.body)
    console.log(newFlight)
    res.redirect('/')
  } catch (error) {
    res.status(400).send(error)
  }
})




// --------------------- EDIT (GET) --------------------
app.get('/flights/:id/edit', async (req,res) => {
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
app.get('/flights/:id', async (req,res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id)
    res.render('flights/Show',{flight:foundFlight})
  } catch (error) {
    res.status(400).send(error)
  }
})





// --------------------- LISTEN --------------------
app.listen(PORT, ()=>{
  console.log(`listening in port: ${PORT}`)
})