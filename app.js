const scaleNames = {
    c: 'Celsius',
    f : 'Farenheit'
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
        this.state = {temperature : ''}
        this.handleChange = this.handleChange.bind(this)

    }
    handleChange (e) {
        this.setState({temperature : e.target.value})
    }

    render () {
        const {temperature} = this.state
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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange (e) {
        this.setState({temperature : e.target.value})
    }
    render () {
        const {temperature} = this.state
        return <div>
            <div className="form-group">
                <TemperatureInput scale="c" temperature={temperature}/>
                <TemperatureInput scale="f" temperature={}/>
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </div>
                
           
        </div>
    }
}

ReactDOM.render(<BoilingVerdict celsius={100}/>, document.getElementById('app'))