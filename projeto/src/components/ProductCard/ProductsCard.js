import { ProductCardContainer } from "./StyledProductsCard"
import { priceFormatter } from "./../../utils/priceFormatter"


function ProductsCard (props) {
    const {produtos, addToCart, isOnProductsScreen,isOnCartScreen,increaseQuantityInCart, decreaseQuantityInCart,deleteFromCart} = props

    return(
        <ProductCardContainer>
             <img src={produtos.imageUrl} alt={produtos.imageAlt} />
            <div>
                <div className="card-header">
                    <h2>{produtos.name}</h2>
                
                </div>
                <div className="card-price-and-cart-action">
                    <span>{priceFormatter.format(produtos.price)}</span>
                    {
                        isOnCartScreen && produtos.quantity > 1
                        && <button
                                onClick={() => decreaseQuantityInCart(produtos)}
                        >
                            -
                        </button> 
                    }
                    {
                        isOnCartScreen
                        && <button
                            onClick={() => increaseQuantityInCart(produtos)}
                        >
                            +
                        </button> 
                    }

                    {
                        isOnProductsScreen
                        && <button onClick={() => addToCart(produtos)}>+ Add to cart</button>
                    }
                    {
                        isOnCartScreen
                        && <span>Qtd: {produtos.quantity}</span>
                    }
                    {
                        isOnCartScreen
                        && <button
                            className="cart-card-delete-btn"
                            onClick={() => deleteFromCart(produtos)}
                        >
                            x
                        </button>
                    }
                </div>
            </div>
        </ProductCardContainer>
    )
}

export default ProductsCard