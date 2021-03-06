const scaleNames = {
    c: 'Celsius',
    f : 'Fahrenheit'
}

/***
 * T(°F) = T(°C) × 9/5 + 32
 * T(°C) = (T(°F) - 32) × 5/9
 */
function toCelsius (fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit (celsius){
    return (celsius * 9 / 5) + 32
}
function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
        return <div className="alert alert-success">L'eau bout</div>
    }
    return <div className ="alert alert-info"> L'eau ne bout pas</div>
}

class TemperatureInput extends React.Component {
    constructor (props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange (e) {
        // this.setState({temperature : e.target.value})
    }

    render () {
        const {temperature} = this.props
        const name = 'scale' + this.props.scale
        const scaleName = scaleNames[this.props.scale]
        return <div className= "form-group">
            <label htmlFor={name}> Température (en {scaleName})</label>
            <input type="text" id={name} value={temperature} className="form-control" onChange={this.handleChange}></input>
        </div>
    }
}

class Calculator extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            temperature: 20
        }
    }

    render () {
        const {temperature} = this.state
        const celsius = temperature
        const fahrenheit = toFahrenheit(celsius)
        return <div>
            <div className="form-group">
                <TemperatureInput scale="c" temperature={celsius}/>
                <TemperatureInput scale="f" temperature={fahrenheit}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
                
           
        </div>
    }
}

ReactDOM.render(<BoilingVerdict celsius={100}/>, document.getElementById('app'))