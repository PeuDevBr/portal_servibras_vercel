import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { Catalog } from "./pages/Calotog"
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Catalog/>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
