import axios from 'axios'

const BASE_URL = 'http://localhost:5000';//https://geekly-project-back.herokuapp.com

async function getProducts(){
    const products = await axios.get(`${BASE_URL}/`);
    return products;
}

async function postSignIn(form){
    try {

        const userForm = await axios.post(`${BASE_URL}/sign-in`, form);
        return userForm;
        
    } catch (error) {

        console.log(error);
    }
}

async function postSignUp(form){
    
    try {
        
        const userSignUp = await axios.post(`${BASE_URL}/sign-up`, form);
        return userSignUp.status;

    } catch (error) {

        console.log(error)
    }
}

function createConfig(token) {
    return {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  }

async function addItemShoppingCart(token, productId){

    const config = createConfig(token);
    
    try {
        const response = await axios.post(`${BASE_URL}/add-product-in-cart`, {productId}, config);
        return response;

    } catch (error) {
        console.log(error)
    }
}

async function getProductsFromCart(token){
    const config = createConfig(token);

    try {
        const response = await axios.get(`${BASE_URL}/shopping-cart`, config);
        return response;

    } catch (error) {
        console.log(error)
    }    
}

async function buyProducts(token, products){
    const config = createConfig(token);

    try {
        const response = await axios.post(`${BASE_URL}/buy`, {products}, config);
        return response;

    } catch (error) {
        console.log(error)
    }    
}

async function deleteProduct(token, productId){
    const config = createConfig(token);

    try {
        const response = await axios.delete(`${BASE_URL}/delete-product/${productId}`, config);
        return response;

    } catch (error) {
        console.log(error)
    }    
}

const api = {
    getProducts,
    postSignIn,
    postSignUp,
    addItemShoppingCart,
    getProductsFromCart,
    buyProducts,
    deleteProduct
  }
  
  export default api;