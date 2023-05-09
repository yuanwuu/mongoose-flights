const React = require('react')

class Edit extends React.Component{
    render(){
        const flight = this.props.flight
        return (
            <div>
                <form action={`/flights/${flight._id}?_method=PUT`} method='POST'>
                Airline:<input type='text' name='airline'/>
                Airport:<input type='text' name='airport' />
                Departure:<input type='datetime-local' name='departs' />
                <input type='submit' value='Submit Changes' />
                </form>

            </div>
        )
    }
}

module.exports = Edit