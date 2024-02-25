import "styled-components"
import { defaultTheme } from "../styles/themes/default"

type ThemeType = typeof defaultTheme

declare module "Styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
