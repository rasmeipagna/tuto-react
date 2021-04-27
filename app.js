let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ]
    const title = <React.Fragment><h1 className="title" id="title">
        Bonjour les gens <span>{n}</span>
        </h1>
        <ul>
            <li>Premier li</li>
        </ul>
        </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'))
}


window.setInterval(() => {
    n++
    render()
}, 1000)