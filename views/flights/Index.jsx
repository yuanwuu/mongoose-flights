const React = require("react");
const moment = require('moment')

class Index extends React.Component {
  render() {
    const { flights } = this.props;
    return (
      <div>
        <h1>Fight Index: display all flights</h1>
        <a href='/new'>Create a Flight</a>
        <ul>
          {flights.map((flight, i) => {
            return (
              <li key={i}>
                Airline: <a href={`/flights/${flight._id}`}>{flight.airline}</a>
                <br />
                Flight No: {flight.flightNo} <br></br>
                Depature: {moment(flight.departs).format('ddd MM/DD/YYYY, hh:mm a')}
                <br></br>

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
                </form><br /><br />
              
              
              
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

module.exports = Index;
