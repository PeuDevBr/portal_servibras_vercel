import list from "../../../products.json"

import {
  CartContainer,
  FormContainer,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
} from "./styles"
import { MagnifyingGlass, ShoppingCart } from "phosphor-react"

export function Header({ setProductList }: any) {
  const handleSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    const searchTerm = (
      document.querySelector('input[type="text"]') as HTMLInputElement
    ).value
      .toLowerCase()
      .trim()
    const filteredResults = list.filter((item) => {
      // Aqui você pode ajustar as condições de acordo com sua necessidade
      return Object.values(item).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(searchTerm)
      )
    })
    setProductList(filteredResults)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <span>Servibras</span>
        </LogoContainer>

        <FormContainer autoComplete="off">
          <input type="text" placeholder="Pesquisar" />
          <button type="submit" onClick={handleSearch}>
            <MagnifyingGlass size={22} color="#FFFFFF" />
          </button>
        </FormContainer>

        <CartContainer>
          <a href="">
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </a>
        </CartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
