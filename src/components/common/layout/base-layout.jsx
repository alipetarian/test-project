import React from 'react'
import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Georgia'
  }
`

const theme = {
  colors: {
    primary: 'green',
    lightGray: '#d9d6d0',

  },
}

const BaseLayout = ({ children }) => (
  <>
    <GlobalStyle theme="yellow" />
    <ThemeProvider theme={theme}>
      <main className="site-cont">{children}</main>
    </ThemeProvider>
  </>
)

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BaseLayout
