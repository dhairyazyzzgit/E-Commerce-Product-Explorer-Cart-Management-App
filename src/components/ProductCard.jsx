import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import { toast } from "react-toastify"
import { motion } from "framer-motion"
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa"

export default function ProductCard({ product }) {
  const { cart, addToCart } = useCart()
  const { wishlist, addToWishlist } = useWishlist()

  if (!product) return null

  const isInCart = cart.some((item) => item.id === product.id)
  const isInWishlist = wishlist.some((item) => item.id === product.id)

  const handleCart = () => {
    if (!isInCart) {
      addToCart(product)
      toast.success("Added to cart")
    }
  }

  const handleWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product)
      toast.success("Added to wishlist")
    }
  }

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image-box">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </div>

        <h3 className="product-title">{product.title}</h3>
      </Link>

      <div className="product-meta">
        <p className="product-price">${product.price}</p>
        <p className="product-rating">
          <FaStar /> {product.rating}
        </p>
      </div>

      <p className="product-category">{product.category}</p>

      <div className="product-actions">
        <button
          onClick={handleCart}
          disabled={isInCart}
          className={`btn ${isInCart ? "btn-success" : "btn-primary"}`}
        >
          <FaShoppingCart />
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>

        <button
          onClick={handleWishlist}
          disabled={isInWishlist}
          className={`btn ${isInWishlist ? "btn-wishlist-added" : "btn-wishlist"}`}
        >
          <FaHeart />
          {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </motion.div>
  )
}