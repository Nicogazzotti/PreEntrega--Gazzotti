import { createContext,useState } from "react";

const initialState= {
    products: [],
    categorias: [],
    cart:[],
    setCart: ()=> {},
    getCantidad: ()=>{},
    agregarCarrito:()=>{},
    restarCarrito:()=>{},
    quitarCarrito:()=>{},
    totalCart:0,
    totalProds:()=>{}

}

export const CartContext= createContext(initialState)

export const CartProvider= ({children})=>{
    const [cart, setCart] = useState([])
    const [categorias,setCategorias]= useState([])
    const [products, setProducts] = useState([])


    const agregarCarrito= (id)=>{
    
        const prod= products.find((prod)=> prod.id=== id)
        if (cart?.length===0){
            setCart([{...prod, cantidad:1}])
        }
        if(cart?.find((product)=> product.id===id)?.cantidad===Number(prod.stock)) return;
        
        if(cart?.length>0 && !cart.find((prod)=> prod.id === id)){
            setCart([...cart,{...prod,cantidad:1}])
        }
        if(cart?.length>0 && cart.find((prod)=> prod.id===id)){
            setCart((ct)=>{
                return ct.map((prod)=>{
                    if(prod.id === id){
                        return {...prod, cantidad: prod.cantidad+1} 
                    }
                    else{
                        return prod
                    }
                })
            })
        }
    }
    const restarCarrito= (id)=>{
        const prod= products.find((prod)=> prod.id=== id)
        if (cart?.find((product)=>product.id === id)?.cantidad===1) return;
        if(cart?.length>0 && cart.find((prod)=> prod.id===id)){
            setCart((ct)=>{
                return ct.map((prod)=>{
                    if(prod.id === id){
                        return {...prod, cantidad: prod.cantidad-1}
                    }
                    else{
                        return prod
                    }
                })
            })
        }
    }
    const quitarCarrito= (id)=>{
        setCart((ct)=>{
            return ct.filter((prod)=> prod.id !== id)
        })
    }
    
    const totalCart=cart.reduce((suma,prod)=> suma+(prod.precio * prod.cantidad), 0)

    const getCantidad= (id)=>{
        return cart.find((prod)=> prod.id === id)?.cantidad || 0
    }
    const totalProds= ()=>{
        return cart.reduce((suma,prod)=> suma+ prod.cantidad,0)
    }

    return(
        <CartContext.Provider value={{cart, setCart,categorias,setCategorias, products, setProducts, restarCarrito, agregarCarrito, quitarCarrito,totalCart,getCantidad,totalProds}} >{children}</CartContext.Provider>
    )
}