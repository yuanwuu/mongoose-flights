const React = require('react')

class New extends React.Component{
    render() {
        return(
            <div>
                <h1>Create a Flight</h1>
                <form action='/flights' method='POST'>
                    <label >Airlines:</label>
                    <select name='airline'>
                        <option>American</option>
                        <option>Southwest</option>
                        <option>United</option>
                    </select><br />
                    <label>Airports:</label>
                    <select name='airport'>Airport:
                        <option>AUS</option>
                        <option>DAL</option>
                        <option>LAX</option>
                        <option selected>SAN</option>
                        <option>SEA</option>
                    </select>

                    Flight No.:<input type='text' name='flightNo' placeholder='10 - 9999' /><br />
                    Departure:<input type='datetime-local' name='departs' /><br />
                    <input type='submit' value='Create Flight' />
                </form>

            </div>
        )
    }
}

module.exports = New;