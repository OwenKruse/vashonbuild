import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import {createTheme} from "@mui/material";
import { ThemeOptions } from '@mui/material/styles/createTheme';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#2c2a2e',
    },
    secondary: {
      main: '#ab592e',
    },
  },
};


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={createTheme(themeOptions)}>
        <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp