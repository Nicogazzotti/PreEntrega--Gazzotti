import './styles.css'
import DetalleProducto from '../../components/products/detalle/detalleproducto'
import { API_URLS } from '../../constants';
import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import NavBar from '../../components/NavBar/NavBar';


function Detail() { 
    const {prodId} = useParams();
    const nav=useNavigate()
    const urlDetail= `${API_URLS.PRODUCTS.url}/${prodId}`
    const {data, loading, error}= useFetch(urlDetail,API_URLS.PRODUCTS.config);
    
    const hist= window.history;
    
    return(
        <>  
            <NavBar logo="TecnoGlaz" />
            <h2 className='prod_titleDet'>Detalle Producto</h2>
            {loading && <h2>Loading...</h2>}
            {error && <h3>Hubo un error</h3>}
            <DetalleProducto  {...data}/>
            {hist.length>2 ? (<div onClick={()=>nav(-1)} className='contBack'>
                <button className='back' >Back</button>
            </div>): null}
        </>
    )
}

export default Detail