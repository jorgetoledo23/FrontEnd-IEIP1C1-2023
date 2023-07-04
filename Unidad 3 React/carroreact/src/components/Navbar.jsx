export default function Navbar ({ fToggleCarro }) {

    return  <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">Carro React</span>
                <button onClick={ () => { fToggleCarro () }}
                className="btn btn-outline-success"><i className="bi bi-cart"></i></button>
                </div>
            </nav>

}