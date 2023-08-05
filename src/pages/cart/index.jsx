import { useContext } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './styles.css'
import { CartContext } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom'
import { firebaseServices } from '../../services/firebase'
import CartProds from '../../components/cart/cart-prods'
import CartTotal from '../../components/cart/cart-total'


function Cart()  {
    const {cart,quitarCarrito,agregarCarrito,restarCarrito,totalCart,totalProds, }= useContext(CartContext)
    const nav= useNavigate()
    const onCreateCart = async ()=> {
        const newCart= {
            buyer: {
                id:1
            },
            items:cart,
            createdAt  : new Date(),
            total: totalCart,
            status: 'pending',      
        }
        const cartId= await firebaseServices.createCart(newCart)

        return cartId
    }
    const goCheckout=async ()=>{
        const cartId= await onCreateCart()
        nav('/checkout', {state: {cartId: cartId.id}})
        console.log(cartId)
    }
    
    return(
        <>

            <NavBar/>
            
            <div className='carrito'> 
                <h2 className='cartTitulo'>Carrito</h2>
                {cart.length===0 && <h2 className='carritoVacio'>Carrito vacio</h2>}
                {
                cart?.length > 0 && cart.map((prod)=>( 
                    <CartProds {...prod} key={prod.id} quitarCarrito={quitarCarrito} agregarCarrito={agregarCarrito} restarCarrito={restarCarrito}  />
                ))
                }
                {
                cart?.length>0 && (
                    <CartTotal isCart={true} totalCart={totalCart} totalProds={totalProds()} goCheckout={goCheckout} />
                    // <div className='cartAction'> 
                    //     <div className='cartActionDatos'>
                    //         <p className='cartTotal'>Precio Total: ${totalCart}</p>
                    //         <p className='cartProdCant'>Productos: {totalProds()}</p>
                    //     </div>
                    //     <button onClick={goCheckout} className='cartButCheckout'>Checkout</button>
                    // </div>
                )
                }
            </div>
        </>
    )
}

export default Cart