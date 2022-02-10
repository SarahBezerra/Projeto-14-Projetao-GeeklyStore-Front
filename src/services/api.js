import axios from 'axios'

const BASE_URL = 'http://localhost:5000';

async function getProducts(){
    const products = await axios.get(BASE_URL);
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

const api = {
    getProducts,
    postSignIn,
    postSignUp
  }
  
  export default api;