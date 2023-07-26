/* eslint-disable react/prop-types */
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import { CartProvider } from './context/cart-context'
import Cart from './pages/cart'
import Checkout from './pages/checkout'



function App() {

  return (
    <>
      <div>
        
      <CartProvider>
          {/* <NavBar logo="TecnoGlaz"/> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/:prodId' element={<Detail/>}/>
            <Route path='/category/:catId' element={<Home/>}  />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>

      </CartProvider>

        

      </div>
    </>

  )
}

export default App




