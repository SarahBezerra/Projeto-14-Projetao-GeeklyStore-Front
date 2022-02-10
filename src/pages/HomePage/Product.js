export default function Product({ product }){
    return(
        <ul>
            <img src={product.img} alt={product.name}/>
            <div className='infos'>
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="price">R$ {product.price}</p>
                <ion-icon name="cart-outline"></ion-icon>
            </div>
        </ul>
    )
}