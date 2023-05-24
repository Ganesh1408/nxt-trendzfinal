import Header from '../Header'
import CartListView from '../CartListView'
import CartContext from '../../context/CartContext'

import './index.css'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyCartView = cartList.length === 0
      const onClickRemoveAll = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyCartView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="heading-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-all-btn"
                    type="button"
                    onClick={onClickRemoveAll}
                  >
                    Remove all
                  </button>
                </div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
