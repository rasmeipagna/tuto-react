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
        this.props.onTemperatureChange(e.target.value)
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
function Button ({type, children}){
    const className = 'btn btn-' + type
    return <button className={className}>{children}</button>
}
function PrimaryButton ({children}){
    return <Button type="primary">{children}</Button>
}
function SecondaryButton ({children}){
    return <Button type="secondary">{children}</Button>
}
function Column2 ({left, right}) {
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}
class Calculator extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            temperature: 20
        }
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this)

    }
    handleTemperatureChange (temperature) {
        this.SetState({temperature})
    }

    render () {
        const {temperature} = this.state
        const celsius = temperature
        const fahrenheit = toFahrenheit(celsius)
        return <div>
            <div className="form-group">
                <Column2
                left = {<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleTemperatureChange}/>}
                right = {<TemperatureInput scale="f" temperature={fahrenheit}/>}
                ></Column2>
                
                <BoilingVerdict celsius={parseFloat(temperature)}/>
                <PrimaryButton type="primary">Envoyer</PrimaryButton>
                <SecondaryButton type="primary">Envoyer</SecondaryButton>

            </div>
                
           
        </div>
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('app'))
