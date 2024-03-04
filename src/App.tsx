import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"

import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"
import { ListContextProvider } from "./context/ListContext"
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ListContextProvider>
          <Router />
        </ListContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
