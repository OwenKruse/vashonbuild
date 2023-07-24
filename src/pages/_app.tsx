import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import {createTheme} from "@mui/material";
import { ThemeOptions } from '@mui/material/styles/createTheme';
import Footer from "@/components/Footer";

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
            <Footer></Footer>
        </ThemeProvider>
    )
}

export default MyApp