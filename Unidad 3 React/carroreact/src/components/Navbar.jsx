export default function Navbar ({ asd, ...props}) {

    console.log(props)
    const styles = {
        backgroundColor : "red",
    }

    return  <nav className="navbar bg-body-tertiary" style={ styles  }>
                <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Navbar</span>
                <button onClick={() => { asd() }} className="btn btn-outline-success">Toggle Div</button>
                </div>
            </nav>

}