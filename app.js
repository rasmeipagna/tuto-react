function BoilingVerdict({celsius}) {
    if (celsius >= 100) {
        return <div className="alert alert-success">L'eau bout</div>
    }
    return <div className ="alert alert-info"> L'eau ne bout pas</div>
}

ReactDOM.render(<BoilingVerdict celsius={50}/>, document.getElementById('app'))