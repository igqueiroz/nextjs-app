import NextApp from 'next/app'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {Helmet} from 'react-helmet'

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`

const theme = {
  primary: 'red',
  secondary: 'orange'
}

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props

    return (
      <ThemeProvider theme={theme}>
        <Helmet>
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Helmet>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
