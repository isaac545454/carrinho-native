import { useState, createContext } from "react";

export const CartContext = createContext({})


function CartProvider({children}) {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  function AddItemCart(newItem){
    const indexItem = cart.findIndex(item => item.id === newItem.id)

    if(indexItem !== -1){
      let cartList = cart 

      cartList[indexItem].amount = cartList[indexItem].amount + 1
      cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price
      console.log([...cart, data]);
      setCart(cartList)
      TotalResultsCart(cartList)
      return
    }
    let data = {
      ...newItem, 
      amount: 1,
      total: newItem.price
    }

    setCart(products => [...products, data])
    TotalResultsCart([...cart, data])
    console.log([...cart, data]);
  }

  function RemoveItemCart(Item) {
    const indexItem = cart.findIndex(item => item.id === Item.id)

    if(cart[indexItem]?.amount > 1){
      let cartList = cart 
       
      cartList[indexItem].amount = cartList[indexItem].amount - 1
      cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price
      setCart(cartList)
      TotalResultsCart(cartList)
      return
    }

    const removeItem = cart.filter(item => item.id !== Item.id)
    TotalResultsCart(removeItem)
    setCart(removeItem)
  }

  function TotalResultsCart(items ) {
    let MyCart = items 
    let result = MyCart.reduce((acc, obj)=>{return acc + obj.total}, 0)
    setTotal(result.toFixed(2))

  }

  return(
    <CartContext.Provider
    value={
      {
        cart, 
        AddItemCart, 
        RemoveItemCart, 
        total
      }}
    >
    {children}
    </CartContext.Provider>
    )
}

export default CartProvider
