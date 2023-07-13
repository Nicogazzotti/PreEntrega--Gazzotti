import React, { useState } from "react";
import './styles.css'
import CartWidget from "../CartWidget/CartWidget";
import Input from "./input";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants";
import Catalogo from "../products/catalogo/catalogo";




const NavBar= ({logo,fn}) => {
    const {data: category, loading, error}= useFetch(API_URLS.CATEGORY.url,API_URLS.CATEGORY.config);
    const {data:products}= useFetch(API_URLS.PRODUCTS.url,API_URLS.PRODUCTS.config);
    const [catFiltered, setCatFiltered]=useState([]);
    const [isFiltered, setIsFiltered]=useState(false);

    const catFilter = (cat) => {
        setIsFiltered(true)
        const categoryList= products.filter((item)=> item.categoria === cat);
        setCatFiltered(categoryList)
        console.log(catFiltered)
        console.log(isFiltered)
    }
    // onClick={()=>catFilter(cat.categoria)}
    
    return(
        <>
            <header className="todo_header">
                <a href="/" className="logo" >{logo}</a>
                
                {/* <Input csdiv={inputClass} cs="form-control me-2"type="search" ph="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur} /> */}

                <nav className="nav">
                    
                    <ul className="category menu">
                        {error && <h2>{error}</h2>}
                        {
                            category.map((cat)=>(
                                <li key={cat.id} onClick={() => fn(cat.id)} ><Link to={`/category/${cat.id}`} >{cat.categoria}</Link> </li>
                            ))
                        }
                    </ul>
                </nav>
                

                <nav className="menu_desplegable btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                    <ul className=" category dropdown-menu">
                        {error && <h2>{error}</h2>}
                        {
                            category.map((cat)=>(
                                <li key={cat.id} onClick={() => fn(cat.id)} className="dropdown-item"> <Link to={`/category/${cat.id}`} >{cat.categoria}</Link></li>
                            ))
                        }
                    </ul>
                </nav>

                <CartWidget text="3"/>

            </header> 
            <div>

            {
                isFiltered ===true ?(
                    catFiltered.map((prod)=>{
                        <Catalogo key={prod.id} {...catFiltered} />
                    }),
                    console.log("hola")  
                ):(null)
            }
            </div>
        </>
    );

}

export default NavBar;
