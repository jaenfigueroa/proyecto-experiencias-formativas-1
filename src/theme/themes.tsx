import { Theme, createTheme, responsiveFontSizes } from '@mui/material'
import { esES } from '@mui/material/locale'

export const THEME_LIGHT: Theme = responsiveFontSizes(
  createTheme(
    {
      palette: {
        mode: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#036e68',
        },
      },
    },
    esES,
  ),
)
