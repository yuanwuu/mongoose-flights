require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('./config/database')
// const {connect, connection} = require('mongoose') no need to require as database(line 5) made connection to mongoose
// const Flight = require('./models/flight')
const Destination = require('./models/destination')
const methodOverride = require('method-override')
const flightsController = require('./controllers/flightsController')



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
app.use('/flights',flightsController)




// --------------------- LISTEN --------------------
app.listen(PORT, ()=>{
  console.log(`listening in port: ${PORT}`)
})