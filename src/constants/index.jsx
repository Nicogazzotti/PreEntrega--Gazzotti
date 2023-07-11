const BASE_URL= 'https://64ac7dff9edb4181202f9559.mockapi.io';


export const API_URLS ={
    PRODUCTS: {
        url: `${BASE_URL}/products`, 
        config: {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            }
        }
    }
} 