import Header from '../../components/Header'
import Category from './Category'
import Product from './Product'

import { Categories, CategoryList, Products, ProductsList, Footer } from './HomeStyle'
import categoriesData from '../../dates/categoriesData'

export default function HomePage(){

    return(
        <>
        <Header></Header>

        <Categories>
            <h2>Categorias</h2>
            <CategoryList>
                <li>
                    {categoriesData.map(category => <Category key={category.name} category={category}/>)}
                </li>
            </CategoryList>
        </Categories>

        <Products>
            <h2>Loja</h2>
            <ProductsList>
                {categoriesData.map(category => <Product key={category.name} category={category}/>)}
            </ProductsList>
        </Products>

        <Footer>Geekly Corporation</Footer>
        </>
    )
}
