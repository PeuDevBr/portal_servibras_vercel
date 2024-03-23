import { useContext, useEffect, useState } from "react"

import { NavLink } from "react-router-dom"
import Cookies from "js-cookie"
import { Container, ImageContainer, ProductContainer, ProductContent } from "./styles"
import { ListContext } from "../../context/ListContext"
import { Camera, CheckCircle } from "phosphor-react"

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

  const [imageLoadError, setImageLoadError] = useState<{
    [key: string]: boolean
  }>({})

  // Função para lidar com erros de carregamento de imagem
  const handleImageError = (codigo: string) => {
    setImageLoadError((prevState) => ({
      ...prevState,
      [codigo]: true,
    }))
  }

  return (
    <>
      <Container>
        <div className="gridContainer">
          {productList.map((product) => {
            return (
              <ProductContainer key={product.code}>
                <ImageContainer>
                  {imageLoadError[product.code] ? (
                    <img
                      src="/image/not_found.png" // Caminho para a imagem de 404
                      alt="Imagem não encontrada"
                      width={400}
                      height={400}
                    />
                  ) : (
                    <img
                      src={`/image/${product.code}.png`}
                      onError={() => handleImageError(product.code)}
                    />
                  )}
                </ImageContainer>
                <ProductContent>
                  <div>
                    <h3>{product.code}</h3>
                  </div>

                  <div className="descriptionContainer">
                    <span>{product.name}</span>
                  </div>

                  <div className="buttonContentContainer">
                    <span>{product.brand}</span>

                    <div className="buttonContent">
                      <button>
                        <CheckCircle size={22} weight="fill" />
                      </button>
                      <NavLink to={`/product/${product.code} `}>
                        <button onClick={() => handleSetScrollPosition()}>
                          <Camera size={22} weight="fill" />
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </ProductContent>
              </ProductContainer>
            )
          })}
        </div>
      </Container>
    </>
  )
}
