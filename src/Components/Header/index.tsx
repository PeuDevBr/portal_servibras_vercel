import {
  FormContainer,
  HeaderContainer,
  HeaderContent,
  LogoContainer,
} from "./styles"
import { MagnifyingGlass, ShoppingCart } from "phosphor-react"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoContainer>
          <span>Servibras</span>
        </LogoContainer>

        <FormContainer autoComplete="off">
          <input type="text" placeholder="Pesquisar" />
          <button type="submit">
            <MagnifyingGlass size={22} color="#FFFFFF" />
          </button>
        </FormContainer>

        <div>
          <a href="">
            <ShoppingCart size={32} color="#ffffff" weight="fill" />
          </a>
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
