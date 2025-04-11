import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Counter from './components/Counter';
import Login from './components/Login';
import Home from './components/Home';

import Products from 'awesomeRemote/Products';
import EditProduct from 'awesomeRemote/EditProduct';


function App() {

  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MFE-Host</Link>
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/counter' element={<Counter initialValue={10} />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/products' element={<Products/>} />
              <Route path='/products/:id' element={<EditProduct/>} />
            </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
