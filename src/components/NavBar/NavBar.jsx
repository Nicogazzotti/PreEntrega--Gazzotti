import './styles.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants";





const NavBar= ({logo,fCat,fAll}) => {
    const {data: category, loading, error}= useFetch(API_URLS.CATEGORY.url,API_URLS.CATEGORY.config);
    
    return(
        <>
            <header className="todo_header">
                <Link to='/'  className="logo"> {logo} </Link>
                
                {/* <Input csdiv={inputClass} cs="form-control me-2"type="search" ph="Search" onChange={onChange} onFocus={onFocus} onBlur={onBlur} /> */}

                <nav className="nav">
                    
                    <ul className="category menu">
                        {error && <h2>{error}</h2>}
                        {
                            category.map((cat)=>(
                                <li key={cat.id} onClick={() => fCat(cat.categoria)} ><Link to={`/category/${cat.id}`} >{cat.categoria}</Link> </li>
                            ))
                        }
                        <li  onClick={fAll}><Link to={`/category/All`} >All</Link></li>
                    </ul>
                </nav>

                <nav className="menu_desplegable btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                    <ul className=" category dropdown-menu">
                        {error ? <h2>{error}</h2>:null}
                        {
                            category.map((cat)=>(
                                <li key={cat.id} onClick={() => fCat(cat.categoria)} className="dropdown-item"> <Link to={`/category/${cat.id}`} >{cat.categoria}</Link></li>
                            ))
                        }
                        <li  className="dropdown-item" onClick={fAll}><Link to={`/category/All`} >All</Link></li>
                    </ul>
                </nav>

                <CartWidget/>

            </header> 
            
        </>
    );

}

export default NavBar;
