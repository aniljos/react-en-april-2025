import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppThemeContext } from "../context/AppThemeContext";

function AppBar() {
    
    const theme = useContext(AppThemeContext);
   
    function switchTheme(){
        theme.changeMode(theme.mode === 'dark'? 'light': 'dark');
        console.log("mode", theme.mode);
    }

    return (
        <nav className={`navbar navbar-${theme.mode} bg-${theme.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React-Vite</Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todos">Todo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li>
                        <button className="btn btn-danger" onClick={switchTheme}>Switch Theme</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AppBar;