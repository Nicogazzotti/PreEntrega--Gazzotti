import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import Input from '../../components/NavBar/input'
import './styles.css'
import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { CartContext } from '../../context/cart-context';
import { firebaseServices } from '../../services/firebase';
import CartProds from '../../components/cart/cart-prods';
import CartTotal from '../../components/cart/cart-total';

const initialState= {
    nombre: {value: '', error:'', hasError: true, active: false, name: 'nombre'},
    apellido: {value: '', error:'', hasError: true, active: false, name: 'apellido'},
    documento: {value: '', error:'', hasError: true, active: false, name: 'documento'},
    email: {value: '', error:'', hasError: true, active: false, name: 'email'},
    telefono: {value: '', error:'', hasError: true, active: false, name: 'telefono'},
    direccion: {value: '', error:'', hasError: true, active: false, name: 'direccion'},
    codigoPostal: {value: '', error:'', hasError: true, active: false, name: 'codigopostal'},
    isFormValid: false,
}
function useQuery(){
    const {search} = useLocation()

    return useMemo(()=> new URLSearchParams(search), [search])
}

function Checkout(){
    const [formState, inputHandler, clearInputs,inputFocus,inputBlur] =useForm(initialState)
    const {cart, setCart,totalCart,totalProds,quitarCarrito, agregarCarrito,  restarCarrito}= useContext(CartContext)
    const {state}= useLocation()
    let query= useQuery()
    const nav= useNavigate()
    

    const onChange= (event)=>{
        const{name,value}= event.target
        inputHandler({name, value})
    }
    
    const onFocus= ({name})=>{
        inputFocus({name})
    }
    const onBlur= ({name}) =>{
        inputBlur({name})
    }

    const onHandleOrder= async ()=>{
        const newOrder= {
            buyer: {
                name: formState.nombre.value,
                surname: formState.apellido.value,
                document: formState.documento.value,
                email: formState.email.value,
                phone: formState.telefono.value,
                address: formState.direccion.value,
                postalCode: formState.codigoPostal.value
            },
            createdAt: new Date(),
            items: cart,
            payment: {
                currency: 'Peso',
                method: 'CASH',
                type: 'CASH'
            },
            seller: {
                email: 'gustapolo@gmail.com',
                id:'1',
                name: 'Gustavo Polo',
                phone: '1149654781'
            },
                shipping: {
                deliveryDate: new Date()+7,
                trackingNumber:'978zxxx79009',
                type:'DELIVERY'

            },
            total:totalCart,
        }
        const ordId= await firebaseServices.createOrder(newOrder)
        await firebaseServices.updateCart(state.cartId)

        return {ordId}
    }

    const onSubmit= async (event)=>{
        event.preventDefault()
        const {ordId}= await onHandleOrder()
        nav('/order-success', {state: {orderId:ordId.id}})
        
        // hacer que la pag se reinicie?
    }
    useEffect(()=>{
        const cartId= query.get('cartId')
        
        if(query.get('cartId')){
            const getCart= async ()=>{
                const cart= await firebaseServices.getCartById(cartId)
                return cart
            }
            getCart()
                .then((cart)=>{
                    setCart(cart.items)
                })
                .catch((error)=>{
                    console.log({error})
                })
        }
    }, [query, setCart])

    
    return(
        <>
            <NavBar />
            <div className='checkoutCont'>
                <div className='checkoutDetForm'>
                    <h1 className='chechoutTitulo'>Checkout</h1>
                    <form className='checkoutForm' onSubmit={onSubmit}>
                        <div className='checkoutFormCont'>
                            <div className='checkoutFormInput'>
                                <Input  ph="Nicolas" csdiv="barraCheckout"  type="text" id="nombre" name="nombre" required={true}  label="Nombre" active={formState.nombre.active} onChange={onChange} onFocus={()=>onFocus({name: 'nombre'})} onBlur={()=>onBlur({name: 'nombre'})} error={formState.nombre.error} hasError={formState.nombre.hasError} maxLength={30}  />
                            </div>
                            <div className='checkoutFormInput'>
                                <Input ph="Gonzalez" csdiv="barraCheckout" cs="" type="text" active={formState.apellido.active} id="apellido" name="apellido" required={true}  label="Apellido" onChange={onChange} onFocus={()=>onFocus({name: 'apellido'})} onBlur={()=>onBlur({name: 'apellido'})} error={formState.apellido.error} hasError={formState.apellido.hasError} maxLength="5" />
                            </div>
                            <div className='checkoutFormInput'>
                                <Input ph="44786956" csdiv="barraCheckout" cs="" type="text" active={formState.documento.active} id="documento" name="documento"  required={true}  label="DNI" onChange={onChange} onFocus={()=>onFocus({name: 'documento'})} onBlur={()=>onBlur({name: 'documento'})} error={formState.documento.error} hasError={formState.documento.hasError} maxLength={15} />
                            </div>
                            <div className='checkoutFormInput'>
                                <Input ph="nicogonzalez@gmail.com" csdiv="barraCheckout" cs="" type="text" active={formState.email.active} id="email" name="email"  required={true}  label="Email" onChange={onChange} onFocus={()=>onFocus({name: 'email'})} onBlur={()=>onBlur({name: 'email'})} error={formState.email.error} hasError={formState.email.hasError} maxLength={20} />
                            </div>
                            <div className='checkoutFormInput'>
                                <Input ph="1135783456" csdiv="barraCheckout" cs="" type="text" active={formState.telefono.active} id="telefono" name="telefono"  required={true}  label="Telefono" onChange={onChange} onFocus={()=>onFocus({name: 'telefono'})} onBlur={()=>onBlur({name: 'telefono'})} error={formState.telefono.error} hasError={formState.telefono.hasError} maxLength={15} />
                            </div>
                            <div className='checkoutFormInput'>
                                <Input ph="Libertador 500, Olivos, Argentina" csdiv="barraCheckout" cs="" type="text" active={formState.direccion.active} id="direccion" name="direccion"  required={true}  label="Direccion" onChange={onChange} onFocus={()=>onFocus({name: 'direccion'})} onBlur={()=>onBlur({name: 'direccion'})} error={formState.direccion.error} hasError={formState.direccion.hasError} maxLength={80}  />
                            </div>
                            <div className='checkoutFormInput'>
                                <Input ph="1636" csdiv="barraCheckout" cs="" type="text" active={formState.codigoPostal.active} id="codigoPostal" name="codigoPostal"  required={true}  label="Codigo postal" onChange={onChange} onFocus={()=>onFocus({name: 'codigoPostal'})} onBlur={()=>onBlur({name: 'codigoPostal'})} error={formState.codigoPostal.error} hasError={formState.codigoPostal.hasError} maxLength={8} />
                            </div>
                        </div>
                        <button disabled={!formState.isFormValid} type='submit'  className='butCheckout'>Checkout</button>
                    </form>
                </div>
                {cart?.length>0 ?(
                    <div className='chechoutCart'> 
                        <h2 className='chechoutCartTit'>Carrito</h2>
                        {
                            cart.map((prod)=> (
                                <CartProds {...prod} key={prod.id} quitarCarrito={quitarCarrito} agregarCarrito={agregarCarrito} restarCarrito={restarCarrito}/>
                            ))
                        }
                        <CartTotal  totalCart={totalCart} totalProds={totalProds()}  />
                    </div>

                ): null}
                
            </div>
        </>
    )
}

export default Checkout