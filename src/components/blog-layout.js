import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { FlameTheme } from "@lightspeed/flame/Core"
import { typography, space } from "styled-system"
import { Box, Text } from "rebass"
import { Link } from "gatsby"
import theme from "./theme"
import Header from "./header"
import Footer from "./footer"

const Wrapper = styled("div")(typography, space, {
  margin: `120px auto 50px auto`,
  maxWidth: 1400,
  padding: `0 1.7rem`,
})

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <FlameTheme>
      <Wrapper fontFamily="system">
        <Header />

        <Box maxWidth="960px" my="120px" mx="auto">
          <Link to="/journal">
            <Text fontSize="21px" lineHeight="35px" color="#626d83">
              ← Go back to Journal
            </Text>
          </Link>

          <Box my="48px">{children}</Box>
        </Box>
        <Footer />
      </Wrapper>
    </FlameTheme>
  </ThemeProvider>
)
