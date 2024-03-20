import { ReactNode, createContext, useState } from "react"

import initialList from "../../productsList.json"

interface ListContextProviderProps {
  children: ReactNode
}

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

interface ListContextType {
  productList: ProductProps[]
  updateProductsList: (newList: ProductProps[]) => void
}

export const ListContext = createContext({} as ListContextType)

export function ListContextProvider({ children }: ListContextProviderProps) {
  const [productList, setProductList] = useState<ProductProps[]>(initialList)

  function updateProductsList(newList: ProductProps[]) {
    setProductList(newList)
  }
  return (
    <ListContext.Provider value={{ productList, updateProductsList }}>
      {children}
    </ListContext.Provider>
  )
}
