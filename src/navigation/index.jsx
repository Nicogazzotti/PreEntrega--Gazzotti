/* eslint-disable react/prop-types */
import { Route,Routes } from 'react-router-dom'
import OrderSuccess from '../pages/order-success'
import Checkout from '../pages/checkout'
import Cart from '../pages/cart'
import Home from '../pages/home'
import Detail from '../pages/detail'

function Router() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:prodId' element={<Detail/>}/>
            <Route path='/category/:catId' element={<Home/>}  />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/order-success' element={<OrderSuccess/>} />
        </Routes>
    )
}

export default Router




