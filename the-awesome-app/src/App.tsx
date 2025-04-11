import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Message from './components/Message';

import Login from './components/Login';
import ListProducts from './components/ListProducts';
import EditProduct from './components/EditProduct';
import TodoList from './components/TodoList';
import AppBar from './components/AppBar';
import AddTodoItem from './components/AddTodo';
import React, { Suspense } from 'react';

//import Counter from './components/Counter';
const Counter = React.lazy(() => import('./components/Counter'));

function App() {

  return (
    <div className="container">
      {/* <Router basename='/awesome-app/'> */}
      <Router>
        <AppBar/>
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Message text='Hello React Vite' color='blue'/>} />
              <Route path='/counter' element={<Counter initialValue={10} />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/products' element={ <ListProducts/>} />
              <Route path='/products/:id' element={<EditProduct/>} />
              <Route path='/todos' element={ <TodoList/>} />
              <Route path='/todos/new' element={<AddTodoItem/>}/>
            </Routes>
            </Suspense>
        </main>
      </Router>
    </div>
  )
}

export default App
