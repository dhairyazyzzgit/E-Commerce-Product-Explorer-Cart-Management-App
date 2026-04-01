import { useEffect, useState } from "react"
import { getProducts } from "../services/api"

export default function useProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
  }, [])

  return products
}