import React from "react";
import './styles.css'

const Input= ({type,cs,csdiv,ph,id,required=false,onFocus,onBlur,onChange,value}) => {
    
    
    return(
        <div className={csdiv}> 
            <input type={type} className={cs} placeholder={ph} required={required} onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={value}/>
        </div>
        
    )
}

export default Input;
