import { Routes, Route} from "react-router-dom"
import { Catalog } from "./pages/Calotog"
import { Product } from "./pages/Product"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  )
}