import api from "../../services/api";

export default function Product({ product, token }){

    async function addProductInCart() {
        if(!token) {
            alert("Para continuar faça login ou cadastre-se");
            return;
        }

        try {
            const response = await api.addItemShoppingCart(token, product._id);
            console.log(response)

        } catch(error) {
            console.log(error);
        }
    }

    return(
        <ul>
            <img src={product.image} alt={product.name}/>
            <div className='infos'>
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="price">R$ {product.price}</p>
                <ion-icon name="cart-outline" onClick={addProductInCart}></ion-icon>
            </div>
        </ul>
    )
}