/* eslint-disable react/prop-types */
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { useEffect } from 'react'
import { useState } from 'react'
import CartWidget from './components/CartWidget/CartWidget'
import Card from './components/products/card/card'
import Details from './components/products/details/details'
import { useFetch } from './hooks/useFetch'
import { API_URLS } from './constants'



function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [detail, setDetail]= useState(null);
  const {data: products}= useFetch(API_URLS.PRODUCTS.url,API_URLS.PRODUCTS.config);

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
        <NavBar logo="TecnoGlaz"/>

        <div className="contenedor">
          {showDetails ?(
            <>
              
              <h2 className='prod_titleDet'>Detalle Producto</h2>
              <Details {...detail}/>
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
                products.map((prod)=>(
                  <Card {...prod} onShowDetails={onShowDetails}/>
                  
                ))
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




