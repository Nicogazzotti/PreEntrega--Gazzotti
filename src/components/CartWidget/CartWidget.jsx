import React, { useContext } from "react";
import './styles.css'
import { CartContext } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
const CartWidget= () => {
    const {cart} =useContext(CartContext)
    const nav= useNavigate()

    const goCart= () =>{
        nav('/cart')
    }
    return(
        <div onClick={goCart} className="cart">
            <p className="pcar">{cart.length}</p>
            <i className="icono bi bi-cart2 "></i>
        </div>
        

    );
}

export default CartWidget;