import { ReactNode, createContext, useState } from "react"

import initialList from "../../productsList.json"

export const ListContext = createContext({} as any)

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

export function ListContextProvider({ children }: ListContextProviderProps) {
  const [productList, setProductList] = useState<ProductProps[]>(initialList)

  function updateProductsList(newList: any) {
    setProductList(newList)
  }
  return (
    <ListContext.Provider value={{ productList, updateProductsList }}>
      {children}
    </ListContext.Provider>
  )
}
