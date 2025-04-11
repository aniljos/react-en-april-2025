import { Link } from "react-router-dom";

function AppBar(){

    return (
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" style={{color: "yellow"}} to="/">MFE-Remote</Link>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}
export default AppBar