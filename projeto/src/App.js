import { useState } from 'react'
import Header from './components/Header/Header'
import CartScreen from './screens/Cart/CartScreen'
import ProductsScreen from './screens/Products/ProductsScreen'

function App() {

  const [activeScreen, setActiveScreen] = useState("ProductsScreen")
  const [cart ,setCart] = useState([])
  const [ filterText, setFilterText ] = useState("")

  
  const goToProductsScreen = () => setActiveScreen("ProductsScreen")
  const goToCartScreen = () => setActiveScreen("CartScreen")

  const addToCart = (productToAdd) =>{
    const newCart = [...cart]

    const productFound = newCart.find(
      (productInCart) => productInCart.id === productToAdd.id
    )
    if(!productFound) {
      const newProduct = {...productToAdd, quantity: 1}
      newCart.push(newProduct)
    }

    setCart(newCart)
  }

  const increaseQuantityInCart = (productToIncrease) => {
    const newCart = [...cart]

    const productFound = newCart.find(
        (productInCart) => productInCart.id === productToIncrease.id
    )

    productFound.quantity++

    setCart(newCart)
}

const decreaseQuantityInCart = (productToDecrease) => {
  const newCart = [...cart]

  const productFound = newCart.find(
      (productInCart) => productInCart.id === productToDecrease.id
  )

  productFound.quantity--

  setCart(newCart)
}
const deleteFromCart = (productToDelete) => {
  const newCart = [...cart]

  const indexFound = newCart.findIndex(
      (productInCart) => productInCart.id === productToDelete.id
  )

  newCart.splice(indexFound, 1)
  setCart(newCart)
}

const onChangeFilterText = (e) => {
  setFilterText(e.target.value)
}



const renderScreen = () => {
  switch (activeScreen) {
    case "ProductsScreen":
      return <ProductsScreen
          addToCart={addToCart}
          filterText={filterText}/>
    case "CartScreen":
      return <CartScreen 
        cart = {cart}
        increaseQuantityInCart={increaseQuantityInCart}
        decreaseQuantityInCart={decreaseQuantityInCart}
        deleteFromCart={deleteFromCart}
      />
      default:
        <div> ERRORR</div>
  }
}
  return(
    <>
      <Header
        goToCartScreen={goToCartScreen}
        goToProductsScreen={goToProductsScreen}
        itensInCart={cart.length}
        filterText={filterText}
        onChangeFilterText={onChangeFilterText}
        />
      {renderScreen()}
    </>
  )

  
}

export default App