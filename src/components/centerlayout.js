import styled from "styled-components"
import { typography, space } from "styled-system"

const CenterLayout = styled("div")(typography, space, {
  maxWidth: 800,
  textAlign: `center`,
  margin: `0px auto  3rem`,
})

export default CenterLayout
