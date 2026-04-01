import { Link } from "react-router-dom"
import { FaShoppingBag, FaHeart, FaStore } from "react-icons/fa"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import { motion } from "framer-motion"
import Checkout from "../pages/Checkout"

export default function Navbar() {
  const { cart } = useCart()
  const { wishlist } = useWishlist()

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
    >
      <div className="navbar-left">
        <Link to="/" className="brand">
          <span className="brand-badge">
            <FaStore />
          </span>
          <span>Shopix</span>
        </Link>
      </div>

      <div className="navbar-center">
        <Link 
  to="/" 
  className="nav-link" 
  style={{ 
    color: "#1f1714",
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: "0.6px"
  }}
>
  Home
</Link>

<Link 
  to="/products" 
  className="nav-link" 
  style={{ 
    color: "#1f1714",
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: "0.6px"
  }}
>
  Shop
</Link>

<Link 
  to="/checkout" 
  className="nav-link" 
  style={{ 
    color: "#1f1714",
    fontWeight: "700",
    fontSize: "1.2rem",
    letterSpacing: "0.6px"
  }}
>
  Checkout
</Link>
      </div>

      <div className="navbar-right">
        <Link to="/wishlist" className="nav-icon">
          <FaHeart />
          <span className="badge">{wishlist.length}</span>
        </Link>

        <Link to="/cart" className="nav-icon">
          <FaShoppingBag />
          <span className="badge">{cartCount}</span>
        </Link>
      </div>
    </motion.nav>
  )
}