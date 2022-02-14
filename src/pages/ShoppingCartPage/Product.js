import api from "../../services/api";

export default function Product({ product, token }){
    
    async function deleteThisProduct() {

        const confirmation = window.confirm("Realmente deseja excluir esse item do seu carrinho?")

        if(!confirmation) {
            return
        }

        try {
            const sucess = await api.deleteProduct(token, product._id);
            console.log(sucess)
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <ul>
            <img src={product.image} alt={product.name}/>
            <div className='infos'>
                <p className="name">{product.name}</p>
                <p className="price">R$ {product.price}</p>
                <ion-icon onClick={deleteThisProduct} name="trash-outline"></ion-icon>
            </div>
        </ul>
    )

}