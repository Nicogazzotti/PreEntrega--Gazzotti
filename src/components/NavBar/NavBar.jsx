import './styles.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_URLS } from "../../constants";
import Categoria from '../categorias';





const NavBar= ({fCat,fAll}) => {
    const {data: category, loading, error}= useFetch(API_URLS.CATEGORY.url,API_URLS.CATEGORY.config);
    
    return(
        <>
            <header className="todo_header">
                <Link to='/'  className="logo"> TecnoGlaz </Link>
                

                <nav className="nav">
                    
                    <ul className="category menu">
                        {error && <h2>{error}</h2>}
                        {
                            category.map((cat)=>(
                                <Categoria key={cat.id} onClick={() => fCat(cat.categoria)} id={cat.id} name={cat.categoria} />
                            ))
                        }
                        <Categoria onClick={fAll} id='All' name='All'  />
                        
                    </ul>
                </nav>

                <nav className="menuDesplegable btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Menu</button>
                    <ul className=" categoryDesplegable dropdown-menu">
                        {error ? <h2>{error}</h2>:null}
                        {
                            category.map((cat)=>(
                                <Categoria key={cat.id} className='dropdownn-item' onClick={() => fCat(cat.categoria)} id={cat.id} name={cat.categoria} />
                            ))
                        }
                        
                        <Categoria className="catAll dropdown-item" onClick={fAll} id='All' name='All'  />
                    </ul>
                </nav>

                <CartWidget/>

            </header> 
            
        </>
    );

}

export default NavBar;
