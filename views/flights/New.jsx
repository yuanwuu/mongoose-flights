const React = require('react')
const DefaultLayout = require('../layout/Default')

class New extends React.Component{
    render() {
        return(
            <
            DefaultLayout
            title = 'Create a Flight' // title of the page, no link
            link = '/flights'
            text = 'Back to flight index' // a linked text, will redirect to above link
            >
             
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

            </DefaultLayout>
        )
    }
}

module.exports = New;