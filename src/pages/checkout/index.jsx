import NavBar from '../../components/NavBar/NavBar'
import Input from '../../components/NavBar/input'
import './styles.css'
import { useState } from 'react';
function Checkout(){
    const [active,setActive]= useState(false);
    const onChange= (event)=>{
        
    }
    const onFocus= ()=>{
        setActive(true);
    }
    const onBlur= () =>{
        setActive(false);
    }
    const inputClass= `barraCheckout ${active ? 'active' : ''}`
    
    return(
        <>
            <NavBar logo="TecnoGlaz"  />
            <div className='checkoutCont'>
                <h1 className='chechoutTitulo'>Checkout</h1>
                <form className='checkoutForm'>
                    <div className='checkoutFormCont'>
                        <div className='checkoutFormInput'>
                            <Input ph="Nicolas" csdiv={inputClass} cs="" type="text" id="task" required={true}  name="Nombre" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div className='checkoutFormInput'>
                            <Input ph="Gonzalez" csdiv={inputClass} cs="" type="text" id="task" required={true}  name="Apellido" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div className='checkoutFormInput'>
                            <Input ph="+54 11 3578-3456" csdiv={inputClass} cs="" type="text" id="task" required={true}  name="Telefono" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div className='checkoutFormInput'>
                            <Input ph="44786956" csdiv={inputClass} cs="" type="text" id="task" required={true}  name="DNI" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div className='checkoutFormInput'>
                            <Input ph="Libertador 500, Olivos, Argentina" csdiv={inputClass} cs="" type="text" id="task" required={true}  name="Direccion" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                        <div className='checkoutFormInput'>
                            <Input ph="1636" csdiv={inputClass} cs="" type="text" id="task" required={true}  name="Codigo postal" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Checkout