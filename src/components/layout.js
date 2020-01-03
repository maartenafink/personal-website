import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { FlameTheme } from "@lightspeed/flame/Core"
import { typography, space, color } from "styled-system"
import theme from "./theme"
import { Column, Row } from "simple-flexbox"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2.2rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Divider = styled("div")(space, color, {
  maxWidth: 1400,
  height: 1,
  backgroundColor: "#E3E8EF",
})

const Footer = styled("div")(space, typography, color, {
  maxWidth: 1400,
  fontSize: 18,
  color: "#1B202B",
  marginTop: 30,
})

const Wrapper = styled("div")(typography, space, {
  margin: `120px auto  3rem`,
  maxWidth: 1400,
  padding: `0 1rem`,
})

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <FlameTheme>
      <Wrapper fontFamily="system">
        <header style={{ marginBottom: `100px` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline`, fontSize: 21, fontWeight: 400, }}>
              Maarten.im
            </h1>
          </Link>
          <ul
            style={{
              display: `inline-block`,
              listStyle: `none`,
              float: `right`,
              marginTop: `5px`,
              marginRight: `-36px`,
              fontSize: `21px`,
              borderBottom: `none`,
            }}
          >
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/about/">Journal</ListLink>
          </ul>
        </header>
        {children}
        <Divider></Divider>
        <Footer>
          <Row>
            <Column flexGrow={1} alignItems="flexstart">
              Copyright © {new Date().getFullYear()}, Maarten Afink
            </Column>
            <Column flexGrow={1} alignItems="flex-end">
              Email at hey@maarten.im
            </Column>
          </Row>
        </Footer>
      </Wrapper>
    </FlameTheme>
  </ThemeProvider>
)
