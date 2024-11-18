import { Route, Routes } from 'react-router-dom'
import React from 'react'
import './App.css'
import Movies from './Movies'
import Serials from './Serials'
import Webseries from './Webseries'

function AppClone() {
    return(
            <Routes>
               <Route path='/' element={<Movies/>}>Movies</Route>
               <Route path='/Serials' element={<Serials/>}>Serials</Route>
               <Route path='/Movies' element={<Movies/>}>Movies</Route>
               <Route path='/Webseries' element={<Webseries/>}>Webseries</Route>
            </Routes>
    )
}
export default AppClone