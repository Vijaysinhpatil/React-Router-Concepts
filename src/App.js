import logo from './logo.svg';
// import './App.css';
import { NavLink, Route,Routes, useNavigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import LinkExport from './Components/LinkExport';
import NavLinkLearn from './Components/NavLinkLearn';
import Navigating from './Components/Navigating';
import PageNotFound from './Components/PageNotFound';
import NestedRoutes from './Components/NestedRoutes';
import Products from './Components/Products';
import Shirts from './Components/Shirts';
import Jeans from './Components/Jeans';
import User from './Components/User';
import UserDetail from './Components/UserDetail';


function App() {

  const navigate = useNavigate();


  return (
   <>
   {/* <LinkExport/> */}
   {/* <NavLinkLearn/> */}

   <NestedRoutes/>
   <Navigating/>
    <Routes> 
    
    
   <Route path='/' element={<Home/>}/>
   <Route path='/about' element={<About/>}/>
   <Route path='/products' element={<Products/>}>
     <Route index element={<Shirts/>}/>
    <Route path='shirts' element={<Shirts/>}/>
  
    <Route path='jeans' element={<Jeans/>}/>
   </Route>
   <Route path='/contact' element={<Contact/>}/>
   {/* <Route path='*' element={<PageNotFound/>}/> */}
   
   <Route path='/user' element={<User/>}>
      <Route path=':id' element={<UserDetail/>}/>
   </Route>
   
   

   <Route path='*' element={<PageNotFound/>}/>



    </Routes>


    
   




 
     


   </>

   
  );
}

export default App;
