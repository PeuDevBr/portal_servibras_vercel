import { CardListContaienr, CardListTable } from "./styles"

export function CardList({ productList }: any) {
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
