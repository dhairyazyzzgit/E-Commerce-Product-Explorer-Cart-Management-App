import { useCart } from "../context/CartContext"
import { motion } from "framer-motion"
import { FaLock, FaCreditCard, FaCheckCircle } from "react-icons/fa"

export default function Checkout() {
  const { cart } = useCart()

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
        className="checkout-header"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="page-title">Secure Checkout</h1>
        <p className="cart-subtitle">
          A final look at your order before placing it.
        </p>
      </motion.div>

      {cart.length === 0 ? (
        <motion.div
          className="empty-box luxury-empty"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>No items available for checkout.</h2>
          <p>Add products to your cart to continue.</p>
        </motion.div>
      ) : (
        <div className="checkout-layout">
          <motion.div
            className="checkout-left"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="checkout-panel">
              <div className="checkout-panel-top">
                <h2>Delivery Details</h2>
                <span className="checkout-chip">Premium Delivery</span>
              </div>

              <div className="fake-form-grid">
                <div className="fake-input-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="fake-input-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>

                <div className="fake-input-group full-span">
                  <label>Shipping Address</label>
                  <input type="text" placeholder="221B Baker Street, London" />
                </div>

                <div className="fake-input-group">
                  <label>City</label>
                  <input type="text" placeholder="Bengaluru" />
                </div>

                <div className="fake-input-group">
                  <label>Postal Code</label>
                  <input type="text" placeholder="560001" />
                </div>
              </div>
            </div>

            <div className="checkout-panel">
              <div className="checkout-panel-top">
                <h2>Payment Method</h2>
                <span className="checkout-chip dark-chip">
                  <FaLock /> Secure
                </span>
              </div>

              <div className="payment-card-box">
                <div className="payment-icon">
                  <FaCreditCard />
                </div>

                <div>
                  <h3>Credit / Debit Card</h3>
                  <p>Fast, secure, and encrypted payment experience.</p>
                </div>
              </div>

              <div className="fake-form-grid">
                <div className="fake-input-group full-span">
                  <label>Card Number</label>
                  <input type="text" placeholder="1234 5678 9012 3456" />
                </div>

                <div className="fake-input-group">
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" />
                </div>

                <div className="fake-input-group">
                  <label>CVV</label>
                  <input type="password" placeholder="123" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="checkout-right"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="checkout-summary-luxury">
              <h2>Order Review</h2>

              <div className="checkout-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="checkout-luxury-item">
                    <div className="checkout-luxury-item-left">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="checkout-thumb"
                      />
                      <div>
                        <p className="checkout-item-title">{item.title}</p>
                        <p className="checkout-item-sub">
                          Qty {item.quantity} × ${item.price}
                        </p>
                      </div>
                    </div>

                    <span className="checkout-item-total">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="summary-divider" />

              <div className="summary-line">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-line">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>

              <div className="summary-line">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider" />

              <div className="summary-line total-line">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button className="place-order-btn">
                <FaCheckCircle />
                Place Order
              </button>

              <p className="secure-note">
                <FaLock /> Protected checkout with encrypted transaction flow
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}