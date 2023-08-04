import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';



function App() {
  return (
    <div className='home-bg'>
      <BrowserRouter> 
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<Login />} path='/login'/>
        <Route element={<Signup />} path='/signup'/>
      </Routes>
      </BrowserRouter>
      <Home />
      
    </div>
  );
}

export default App;
