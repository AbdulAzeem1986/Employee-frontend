import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Addemployee from './Components/Addemployee';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Home/>}/>
      <Route path='/addemployee' exact element={<Addemployee/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
