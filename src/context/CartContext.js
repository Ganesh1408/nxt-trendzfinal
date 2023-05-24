import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
   incrementCartItem: ()=>{},
    removeAllCartItems: ()=>{},
    decrementCartItem: ()=>{},

})

export default CartContext
