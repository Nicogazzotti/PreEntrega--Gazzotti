import {addDoc, collection, doc, getDoc, getFirestore,  updateDoc} from 'firebase/firestore'



export const firebaseServices= {
    createOrder: async (order) =>{
        try{
            const db= getFirestore()
            const ordersCol= collection(db, 'orders')
            const orderCreated = await addDoc(ordersCol, order)
            
            return { id: orderCreated.id}

        }catch(error){
            return {error}
        }
    },
    createCart: async(cart)=>{
        try{
            const db= getFirestore()
            const cartCol= collection(db, 'carts')
            const cartCreated= await addDoc(cartCol, cart)
            return{id: cartCreated.id}
        }catch(error){
            return {error}
        } 
    },
    updateCart: async (ctId)=>{
        try{
            console.log('updateCart cartId', ctId)
            const db= getFirestore()
            const docRef= doc(db, 'carts', ctId)
            const data= {
                status: 'completed'
            }
            await updateDoc(docRef, data)
            

        } catch(error){
            console.error(error)
            return {error}
        }
    },
    getCartById: async (cartId)=>{
        try{
            const db= getFirestore()
            const docRef= doc(db, 'carts', cartId)
            const res= await getDoc(docRef)
            return res.data()
        } catch(error){
            return {error}
        }
    }
}