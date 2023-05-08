const React = require('react')

class New extends React.Component{
    render() {
        return(
            <div>
                <h1>Create a Flight</h1>
                <form action='/' method='POST'>
                    Airline:<input type='text' name='airline' /><br />
                    Flight No.:<input type='text' name='flightNo' placeholder='10 - 999' /><br />
                    Departure:<input type='datetime-local' name='departure' /><br />
                    <input type='submit' value='Create Flight' />
                </form>

            </div>
        )
    }
}

module.exports = New;