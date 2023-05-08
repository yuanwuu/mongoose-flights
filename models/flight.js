// destructing Schema & model from mongoose & setting them to their own vars
const { Schema, model } = require("mongoose");

// create a new Schma
// thsi will define the sahpe of the doc. in the colleciton
const date = ()=>{
  let date = new Date();
  date.setFullYear(date.getFullYear()+1)
  return date;
}
const flightSchema = new Schema(

  {
    airline: {
        type: String, 
        enum:['American','Southwest','United'],
        require: true
    },
    flightNo: {
        type: Number, 
        require: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date, 
        default: date()
    }
  },
  {
    timestamps: true,
  }
);

// Creating Tweet model : We need to convert our schema into a model-- will be stored in 'flights' collection.  Mongo does this for you automatically
// Model's are fancy constructors compiled from Schema definitions
// An instance of a model is called a document.
// Models are responsible for creating and reading documents from the underlying MongoDB Database
// from here: https://mongoosejs.com/docs/models.html
module.exports = model("Flight", flightSchema);