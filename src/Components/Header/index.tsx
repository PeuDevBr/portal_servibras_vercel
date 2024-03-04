import list from "../../../products.json"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

import { useContext } from "react"
import { ListContext } from "../../context/ListContext"

import {
  CartContainer,
  FormContainer,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
} from "./styles"

import { MagnifyingGlass, ShoppingCart } from "phosphor-react"

export function Header() {
  const { register, handleSubmit } = useForm()
  const { updateProductsList } = useContext(ListContext)

  function handleCreateNewList(data: any) {
    const searchText = data.textInput.toLowerCase().trim()

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
            id="searchInput"
            type="text"
            placeholder="Pesquisar"
            {...register("textInput")}
          />
          <button type="submit">
            <MagnifyingGlass size={22} color="#FFFFFF" />
          </button>
        </FormContainer>

        <CartContainer>
          <NavLink to="/product">
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </NavLink>
        </CartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
