import { useContext } from "react"
import { CardListContaienr, CardListTable } from "./styles"
import { ListContext } from "../../context/ListContext"

export function CardList() {
  const { productList } = useContext(ListContext)
  
  return (
    <CardListContaienr>
      <CardListTable>
        <tbody>
          {productList.map((product: any) => {
            return (
              <tr key={product.code}>
                <td>{product.code}</td>
                <td>{product.name.toUpperCase()}</td>
                <td>{product.brand}</td>
              </tr>
            )
          })}
        </tbody>
      </CardListTable>
    </CardListContaienr>
  )
}
