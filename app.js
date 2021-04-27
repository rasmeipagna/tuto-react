let n = 0

function render(){
    const title = React.createElement('h1', {}, 
        'Bonjour tout le monde ',
        React.createElement('span', {}, n)
    )

    ReactDOM.render(title, document.querySelector('#app'))
}


window.setInterval(() => {
    n++
    render()
}, 1000)