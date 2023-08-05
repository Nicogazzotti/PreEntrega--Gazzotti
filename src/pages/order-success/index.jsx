import { useLocation } from 'react-router-dom'
import './styles.css'
import NavBar from '../../components/NavBar/NavBar'

const OrderSuccess= ()=>{
    const loc= useLocation()
    const {orderId}=loc.state

    return(
        <>
            <NavBar/>
            <div className='orderSuccess'> 
                <div className='exito'>
                    <h1>Orden realizada con exito!</h1>
                    <i className="bi bi-check check"></i>
                </div>
                <h2>Gracias por confiar en nosotros.</h2>
                <p>Order Id: {orderId}</p>
            </div>
        </>
    )
}

export default OrderSuccess