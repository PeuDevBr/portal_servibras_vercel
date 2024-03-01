import { useState } from "react"
/* import { createContext, useContext } from "react" */
import initialList from "../../../productsList.json"
import { CardList } from "../../Components/productList"
import { Header } from "../../Components/Header"

export interface ProductProps {
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

/* const ProcuctListContext = createContext({
  productsList: initialList,
}) */

export function Catalog() {
  /* const { productsList } = useContext(ProcuctListContext) */
  const [productList, setProductList] = useState<ProductProps[]>(initialList)

  function updateProductsList(newList: any) {
    setProductList(newList)
  }
  return (
    <>
      <Header onUpdateProductList={updateProductsList} />
      <CardList productList={productList} />
    </>
  )
}
