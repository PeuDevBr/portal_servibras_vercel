import list from "../../../products.json"
import { useForm } from "react-hook-form"

import {
  CartContainer,
  FormContainer,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
} from "./styles"

import { MagnifyingGlass, ShoppingCart } from "phosphor-react"
import { useContext } from "react"
import { ListContext } from "../../context/ListContext"

export function Header() {
  const { register, handleSubmit } = useForm()
  const { updateProductsList } = useContext(ListContext)

   function handleCreateNewList(data: any) {
    const searchText = data.searchText.toLowerCase().trim() 

    const filteredList = list.filter((product) => {
      // Aqui você pode ajustar as condições de acordo com sua necessidade
      return Object.values(product).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(searchText)
      )
    })
    updateProductsList(filteredList)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <span>Servibras</span>
        </LogoContainer>

        <FormContainer
          autoComplete="off"
          onSubmit={handleSubmit(handleCreateNewList)}
        >
          <input
            id="searchText"
            type="text"
            title="searchInput"
            placeholder="Pesquisar"
            {...register("searchText")}
          />
          <button type="submit" title="searchButton">
            <MagnifyingGlass size={22} color="#FFFFFF" />
          </button>
        </FormContainer>

        <CartContainer>
          <a href="#" title="cartLink">
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </a>
        </CartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
