const React = require('react')
const DefaultLayout = require('../layout/Default')

class Edit extends React.Component{
    render(){
        const flight = this.props.flight
        return (
            <DefaultLayout
            title = 'Edit a flight' // title of the page, no link
            link = '/flights'
            text = 'Back to flight index' // a linked text, will redirect to above link
            >
                <form action={`/flights/${flight._id}?_method=PUT`} method='POST'>
                Airline:<input type='text' name='airline'/>
                Airport:<input type='text' name='airport' />
                Departure:<input type='datetime-local' name='departs' />
                <input type='submit' value='Submit Changes' />
                </form>

            </DefaultLayout>
        )
    }
}

module.exports = Edit