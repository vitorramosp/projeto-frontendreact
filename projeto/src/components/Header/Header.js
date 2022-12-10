import { HeaderContainer } from "./StyleHeader"
import searchIcon from "./../../assets/lupa.png"
import carrinho from "./../../assets/carrinho-de-compras.png"
import produtos from "./../../assets/produtos.png"

const Header = (props)=>{
    const {goToCartScreen , goToProductsScreen,itemsInCart,filterText,onChangeFilterText} = props

    return(
        <HeaderContainer>
            <a class="logo">
                <p>Foguete Delux</p>
            </a>
            <div>
                <input
                placeholder="search"
                value={filterText}
                onChange={onChangeFilterText}  
                />
                <button>
                    <img src={searchIcon} alt="Search Icon"/>
                </button>
            </div>
            <div className="change-buttons">
                <div>
                    <button onClick={goToProductsScreen}>
                        <img src={produtos} alt="Product Icon"/>
                    </button>
                </div>
                <div>
                    <button onClick={goToCartScreen}>
                        <img src={carrinho} alt="Carrinho Icon"/>
                        {
                        itemsInCart > 0
                        && <span className="cart-badge">{itemsInCart}</span>
                        }
                    </button>
                </div>
            </div>
        </HeaderContainer>
    )
}

export default Header;