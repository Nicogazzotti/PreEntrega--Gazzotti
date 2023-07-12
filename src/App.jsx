/* eslint-disable react/prop-types */
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect } from 'react'
import { useState } from 'react'
import CartWidget from './components/CartWidget/CartWidget'
import { useFetch } from './hooks/useFetch'
import { API_URLS } from './constants'
import Catalogo from './components/products/catalogo/catalogo'
import DetalleProducto from './components/products/detalle/detalleproducto'
import Input from './components/NavBar/input'



function App() {
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
      setShowDetails(true);
      const findProd= products.find((prod) => prod.id===id);
      setDetail(findProd);
  }

  // useEffect(()=>{
  //   const getProduct= async ()=> {
  //     try{
  //       const response= await fetch("https://64ac7dff9edb4181202f9559.mockapi.io/products",{
  //         method: 'GET',
  //         headers: {
  //           'Content-Type' : 'application/json',
  //         },
  //       });
  //       const data= await response.json();
  //       setProducts(data);
  //     }
  //     catch(error){
  //       console.error("error")
  //     }
  //   }
  //   getProduct();
  // },[])

  return (
    <>
      <div>
        <NavBar logo="TecnoGlaz" products={products}/>

        <Input csdiv={inputClass} cs="form-control me-2"type="search" ph="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
        <div className="contenedor">
          {loading && <h2>Loading...</h2>}
          {error && <h3>{error}</h3>}
          {search.length>0 && prodFiltered.length===0 && <h3 className='noEncontrado'>Producto no encontrado</h3> }

          {showDetails ?(
            <>
              
              <h2 className='prod_titleDet'>Detalle Producto</h2>
              <DetalleProducto  {...detail}/>
              <div className='contBack'>
                <button className='back' onClick={()=>setShowDetails(false)}>Back</button>
              </div>
            </>
          ):(
            <>
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
          </>
          )}
        </div>
      </div>
    </>

  )
}

export default App




