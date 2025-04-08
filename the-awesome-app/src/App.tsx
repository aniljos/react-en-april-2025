import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import ListProducts from './components/ListProducts';

function App() {

  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-dark bg-dark">
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
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main>
            <Routes>
              <Route path='/' element={<Message text='Hello React Vite' color='blue'/>} />
              <Route path='/counter' element={<Counter initialValue={10} />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/products' element={<ListProducts/>} />
            </Routes>
        </main>

      </Router>
    </div>
  )
}

export default App
