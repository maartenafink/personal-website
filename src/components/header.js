import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { typography, space } from "styled-system"

const HeaderWrapper = styled.header`
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTitle = styled("h1")(typography, space, {
  display: `inline`,
  fontSize: `21px`,
  fontWeight: `400`,
})

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
    <HeaderWrapper fontSize={["18px", "21px"]}>
      <Link to="/">
        <HeaderTitle fontSize={["18px", "21px"]}>Maarten.im</HeaderTitle>
      </Link>
      <HeaderList>
        {menuItems.map(({ url, title }, i) => (
          <HeaderListLink
            key={title}
            last={i === menuItems.length - 1}
            to={url}
          >
            {title}
          </HeaderListLink>
        ))}
      </HeaderList>
    </HeaderWrapper>
  )
}
