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

interface NewListFormData {
  textInput: string
}

export function Header() {
  const { register, handleSubmit } = useForm<NewListFormData>({
    defaultValues: {
      textInput: "",
    },
  })
  const { updateProductsList } = useContext(ListContext)

  function handleCreateNewList(data: NewListFormData) {
    const searchText = data.textInput.toLowerCase().trim()

    const filteredList = list.filter((product) => {
      // Aqui você pode ajustar as condições de acordo com sua necessidade
      return Object.values(product).some(
        (proprietyValue) =>
          typeof proprietyValue === "string" &&
          proprietyValue.toLowerCase().includes(searchText)
      )
    })
    updateProductsList(filteredList)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <NavLink to="/" className="linkToHome">
            <span>Servibras</span>
          </NavLink>
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
          <NavLink to="#">
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </NavLink>
        </CartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
