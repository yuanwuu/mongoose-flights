const React = require('react')

class Show extends React.Component{
    render (){
        const flight = this.props
        return (
            <div>
                <h1>This page show indiviual flight info</h1>
                {flight.name}<br />
                {flight.flightNo}<br />
                {flight.departs}<br />
            </div>
        )
    }
}

module.exports = Show