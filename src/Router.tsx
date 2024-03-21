import { Routes, Route } from "react-router-dom"
import { Product } from "./pages/Product/[code]"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Home } from "./pages/Home"
import { CardList } from "./pages/List"
import Catalog from "./pages/Calotog"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/list" element={<CardList />} />
        <Route path="/product/:code" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}
