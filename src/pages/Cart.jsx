import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaMinus, FaPlus, FaTrash, FaArrowRight } from "react-icons/fa"

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const shipping = cart.length > 0 ? 20 : 0
  const tax = subtotal * 0.18
  const total = subtotal + shipping + tax

  return (
    <div className="page-container">
      <motion.div
        className="cart-header"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="page-title">Shopping Cart</h1>
        <p className="cart-subtitle">
          Review your selected items and move to checkout when you're ready.
        </p>
      </motion.div>

      {cart.length === 0 ? (
        <motion.div
          className="empty-box luxury-empty"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Your cart feels a little empty.</h2>
          <p>Explore the collection and add something exceptional.</p>
          <Link to="/products" className="hero-btn primary-hero-btn">
            Continue Shopping
          </Link>
        </motion.div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                className="cart-item-card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="cart-item-image-box">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="cart-item-image"
                  />
                </div>

                <div className="cart-item-info">
                  <p className="cart-item-category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p className="cart-item-price">${item.price}</p>
                  <p className="cart-item-line-total">
                    Item Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="cart-item-actions">
                  <div className="qty-control">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="qty-btn"
                    >
                      <FaMinus />
                    </button>

                    <span className="qty-value">{item.quantity}</span>

                    <button
                      onClick={() => increaseQty(item.id)}
                      className="qty-btn"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn btn-danger"
                  >
                    <FaTrash />
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="cart-summary-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2>Order Summary</h2>

            <div className="summary-line">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>

            <div className="summary-line">
              <span>Tax (18%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>

            <div className="summary-divider" />

            <div className="summary-line total-line">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="checkout-main-btn">
              Proceed to Checkout <FaArrowRight />
            </Link>

            <Link to="/products" className="continue-shopping-link">
              Continue shopping
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  )
}