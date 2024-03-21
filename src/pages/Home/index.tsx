import { NavLink } from "react-router-dom"
import { HomeContaienr } from "./styles"

export function Home() {
  return (
    <HomeContaienr>
      <NavLink to={"/list"} className="link">
        Lista de Peças
      </NavLink>

      <NavLink to={"/catalog"} className="link">
        Catálogo de Peças
      </NavLink>
    </HomeContaienr>
  )
}
