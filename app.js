function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
        return <div className="alert alert-success">L'eau bout</div>
    }
    return <div className ="alert alert-info"> L'eau ne bout pas</div>
}

class Calculator extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            temperature:''
        }
    }
    render () {
        const {temperature} = this.state
        return <div>
            <div className="form-group">
                <label htmlFor="celsius">Temperature (en Celsius)</label>
                <input type="text" id="celsius" value={temperature} class="form-control"></input>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
        </div>
    }
}

ReactDOM.render(<BoilingVerdict celsius={110}/>, document.getElementById('app'))