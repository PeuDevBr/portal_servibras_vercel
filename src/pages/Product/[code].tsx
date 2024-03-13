import { useContext, useState } from "react"
import { ListContext, ProductProps } from "../../context/ListContext"
import { useParams } from "react-router-dom"
import { ProductContainer } from "./styles"

export function Product() {
  const { productList } = useContext(ListContext)

  const { code } = useParams()

  const product = productList.find(
    (product: ProductProps) => product.code === code
  )

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
    <ProductContainer>
      <div className="ImageContainer">
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
            alt={product.name}
            onError={() => handleImageError(product.code)}
            width={400}
            height={400}
            className="image"
          />
        )}
      </div>

      <section>
        <div className="title">
          <span>{product.name.toUpperCase()}</span>
          {product.version && (
            <span className="version">Versão: {product.version}</span>
          )}
          {product.pnc && <span className="version">PNC: {product.pnc}</span>}
        </div>
        <div className="codeContainer">
          <h2>Cod: {product.code}</h2>
          <h4>{product.brand}</h4>
        </div>
        <div className="productModel">
          <h3>Modelo aplicado:</h3>
          <span>{product.model.toUpperCase()}</span>
        </div>
      </section>
    </ProductContainer>
  )
}
