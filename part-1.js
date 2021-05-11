// //Possibilité d'utiliser function()
// // function WelcomeFunc ({name, children}){
// //     return <div>
// //     <h1>Bonjour {name} avec un function</h1>
// //     <p>
// //         {children}
// //     </p>
// //     </div>
// // }
// //Ici en créant un composant
// class Welcome extends React.Component {

//     render() {
//         return <div>
//         <h1>Bonjour {this.props.name} </h1>
//             <p>
//                 {this.props.children}
//             </p>
//         </div>
//     }
// }
// //Affiche date et heure du jour
// class Clock extends React.Component {

//     constructor (props) {
//         super(props)
//         this.state = {date: new Date()}
//         this.timer = null
//     }
// //La date est mise à jour toutes les secondes
//     componentDidMount () {
//         this.timer = window.setInterval(this.tick.bind(this), 1000)
//     }

//     componentwillUnmount() {
//         window.clearInterval(this.timer)
//     }

//     tick() {
//         this.setState({date: new Date()})
//     }

//     render () {
//         const date = new Date()
//         return <div>
//             Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}
//         </div>
//     }


// }

// //Incremente à partir de de 10
// class Incrementer extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = {n: props.start, timer: null}
//         this.toggle = this.toggle.bind(this)
//         this.reset = this.reset.bind(this)
//     }

//     componentDidMount () {
//         this.play()
//     }

//     componentwillUnmount () {
//         window.clearInterval(this.state.timer)
//     }

//     increment () {
//         this.setState((state, props) => ({n: state.n + props.step}))
//     }
// // utilisation de bouton pause 
//     pause () {
//         window.clearInterval(this.state.timer)
//         this.setState({
//             timer: null
//         })
//     }
// // utilisation bouton play pour relancer le timer
//     play () {
//         window.clearInterval(this.state.timer)
//         this.setState({
//             timer: window.setInterval(this.increment.bind(this), 1000)
//         })
//     }
//     // méthode plus simple
//     // au click permet de switch entre play/pause
//     toggle () {
//         return this.state.timer ? this.pause() : this.play()
//     }
//     // au click on change le label
//     label () {
//         return this.state.timer ? 'Pause' : 'Lecture'
//     }
//     reset () {
//         this.pause()
//         this.play()
//         this.setState((state, props) => ({n: props.start}))
//     }

//     render () {       
//         return <div>Valeur : {this.state.n}
        
//             <button onClick={this.toggle}>{this.label()}</button> 
//             <button onClick={this.reset}>Réinitialiser</button>
//         </div>
//     }
// }
// //Incremente de 10 par 10
// Incrementer.defaultProps = {
//     start:0,
//     step:1
// }

// class ManualIncrementer extends React.Component {
//     constructor (props) {
//         super(props) 
//         this.state = {n: 0}
//     }

//     increment () {
//         this.setState((state, props) => ({n: state.n + 1}))
//     }


//     render () {
//         return <div> 
//             Valeur : {this.state.n} <button onClick={this.increment.bind(this)}>Incrémenter</button>


//         </div>
//     }
// }
// function Home () {
//     return <div>
//         <Welcome name="Pagna" />
//         <Welcome name="Jean" />
//         <Clock/>
//         {/* ici on créer un bouton pou qu'a chaque clic on incrémente */}
//         <ManualIncrementer />
//         {/* ici on incremente automatique 1 par 1 à partir de 1 */}
//         <Incrementer />
//         {/* ici on incremente chaque seconde à partir de 10 */}
//         <Incrementer start={10} />
//         {/* ici on incremente de 10 par 10 */}
//         <Incrementer start={100} step={10} />
//     </div>
// }
function Field ({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id="name" name={name} className="form-control"></input>
    </div>
}
function Checkbox ({name, value, onChange, children}) {
    return <div className="form-check">
        <input type="checkbox" value={value} onChange={onChange} id="name" name={name} className="form-check-input"></input>
        <label htmlFor={name} className="form-check-label">{children}</label>

    </div>
}

class Home extends React.Component {
constructor (props) {
    super(props)
    this.state = {
        nom:'',
        prenom:'',
        newsletter: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

}
handleChange (e) {
    const name = e.target.name
    const type = e.target.type
    const value = type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({
        [name]: value
    })
}
handleSubmit (e) {
    e.preventDefault()
    const data = JSON.stringify(this.state)
    // on reinitilise a chaque envoie, ils sont controlé par react
    this.setState({
        nom:'',
        prenom:'',
        newsletter: false
    })
}
render () {
    console.log('render')
    return <form className="container" onSubmit={this.handleSUbmit}>
        <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom </Field>
        <Field name="prenom" value={this.state.prenom} onChange={this.handleChange}>Prénom </Field>
        <Checkbox name="newsletter" value={this.state.newsletter} onChange={this.handleChange}>S'abonner à la newsletter</Checkbox>
        <div className="form-group">
            <button className="btn btn-primary">Envoyer</button>

        </div>
        {JSON.stringify(this.state)}
        {/* <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" value={this.state.nom} onChange={this.handleChange} id="nom" name="nom" />
        </div>
        <div>
            <label htmlFor="nom">Prénom</label>
            <input type="text" value={this.state.prenom} onChange={this.handleChange} id="prenom" name="prenom" />
        </div>
        <div>
            <label htmlFor="nom">S'abonner à la newsletter</label>
            <input type="checkbox" checked={this.state.newsletter} onChange={this.handleChange} id="newsletter" name="newsletter" />
        </div> */}
    </form>
}
}

ReactDOM.render(<Home />, document.querySelector("#app"))