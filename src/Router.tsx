import { Routes, Route } from "react-router-dom"
import { Catalog } from "./pages/Calotog"
import { Product } from "./pages/Product"
import { DefaultLayout } from "./layouts/DefaultLayout"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  )
}
