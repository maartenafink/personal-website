import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
  margin-bottom: 100px;
`

const HeaderTitle = styled.h1`
  display: inline;
  font-size: 21px;
  font-weight: 400;
`

const HeaderList = styled.ul`
  list-style: none;
  float: right;
  margin-top: 5px;
  margin-right: -36px;
  font-size: 21px;
  border-bottom: none;
`

const HeaderListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `2.2rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => (
  <HeaderWrapper>
    <Link to="/">
      <HeaderTitle>Maarten.im</HeaderTitle>
    </Link>
    <HeaderList>
      <HeaderListLink to="/about/">About</HeaderListLink>
      <HeaderListLink to="/journal/">Journal</HeaderListLink>
    </HeaderList>
  </HeaderWrapper>
)
