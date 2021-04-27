function WelcomeFunc ({name, children}){
    return <div>
    <h1>Bonjour {name}</h1>
    <p>
        {children}
    </p>
    </div>
}

class Welcome extends React.Component {

    render() {
        return <div>
        <h1>Bonjour {this.props.name}</h1>
            <p>
                {this.props.children}
            </p>
        </div>
    }
}
//Affiche date et heure du jour
class Clock extends React.Component {

    constructor (props) {
        super(props)
        this.state = {date: new Date()}
        this.timer = null
    }
//La date est mise à jour toutes les secondes
    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render () {
        const date = new Date()
        return <div>
            Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
        </div>
    }


}

//Incremente à partir de de 10
class Incrementer extends React.Component{
    constructor (props) {
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }
    componentDidMount (){
        window.setInterval(this.increment.bind(this), 1000)
    }
    componentwillUnmount (){
        window.clearInterval(this.timer)
    }
    increment () {
        this.setState((state, props) => ({n: state.n + props.step}))
    }

    render () {
        return <div>Valeur : {this.state.n}</div>
    }
}
//Incremente de 10 par 10
Incrementer.defaultProps = {
    start:0,
    step:1
}
function Home () {
    return <div>
        <Welcome name="Pagna" />
        <Welcome name="Jean" />
        <Clock/>
        <Incrementer start={10} />
        {/* ici on incremente de 10 par 10 */}
        <Incrementer start={100} step={10} />
    </div>
}

ReactDOM.render(<Home />, document.querySelector("#app"))