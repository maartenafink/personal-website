import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { FlameTheme } from "@lightspeed/flame/Core"
import { typography, space } from "styled-system"
import theme from "./theme"
import Header from "./header"
import Footer from "./footer"

const Wrapper = styled("div")(typography, space, {
  margin: `120px auto  3rem`,
  maxWidth: 1400,
  padding: `0 1.7rem`,
})

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <FlameTheme>
      <Wrapper fontFamily="system">
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </FlameTheme>
  </ThemeProvider>
)
