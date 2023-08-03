import { useContext } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './styles.css'
import { CartContext } from '../../context/cart-context'
import { useNavigate } from 'react-router-dom'
import { firebaseServices } from '../../services/firebase'


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
                <h2 className='cartTitulo'>Cart</h2>
                {cart.length===0 && <h2 className='carritoVacio'>Carrito vacio</h2>}
                {
                cart?.length > 0 && cart.map((prod)=>(
                    <div key={prod.id} className='cartCont'>
                        <div>
                            <img className="cartimg" src={prod.image} alt="img" />
                        </div>
                        <div className='cartTodosDatos'>
                            <div className='contDatosBut'>

                                <div className='cartDatos'>
                                    <p className="cartName">{prod.name}</p>
                                    <p className="cartCant">Unidades:{prod.cantidad}</p>
                                    <p className="cartPrecio">${prod.precio}</p>
                                    <p className="cartStock">Stock:{prod.stock}</p>
                                </div>
                                <button onClick={()=> quitarCarrito(prod.id)} className='cartQuitar'>X</button>
                            </div>

                            <div className='cartButtons'>
                                <button onClick={()=> agregarCarrito(prod.id)} className='cartAdd'>+</button>
                                <button onClick={()=> restarCarrito(prod.id)} className='cartRest'>-</button>
                            </div>

                        </div>
                    
                    </div>
                ))
                }
                {
                cart?.length>0 && (
                    <div className='cartAction'> 
                        <div className='cartActionDatos'>
                            <p className='cartTotal'>Precio Total: ${totalCart}</p>
                            <p className='cartProdCant'>Productos: {totalProds()}</p>
                        </div>
                        <button onClick={goCheckout} className='cartButCheckout'>Checkout</button>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default Cart