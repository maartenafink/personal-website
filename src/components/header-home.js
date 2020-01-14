import styled from "styled-components"
import { typography, color, space, variant } from "styled-system"

const HeaderHome = styled("h1")(
  typography,
  space,
  color,
  {
    fontSize: 70,
    lineHeight: 0.6,
    fontWeight: 700,
    textDecoration: "line-through",
  },
  variant({
    variants: {
      last: {
        textDecoration: "none",
      },
    },
  })
)

export default HeaderHome
