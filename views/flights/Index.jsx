const React = require("react");
const moment = require('moment');
const DefaultLayout = require("../layout/Default");
const Destination = require("../../models/destination");

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    console.log(flights)
    return (
      <DefaultLayout
      title = 'Flight Index: display all flights' // this title replaced h1 in the next line
      >
        <a href='/flights/new'>Create a Flight</a>
        <ul>
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                Airline: <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                <br />
                Flight No: {flight.flightNo} <br />
                Depature: {moment(flight.departs).format('ddd MM/DD/YYYY, hh:mm a')}
                <br />
                {/* Airport: {flight.destination[0].airport} <br /> */}


                {/* --------------------- EDIT --------------------  
                link to this specific fruit's edit page */}
                <a href={`/flights/${flight._id}/edit`}>Edit This Flight</a>





              {/* --------------------- DELETE -------------------- 
                delete button, it's a form bc we need to make a req. to our server.  
                can't use handleClick in the server  */}
                <form 
                  action={`/flights/${flight._id}?_method=DELETE`} 
                  method="POST" 
                  //looks like a POST request, however from the line above server is using "_method"(methodOverride) to perform a DELETE request action.  _method=DELETE (key/value pair)
                > 
                <input type="submit" value="DELETE" />
                </form><br />
                
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
