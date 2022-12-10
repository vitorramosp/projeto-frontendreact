import ProductsCard from "../../components/ProductCard/ProductsCard"
import { Main } from "./StyledCartScreen"
import{priceFormatter} from "./../../utils/priceFormatter"

function CartScreen(props) {
const { cart,increaseQuantityInCart,decreaseQuantityInCart,deleteFromCart}= props

const total = cart.reduce(
        (acc, product) => product.price * product.quantity + acc,
        0
    )

  return (
    <Main>
      <section>
        <h1>Carrinho | Total = {priceFormatter.format(total)}</h1>
        <hr/>
        {cart.map((product) => (
                      <ProductsCard
                          produtos={product}
                          key={product.id}
                          isOnCartScreen={true}
                          increaseQuantityInCart={increaseQuantityInCart}
                          decreaseQuantityInCart={decreaseQuantityInCart}
                          deleteFromCart={deleteFromCart}
                        />
                ))}
      </section>
    </Main>
  )
  }
  
  export default CartScreen