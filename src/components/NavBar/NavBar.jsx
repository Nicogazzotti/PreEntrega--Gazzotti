import React from "react";
import './styles.css'
import CartWidget from "../CartWidget/CartWidget";



const NavBar= ({logo}) =>{
    return(
        <header className="todo_header">
            <a href="/" className="logo" >{logo}</a>
            <div className="navbar"> 
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            </div>

            
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
