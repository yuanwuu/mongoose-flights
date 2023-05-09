const React = require('react')

class Show extends React.Component{
    render (){
        const flight = this.props.flight
        const departs = new Date(flight.departs).toString() // convert departs to a string
        return (
            <div>
                <h1>This page shows individual flight info</h1>
                <a href='/flights'>Flight Index</a><br />
                <a href='/flights/new'>Create a Flight</a><br />
                {flight.airline}<br />
                {flight.flightNo}<br />
                {departs}
            </div>
        )
    }
}

module.exports = Show


