// destructing Schema & model from mongoose & setting them to their own vars
const { Schema, model } = require("mongoose");
const Destination = require('./destination')

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
        require: true,
        default:true
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
    },
    destination:{
      type: [{ type: Schema.Types.ObjectId, ref: 'Destination' }],
      required: true

    }
    
    // [
    //   {
    //     airport: {
    //         type: String, 
    //         enum:['AUS','DAL','LAX','SAN','SEA'],
    //         require: true,
    //         default: true
    //     },
    //     arrival: {
    //         type: Date, 
    //         require: true,
    //         default: false
    //     }
    //   }
    // ]
  },
  {
    timestamps: true,
  }
);


module.exports = model("Flight", flightSchema);