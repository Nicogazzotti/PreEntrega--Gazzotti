import './styles.css'

const Input= ({label,name,type,cs,csdiv,ph,id,required=false,onFocus,onBlur,onChange,value,active,error,hasError}) => {
    
    const inputClass= `${csdiv} ${active ? 'active' : ''}`
    return(
        <div className={inputClass}> 
            <input id={id} type={type} name={name} className={cs} placeholder={ph} required={required} onFocus={onFocus} onBlur={onBlur} onChange={onChange} value={value}/>
            <label htmlFor={id}>
                {label}
            </label>
            {hasError &&(
                <span className='error'>{error}</span>
            )}
        </div>
        
    )
}

export default Input;
