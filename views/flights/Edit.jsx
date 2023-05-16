const React = require('react')
const DefaultLayout = require('../layout/Default')
const Flight = require('../../models/flight')
const Destination = require("../../models/destination");

class Edit extends React.Component{
    render(){
        const {flight} = this.props
        const destination = this.props.destinations
        return (
            <DefaultLayout
            title = 'Edit a flight' // title of the page, no link
            link = '/flights'
            text = 'Back to flight index' // a linked text, will redirect to above link
            >
                <form action={`/flights/${flight._id}?_method=PUT`} method='POST'>
                Airline:<input type='text' name='airline'/>
                <label name='airport'>Airports:</label>
                        <select name='airport' defaultValue='SAN'>
                            <option>AUS</option>
                            <option>DAL</option>
                            <option>LAX</option>
                            <option>SAN</option>
                            <option>SEA</option>
                        </select>
                Departure:<input type='datetime-local' name='departs' />
                <input type='submit' value='Submit Changes' />
                </form>

            </DefaultLayout>
        )
    }
}

module.exports = Edit
