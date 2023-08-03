const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/

const apellidoRegex=/^[a-zA-ZÀ-ÿ\s]{2,30}$/
const documentoRegex= /^[0-9]{8,15}$/
const emailRegex= /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
const telefonoRegex= /^[0-9]{7,15}$/
const direccionRegex=/^[a-zA-ZÀ-ÿ0-9-,\s]{7,80}$/
const codigoPostalRegex= /^[0-9]{2,8}$/
const validarInput= ({type,value})=>{
    let hasError=false;
    let error=''
    const formatValue= value.trim()

    switch(type){
        case 'nombre':
            if(formatValue===""){
                hasError=true;
                error="Ingrese un nombre"
            }else if(!nombreRegex.test(formatValue)){
                hasError= true
                error="Nombre invalido"
            }else{
                hasError=false
                error=""
            }
            break
        case 'apellido':
            if(formatValue===""){
                hasError=true;
                error="Ingrese un apellido"
            }else if(!apellidoRegex.test(formatValue)){
                hasError= true
                error="Apellido invalido"
            }else{
                hasError=false
                error=""
            }
            break
            case 'documento':
                if(formatValue===""){
                    hasError=true;
                    error="Ingrese su DNI"
                }else if(!documentoRegex.test(formatValue)){
                    hasError= true
                    error="DNI invalido"
                }else{
                    hasError=false
                    error=""
                }
                break
                case 'email':
                    if(formatValue===""){
                        hasError=true;
                        error="Ingrese su Email"
                    }else if(!emailRegex.test(formatValue)){
                        hasError= true
                        error="Email invalido"
                    }else{
                        hasError=false
                        error=""
                    }
                    break
                case 'telefono':
                    if(formatValue===""){
                        hasError=true;
                        error="Ingrese su Telefono"
                    }else if(!telefonoRegex.test(formatValue)){
                        hasError= true
                        error="Telefono invalido"
                    }else{
                        hasError=false
                        error=""
                    }
                    break
                case 'direccion':
                    if(formatValue===""){
                        hasError=true;
                        error="Ingrese una direccion"
                    }else if(!direccionRegex.test(formatValue)){
                        hasError= true
                        error="Direccion invalido"
                    }else{
                        hasError=false
                        error=""
                    }
                    break
                case 'codigoPostal':
                    if(formatValue===""){
                        hasError=true;
                        error="Ingrese un codigo postal"
                    }else if(!codigoPostalRegex.test(formatValue)){
                        hasError= true
                        error="Codigo postal invalido"
                    }else{
                        hasError=false
                        error=""
                    }
                    break
        default:
            hasError=false
            error=""
            break
    }

    return {hasError, error}
}

export default validarInput