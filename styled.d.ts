import 'styled-components'

import { ThemeTypes } from 'assets/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}
