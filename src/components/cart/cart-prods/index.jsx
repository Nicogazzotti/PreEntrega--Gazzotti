import './styles.css'

const CartProds=({quitarCarrito, agregarCarrito, restarCarrito, id,image, name, cantidad, precio, stock})=>{
    return (
        <div className='cartCont'>
            <div>
                <img className="cartimg" src={image} alt="img" />
            </div>
            <div className='cartTodosDatos'>
                <div className='contDatosBut'>

                    <div className='cartDatos'>
                        <p className="cartName">{name}</p>
                        <p className="cartCant">Unidades:{cantidad}</p>
                        <p className="cartPrecio">${precio}</p>
                        <p className="cartStock">Stock:{stock}</p>
                    </div>
                    <button onClick={()=> quitarCarrito(id)} className='cartQuitar'>X</button>
                </div>

                <div className='cartButtons'>
                    <button onClick={()=> agregarCarrito(id)} className='cartAdd'>+</button>
                    <button onClick={()=> restarCarrito(id)} className='cartRest'>-</button>
                </div>

            </div>
        
        </div>
    )
}
export default CartProds