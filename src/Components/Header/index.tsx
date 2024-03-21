import productList from "../../../products.json"
import { useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

import { useContext } from "react"
import { ListContext } from "../../context/ListContext"

import { useLocation, useNavigate } from "react-router-dom"

import {
  CartContainer,
  FormContainer,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
} from "./styles"

import { MagnifyingGlass, ShoppingCart, KeyReturn } from "phosphor-react"

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
  const location = useLocation()
  const navigation = useNavigate()

  function handleCreateNewList(data: NewListFormData) {
    const searchText = data.textInput.toLowerCase().trim()

    if (searchText !== "") {
      const filteredList = productList.filter((product) => {
        // Aqui você pode ajustar as condições de acordo com sua necessidade
        return Object.values(product).some(
          (proprietyValue) =>
            typeof proprietyValue === "string" &&
            proprietyValue.toLowerCase().includes(searchText)
        )
      })
      updateProductsList(filteredList)
      window.scrollTo(0, 0)
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          {location.pathname !== "/" && (
            <div className="linkToHome" onClick={() => navigation(-1)}>
              <KeyReturn size={32} color="#e0e0e0" weight="thin" />
            </div>
          )}
          <span>Servibras</span>
        </LogoContainer>

        {location.pathname === "/catalog" && (
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
        )}

        {location.pathname === "/list" && (
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
        )}

        <CartContainer>
          <NavLink to="#">
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </NavLink>
        </CartContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
