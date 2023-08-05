import './App.css'
import { CartProvider } from './context/cart-context'
import Router from './navigation'

function App() {

  return ( 
      <CartProvider>
        <Router />
      </CartProvider>
  )
}

export default App




