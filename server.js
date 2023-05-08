require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('./config/database')
// const {connect, connection} = require('mongoose') no need to require as database(line 5) made connection to mongoose
const Flight = require('./models/flight')



// --------------------- VIEW ENGINE --------------------
const reactViewsEngine = require('jsx-view-engine').createEngine();
app.engine('jsx', reactViewsEngine);
app.set('view engine', 'jsx');
app.set('views', './views');



// --------------------- MIDDLEWARE -------------------
// This enables the req.body, after app has been defined
app.use(express.urlencoded({ extended: false })); 
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
// app.use(methodOverride('_method'));
// app.use(express.static('public'))





// --------------------- CUSTOM MIDDLEWARE --------------------
app.use((req, res, next) => {
  // console.log('Middleware running...');
  next();
});






// --------------------- ROUTES --------------------

// I.N.D.U.C.E.S
// ------------------- INDEX (GET) ---------------------

app.get('/', async (req,res) =>{
  
  try {
      const foundFlight = await Flight.find()
      res.status(200).render('flights/Index',{ flights:foundFlight })

  } catch (error) {
      res.status(400).send(error)
  }
})




// ------------------- NEW (GET) ---------------------
app.get('/new',(req,res) => {
  res.render('flights/New')
})





// --------------------- CREATE (POST) --------------------
app.post('/',async (req,res) =>{
  try {
    req.body.readyToCreate = req.body.readyToCreate === 'on'
    const newFlight = await Flight.create(req.body)
    console.log(newFlight)
    res.redirect('/')
  } catch (error) {
    res.status(400).send(error)
  }
})



// --------------------- SHOW (GET) --------------------
app.get('/:id', async (req,res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id)
    res.render('flights/Show',{flights:foundFlight})
  } catch (error) {
    res.status(400).send(error)
  }
})





// --------------------- LISTEN --------------------
app.listen(PORT, ()=>{
  console.log(`listening in port: ${PORT}`)
})