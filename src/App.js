import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Create from './component/user/Create'
import CreateProduct from './component/product/CreateProduct'
import Header from './default/Header'
import Home from './component/Home'
import Pnf from './default/Pnf'
import Products from './component/product/Products'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import Update from './component/user/Update'
import UpdateProduct from './component/product/UpdateProduct'
import Users from './component/user/Users'

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <ToastContainer autoClose={3000} position={'bottom-right'} />
        <Routes>
            <Route exact path={`/`} element={<Home/>} />
            <Route exact path={`/users`} element={<Users/>} />
            <Route exact path={`/products`} element={<Products/>} />
            <Route exact path={`/user/create`} element={<Create/>} />
            <Route exact path={`/product/create`} element={<CreateProduct/>} />
            <Route exact path={`/user/edit/:id`} element={<Update/>} />
            <Route exact path={`/product/edit/:id`} element={<UpdateProduct/>} />
            <Route  path={`/*`} element={<Pnf/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App