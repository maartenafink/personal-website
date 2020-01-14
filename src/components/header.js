import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTitle = styled.h1`
  display: inline;
  font-size: 21px;
  font-weight: 400;
`

const HeaderList = styled.ul`
  list-style: none;
  margin: 0;
  paading: 0;
  font-size: 21px;
  border-bottom: none;
`

const HeaderListLink = props => {
  const style = {
    display: `inline-block`,
  }

  if (!props.last) {
    style.marginRight = `2.2rem`
  }

  return (
    <li style={style}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
}

export default () => {
  const menuItems = [
    {
      title: "About",
      url: "/about/",
    },
    {
      title: "Journal",
      url: "/journal/",
    },
  ]

  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderTitle>Maarten.im</HeaderTitle>
      </Link>
      <HeaderList>
        {menuItems.map(({ url, title }, i) => (
          <HeaderListLink last={i === menuItems.length - 1} to={url}>
            {title}
          </HeaderListLink>
        ))}
      </HeaderList>
    </HeaderWrapper>
  )
}
