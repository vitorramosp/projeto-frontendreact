import produtos from "./../../assets/products.json"
import { Main } from "./ProductsScreen.styled"
import ProductsCard from "../../components/ProductCard/ProductsCard"

function ProductsScreen(props) {

  const{addToCart,filterText} = props

  const filterProductsByText = () => {
    return produtos.filter(
        (produtos) => produtos.name.toLowerCase().includes(filterText.toLowerCase())
    )
}

    return (
      <Main >
        <section>
          <h1>Produtos</h1>
          <hr/>
          {
            filterProductsByText()
          .map((products)=>(
            <ProductsCard 
              produtos={products}
              key={products.id}
              addToCart={addToCart}
              isOnProductsScreen={true}
            />
          ))}
        </section>
      </Main>
    )
  }
  
  export default ProductsScreen