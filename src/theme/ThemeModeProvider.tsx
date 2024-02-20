import { PropsWithChildren } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { THEME_LIGHT } from './themes'

const ThemeModeProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={THEME_LIGHT}>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
)

export default ThemeModeProvider
