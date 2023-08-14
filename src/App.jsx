import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';

function App() {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link> */}

        <Navbar />
        
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<Signup />} path='/signup' />
          <Route element={<EventHandling />} path='/event' />
          <Route element={<StateManagement />} path='/state' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// login
// signup

export default App;