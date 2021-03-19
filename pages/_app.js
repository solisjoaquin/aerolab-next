import { AppContextProvider } from "../context/context";
import styled, { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  body {
    font-family: Arial, helvetica;
    margin: 0px;
    padding: 0px;
  }
`
export default function App({ Component, pageProps }) {
    return <AppContextProvider>
        <Global />
        <Component {...pageProps} />
    </AppContextProvider>
}
