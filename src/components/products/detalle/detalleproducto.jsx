import "./styles.css"
import React from "react"

const DetalleProducto= ({id,image,name,categoria,descripcion,precio,stock})=>{
    return(
        <div className="productoDet" >
            <div className="imgDet">
                <img src={image} alt="Imagen" />
            </div>
            <div className="datosDet">
                <h3 className="prod_nameDet">{name}</h3>
                <p className="cont_catDet">{categoria}</p>
                
                <p className="prod_descDet">{descripcion}</p>
                <h4>${precio}</h4>
                <div className="prod_ActionDet">
                    <button  className="prod_buttonDet">Añadir</button>
                </div>
                <p className="stockDet">Stock: {stock}</p>
            </div>
        </div>
    
    )
}

export default DetalleProducto;