import './styles.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { API_URLS } from '../../constants/index'
import Catalogo from '../../components/products/catalogo/catalogo'
import Input from '../../components/NavBar/input'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import { CartContext } from '../../context/cart-context'
import { useContext } from 'react'

function Home() {
  const nav= useNavigate();
  const [search, setSearch]= useState('');
  const [prodFiltered, setProdFiltered]=useState([]);
  const [active,setActive]= useState(false);
  const [isFiltered, setIsFiltered]=useState(false);
  const [catSeleccionada,setCatSeleccionada]= useState('All')
  const {data: products, loading, error}= useFetch(API_URLS.PRODUCTS.url,API_URLS.PRODUCTS.config);


  const {setProducts, products: productsContext,agregarCarrito, cart} =useContext(CartContext)
  
  useEffect(()=>{
    if(products?.length>0){
      setProducts(products)
    }
  },[products,setProducts])

  const searchFilter = (query) => {
    if(catSeleccionada!== 'All' && query.length=== 0  ){
      catFilter(catSeleccionada)
      return;
    }
    let updateProductList= query.length===0  ? [...products]: [...prodFiltered];
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
  


  const onShowDetails= (id)=>{
    nav(`/products/${id}`)
  }

  const catFilter = (catName) => {
    setIsFiltered(true)
    const categoryList= products.filter((prod)=> prod.categoria === catName);
    setProdFiltered(categoryList)
    setCatSeleccionada(catName)
  }
  const catFilterAll= ()=>{
    setIsFiltered(false)
    setCatSeleccionada('All')

  }


  return (
    <>
    
      <div>
        <NavBar fCat={catFilter} fAll={catFilterAll} />

        
        <Input csdiv="barra" active={active} cs="form-control me-2" type="search" ph="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur} />
        
        
          
        <div className="contenedor">
          {loading ? <h2>Loading...</h2>: null}
          {error ? <h3>{error}</h3> : null }
          {search.length>0 && prodFiltered.length===0 ? <h3 className='noEncontrado'>Producto no encontrado</h3>: null }

          <h1 className="prod_title">Products</h1>
      
          <div className="cont_prod">
            {
              isFiltered || search.length>0  ?(prodFiltered.map((prod) =>(
                <Catalogo key={prod.id} {...prod} onShowDetails={onShowDetails} agregarCarrito={agregarCarrito}/>
                ))
              ): (
              products.map((prod)=>(
                <Catalogo key={prod.id} {...prod} onShowDetails={onShowDetails} agregarCarrito={agregarCarrito} />
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