import React, { useState } from "react";
import './styles.css'
import CartWidget from "../CartWidget/CartWidget";
import Input from "./input";




const NavBar= ({logo}) =>{
    // const [search, setSearch]= useState('');
    // const [prodFiltered, setProdFiltered]=useState([]);
    // const [active,setActive]= useState(false); 
    
    

    // const searchFilter = (query) => {
    //     let updateProductList= [{products}];
        
    //     console.log(updateProductList)
        
    //     updateProductList= updateProductList.filter((item)=>{
    //         return item.name.toLowerCase().indexOf(query.toLowerCase()()) !== -1;
    //     })
    //     setProdFiltered(updateProductList);
    // }
    // const onChange= (event)=>{
    //     const value= event.target.value;
    //     setSearch(value);
    //     searchFilter(value);
    // }
    // const onFocus= ()=>{
    //     setActive(true);
    // }
    // const onBlur= () =>{
    //     setActive(false);
    // }
    // const inputClass= `barra ${active ? 'active' : ''}`
    
    return(
        <header className="todo_header">
            <a href="/" className="logo" >{logo}</a>
            
            {/* <Input csdiv={inputClass} cs="form-control me-2"type="search" ph="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur} /> */}

            <nav className="nav">
                <ul className="menu">
                    <li><a href="/">Notebooks</a></li>
                    <li><a href="/">Celulares</a></li>
                    <li><a href="/">Televisores</a></li>
                    <li><a href="/">Tablets</a></li>
                    <li><a href="/">Perifericos</a></li>
                </ul>
            </nav>
            

            <nav className="menu_desplegable btn-group" role="group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Notebooks</a></li>            
                    <li><a className="dropdown-item" href="/">Celulares</a></li>
                    <li><a className="dropdown-item" href="/">Celulares</a></li>
                    <li><a className="dropdown-item" href="/">Tablets</a></li>
                    <li><a className="dropdown-item" href="/">Perifericos</a></li>  
                </ul>
            </nav>

            <CartWidget text="3"/>

        </header> 
    );

}

export default NavBar;
