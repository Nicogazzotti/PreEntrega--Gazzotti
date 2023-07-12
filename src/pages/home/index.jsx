import './styles.css'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useEffect } from 'react'
import { useState } from 'react'
import CartWidget from '../../components/CartWidget/CartWidget'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import Catalogo from '../../components/products/catalogo/catalogo'
import DetalleProducto from '../../components/products/detalle/detalleproducto'
import Input from '../../components/NavBar/input'
import { useNavigate } from 'react-router-dom'



function Home() {
  const nav= useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [detail, setDetail]= useState(null);
  const {data: products, loading, error}= useFetch(API_URLS.PRODUCTS.url,API_URLS.PRODUCTS.config);
  const [search, setSearch]= useState('');
  const [prodFiltered, setProdFiltered]=useState([]);
  const [active,setActive]= useState(false); 
    
    

    const searchFilter = (query) => {
        let updateProductList= [...products];
        updateProductList= updateProductList.filter((item)=>{
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setProdFiltered(updateProductList);
    }
    const onChange= (event)=>{
        const value= event.target.value;
        setSearch(value);
        searchFilter(value);
    }
    const onFocus= ()=>{
        setActive(true);
    }
    const onBlur= () =>{
        setActive(false);
    }
    const inputClass= `barra ${active ? 'active' : ''}`
    

    const onShowDetails= (id)=>{
      nav(`/products/${id}`)
  }

  return (
    <>
      <div>
        
        <Input csdiv={inputClass} cs="form-control me-2"type="search" ph="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
        <div className="contenedor">
          {loading && <h2>Loading...</h2>}
          {error && <h3>{error}</h3>}
          {search.length>0 && prodFiltered.length===0 && <h3 className='noEncontrado'>Producto no encontrado</h3> }
 
          <h1 className="prod_title">Products</h1>
              {/* <ItemListContainer greeting="Bienvenidos a TecnoGlaz" /> */}
          <div className="cont_prod">
            {
              search.length > 0 ?(prodFiltered.map((prod) =>(
                <Catalogo key={prod.id} {...prod} onShowDetails={onShowDetails}/>
                )) 
              ): (
              products.map((prod)=>(
                <Catalogo key={prod.id} {...prod} onShowDetails={onShowDetails}/>                 
              ))
              )
            }
            </div>        
        </div>
      </div>
    </>

  )
}

export default Home