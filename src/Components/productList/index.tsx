import { useContext } from "react"
import { CardListContaienr, CardListTable } from "./styles"
import { ListContext, ProductProps } from "../../context/ListContext"

import { Camera } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function CardList() {
  const { productList } = useContext(ListContext)

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
                    <Camera size={26} color="#fdfcfc" />
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
