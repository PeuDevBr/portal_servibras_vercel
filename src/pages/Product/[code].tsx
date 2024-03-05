import { useContext } from "react"
import { ListContext } from "../../context/ListContext"
import { useParams } from "react-router-dom"

export function Product() {
  const { productList } = useContext(ListContext)

  const { code } = useParams()

  const product = productList.find((product: any) => product.code === code)

  return (
    <div>
      <div>
        <h1>{product.name}</h1>

        <div>
          <h3>Cod: {product.code}</h3>
          <p>{product.brand}</p>
        </div>

        <div>
          <p>Modelo aplicado</p>
          <p>{product.model}</p>
        </div>
      </div>
    </div>
  )
}
