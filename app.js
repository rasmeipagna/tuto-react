function WelcomeFunc ({name, children}){
    return <div>
    <h1>Bonjour {name} avec un function</h1>
    <p>
        {children}
    </p>
    </div>
}

class Welcome extends React.Component {

    render() {
        return <div>
        <h1>Bonjour {this.props.name} avec un class extends </h1>
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
        this.state = {n: props.start, timer: null}
        this.toggle = this.toggle.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount () {
        this.play()
    }

    componentwillUnmount () {
        window.clearInterval(this.state.timer)
    }

    increment () {
        this.setState((state, props) => ({n: state.n + props.step}))
    }

    pause () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: null
        })
    }

    play () {
        window.clearInterval(this.state.timer)
        this.setState({
            timer: window.setInterval(this.increment.bind(this), 1000)
        })
    }
    // au click permet de switch entre play/pause
    toggle () {
        return this.state.timer ? this.pause() : this.play()
    }
    // au click on change le label
    label () {
        return this.state.timer ? 'Pause' : 'Lecture'
    }
    reset () {
        this.pause()
        this.play()
        this.setState((state, props) => ({n: props.start}))
    }

    render () {       
        return <div>Valeur : {this.state.n}
        
            <button onClick={this.toggle}>{this.label()}</button> 
            <button onClick={this.reset}>Réinitialiser</button>
        </div>
    }
}
//Incremente de 10 par 10
Incrementer.defaultProps = {
    start:0,
    step:1
}

class ManualIncrementer extends React.Component {
    constructor (props) {
        super(props) 
        this.state = {n: 0}
    }

    increment () {
        this.setState((state, props) => ({n: state.n + 1}))
    }


    render () {
        return <div> 
            Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button>


        </div>
    }
}
function Home () {
    return <div>
        <Welcome name="Pagna" />
        <Welcome name="Jean" />
        <Clock/>
        {/* ici on créer un bouton pou qu'a chaque clic on incrémente */}
        <ManualIncrementer />
        {/* ici on incremente automatique 1 par 1 à partir de 1 */}
        <Incrementer />
        {/* ici on incremente chaque seconde à partir de 10 */}
        <Incrementer start={10} />
        {/* ici on incremente de 10 par 10 */}
        <Incrementer start={100} step={10} />
    </div>
}

ReactDOM.render(<Home />, document.querySelector("#app"))