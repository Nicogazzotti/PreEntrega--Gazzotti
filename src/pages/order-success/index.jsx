import { useLocation } from 'react-router-dom'
import './styles.css'
import NavBar from '../../components/NavBar/NavBar'

const OrderSuccess= ()=>{
    const loc= useLocation()
    const {orderId}=loc.state

    return(
        <>
            <NavBar/>
            <div>
                <h1>Orden realizada con exito</h1>
                <p>Order Id: {orderId}</p>
            </div>
        </>
    )
}

export default OrderSuccess