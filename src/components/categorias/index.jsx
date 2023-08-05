import { Link } from 'react-router-dom'
import './styles.css'

const Categoria= ({onClick,name,id,className})=>{
    return(
        <li onClick={onClick} className={className} ><Link to={`/category/${id}`} >{name}</Link></li>
    )
}

export default Categoria