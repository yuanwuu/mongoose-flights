const React = require('react')

class Index extends React.Component{
    render() {
        const { flights } = this.props;
        return(
            <div>
                <h1>Fight Index: display all flights</h1>
                <ul>
          {flights.map((flight, i) => {
            return (
              <li key={i}>
              Airline: <a href={`/flights/${flight._id}`}>{flight.airline}</a><br />
              Flight No:{flight.flightNo} <br></br>
              Departure:<br /><br />
              </li>
            );
          })}
        </ul>
                
            </div>
        )
    }
}

module.exports = Index
