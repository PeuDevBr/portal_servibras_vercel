import { useContext, useEffect, useState } from "react"

import { NavLink } from "react-router-dom"
/* import Head from 'next/head' */
import Cookies from "js-cookie"
import { Container } from "./styles"
import { ListContext } from "../../context/ListContext"

export default function Catalog() {
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
    <>
      <Container>
        <div className="gridContainer">
          {productList.map((product) => {
            return (
              <div key={product.code} className="productContainer">
                <div className="productContent">
                  <div className="brandContainer">
                    <span className="brand">{product.brand}</span>
                  </div>
                  <img
                    src={`/image/${product.code}.png`}
                    width={120}
                    height={120}
                    className="image"
                    alt={product.name}
                  />
                  <h2 className="name">{product.name.toUpperCase()}</h2>
                  <h2 className="code">{product.code}</h2>
                  <section>
                    <button className="productButton" id="add">
                      ADICIONAR
                    </button>
                    <NavLink to={`/product/${product.code} `}>
                      <button
                        className="productButton"
                        id="verify"
                        onClick={() => handleSetScrollPosition()}
                      >
                        VERIFICAR
                      </button>
                    </NavLink>
                  </section>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}
