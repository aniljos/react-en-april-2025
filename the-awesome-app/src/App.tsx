import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import TodoList from './components/TodoList';
import AppBar from './components/AppBar';

function App() {

  return (
    <div className="container">
      <Router>
        <AppBar/>
        <main>
            <Routes>
              <Route path='/' element={<Message text='Hello React Vite' color='blue'/>} />
              <Route path='/counter' element={<Counter initialValue={10} />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/products' element={ <ListProducts/>} />
              <Route path='/products/:id' element={<EditProduct/>} />
              <Route path='/todos' element={ <TodoList/>} />
            </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
