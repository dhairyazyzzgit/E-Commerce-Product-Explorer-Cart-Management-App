import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart()

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="page-container">
      <h1 className="page-title">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-box">
          <p>Your cart is empty.</p>
          <Link to="/products" className="hero-btn primary-hero-btn">
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="list-container">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="list-card"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="qty-actions">
                  <button onClick={() => increaseQty(item.id)} className="small-btn">+</button>
                  <button onClick={() => decreaseQty(item.id)} className="small-btn">-</button>
                  <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="summary-box">
            <h2>Subtotal: ${subtotal.toFixed(2)}</h2>
            <Link to="/checkout" className="hero-btn primary-hero-btn">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}