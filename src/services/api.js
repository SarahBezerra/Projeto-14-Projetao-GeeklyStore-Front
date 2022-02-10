import axios from 'axios'

const BASE_URL = 'http://localhost:5000';

async function getProducts(){
    const products = await axios.get(BASE_URL);
    return products;
}

const api = {
    getProducts
  }
  
  export default api;