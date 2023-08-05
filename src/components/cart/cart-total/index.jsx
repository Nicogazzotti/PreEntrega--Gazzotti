import './styles.css'

const CartTotal= ({goCheckout,totalCart,totalProds,isCart})=>{
    return(
        <div className='cartAction'> 
            <div className='cartActionDatos'>
                <p className='cartTotal'>Precio Total: ${totalCart}</p>
                <p className='cartProdCant'>Productos: {totalProds}</p>
            </div>
            {isCart ? <button onClick={goCheckout} className='cartButCheckout'>Checkout</button> :null}
        </div>
    )
}
export default CartTotal