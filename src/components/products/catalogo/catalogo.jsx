/* eslint-disable react/display-name */
import "./styles.css"
import React, { memo } from "react"

const Catalogo= memo(({id,image,name,categoria,descripcion,precio,stock,onShowDetails,agregarCarrito})=>{
    return(
        <div className="producto" >
            <div className="tarjDatos" onClick={() => onShowDetails(id)}>
                <div className="img">
                    <img src={image} alt="Imagen" />
                </div>
                <h3 className="prod_name">{name}</h3>
                <p className="cont_cat">{categoria}</p>
                
                <p className="prod_desc">{descripcion}</p>
                

            </div>
            <div className="tarjButStock">
                <h4 className="prodPrecio">${precio}</h4>
                <div className="prod_Action">
                    <button onClick={()=> agregarCarrito(id)} className="prod_button">Añadir</button>
                    
                </div>
                <p className="stock">Stock: {stock}</p>

            </div>
        </div>
    
    )
})

export default Catalogo;