let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const title = <h1 className="title" id={"title" + n}>
        Bonjour les gens <span>{n}</span>
        </h1>

    ReactDOM.render(title, document.querySelector('#app'))
}


window.setInterval(() => {
    n++
    render()
}, 1000)