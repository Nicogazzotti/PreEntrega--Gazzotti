import './styles.css'

const Input= ({name,type,cs,csdiv,ph,id,required=false,onFocus,onBlur,onChange,value}) => {
    
    
    return(
        <div className={csdiv}> 
            <input id={id} type={type} className={cs} placeholder={ph} required={required} onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={value}/>
            <label htmlFor={id}>
                {name}
            </label>
        </div>
        
    )
}

export default Input;
