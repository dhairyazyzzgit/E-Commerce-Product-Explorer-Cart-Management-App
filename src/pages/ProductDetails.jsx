import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../services/api"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"
import { toast } from "react-toastify"
import { motion } from "framer-motion"

export default function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { cart, addToCart } = useCart()
  const { wishlist, addToWishlist } = useWishlist()

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
  }, [id])

  if (!product) return <h2 className="page-message">Loading product...</h2>

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
    <div className="details-page">
      <motion.div
        className="details-card"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="details-image-box">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="details-image"
          />
        </div>

        <div className="details-info">
          <p className="details-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="details-description">{product.description}</p>
          <p className="details-price">${product.price}</p>
          <p className="details-rating">⭐ {product.rating}</p>

          <div className="details-actions">
            <button
              onClick={handleCart}
              disabled={isInCart}
              className={`btn ${isInCart ? "btn-success" : "btn-primary"}`}
            >
              {isInCart ? "Added to Cart" : "Add to Cart"}
            </button>

            <button
              onClick={handleWishlist}
              disabled={isInWishlist}
              className={`btn ${isInWishlist ? "btn-wishlist-added" : "btn-wishlist"}`}
            >
              {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}