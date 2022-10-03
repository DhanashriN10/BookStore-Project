import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from '../../pages/dashboard'
import Landscape from '../../pages/landscape'
import Cart from '../Cart'
import Order_placed from '../Order_placed'
import WhishList from '../WhishList'


function Router1() {
  return (
    <div>
       <Router>
          <Routes>
            <Route exact path='/' element={<Landscape />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/Order_placed' element={<Order_placed/>}/>
            <Route path='/WishList' element={<WhishList/>}/>
          </Routes>
       </Router>
    </div>
  )
}

export default Router1
