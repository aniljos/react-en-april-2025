import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import AppBar from './components/AppBar';

function App() {

  return (
    <div className="container">
      <Router>
        <AppBar/>

        <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/products' element={<ListProducts/>} />
              <Route path='/products/:id' element={<EditProduct/>} />
            </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
