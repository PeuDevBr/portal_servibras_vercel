import { useContext, useEffect, useState } from "react"
import { CardListContaienr, CardListTable } from "./styles"
import { ListContext, ProductProps } from "../../context/ListContext"

import Cookies from "js-cookie"

import { Camera } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function CardList() {
  const { productList } = useContext(ListContext)

  const [scrollPosition, setScrollPosition] = useState<any>(
    Cookies.get("scrollPositionNumber")
  )

  useEffect(() => {
    // Restaurar a posição do scroll quando a página for renderizada novamente
    window.scrollTo(0, scrollPosition)
  }, [])

  useEffect(() => {
    // Função para atualizar a posição do scroll
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    // Adiciona o listener para o evento de scroll
    window.addEventListener("scroll", handleScroll)

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleSetScrollPosition = () => {
    Cookies.set("scrollPositionNumber", scrollPosition)
  }

  return (
    <CardListContaienr>
      <CardListTable>
        <tbody>
          {productList.map((product: ProductProps) => {
            return (
              <tr key={product.code}>
                <td>{product.code}</td>
                <td>{product.name.toUpperCase()}</td>
                <td className="brand">{product.brand}</td>
                <td>
                  <NavLink to={`/product/${product.code}`}>
                    <Camera
                      size={26}
                      color="#fdfcfc"
                      onClick={() => handleSetScrollPosition()}
                    />
                  </NavLink>
                </td>
              </tr>
            )
          })}
        </tbody>
      </CardListTable>
    </CardListContaienr>
  )
}
