import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import LinkExport from './Components/LinkExport';


function App() {
  return (
   <>
   <LinkExport/>
    <Routes> 
    
    
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/contact' element={<Contact/>}/>

    </Routes>

   </>

   
  );
}

export default App;
