import { useState, useEffect } from "react"
import useProducts from "../hooks/useProducts"
import ProductCard from "../components/ProductCard"
import { motion } from "framer-motion"

export default function Products() {
  const allProducts = useProducts()

  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 400)

    return () => clearTimeout(timer)
  }, [search])

  if (!allProducts || allProducts.length === 0) {
    return <h2 className="page-message">Loading products...</h2>
  }

  const categories = ["All", ...new Set(allProducts.map((p) => p.category))]

  let filtered = allProducts
    .filter((p) =>
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    .filter((p) => (category === "all" ? true : p.category === category))

  if (sort === "low-high") {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sort === "high-low") {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  return (
    <div className="products-page">
      <motion.div
        className="products-header"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Shop the Collection</h1>
        <p>Find your next favorite product with refined browsing tools.</p>
      </motion.div>

      <motion.div
        className="filters-shell"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
      >
        <div className="filters-bar">
          <input
            type="text"
            placeholder="Search by product name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-select"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="filter-select"
          >
            <option value="">Sort By</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </motion.div>

      {filtered.length === 0 ? (
        <p className="page-message">No products found.</p>
      ) : (
        <div className="products-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}