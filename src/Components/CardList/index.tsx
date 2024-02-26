import { useState } from "react"
import initialList from "../../../productsList.json"
import { CardListContaienr, CardListTable } from "./styles"

interface ProductProps {
  name: string
  code: string
  brand: string
  subject: string
  model: string
  version?: string
  pnc?: string
  quantaty: number
  title: string
}

export function CardList() {
  const [productList] = useState<ProductProps[]>(initialList)

  return (
    <CardListContaienr>
      <CardListTable>
        <tbody>
          {productList.map((product) => {
            return (
              <tr>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
              </tr>
            )
          })}
        </tbody>
      </CardListTable>
    </CardListContaienr>
  )
}
