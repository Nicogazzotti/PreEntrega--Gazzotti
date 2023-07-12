import "./styles.css"
import React from "react"

const Catalogo= ({id,image,name,categoria,descripcion,precio,onShowDetails})=>{
    return(
        <div className="producto" onClick={() => onShowDetails(id)}>
            <div className="img">
                <img src={image} alt="Imagen" />
            </div>
            <h3 className="prod_name">{name}</h3>
            <p className="cont_cat">{categoria}</p>
            
            <p className="prod_desc">{descripcion}</p>
            <h4>${precio}</h4>
            <div className="prod_Action">
                <button  className="prod_button">Añadir</button>
            </div>
        </div>
    
    )
}

export default Catalogo;