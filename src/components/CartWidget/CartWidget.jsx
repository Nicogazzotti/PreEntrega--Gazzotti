import React from "react";
import './styles.css'
const CartWidget= ({text}) => {
    return(
        <div className="cart">
            <p className="pcar">{text}</p>
            <a href=""><i className="icono bi bi-cart2 "></i></a>
        </div>
        

    );
}

export default CartWidget;