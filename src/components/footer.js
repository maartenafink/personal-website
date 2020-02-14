import React from "react"
import styled from "styled-components"
import { Column, Row } from "simple-flexbox"

const Divider = styled("div")({
  width: "100%",
  height: 1,
  backgroundColor: "#E3E8EF",
  marginBottom: "30px",
})

const FooterWrapper = styled("div")({
  maxWidth: 1400,
  fontSize: 18,
  color: "#1B202B",
})

export default ({ children }) => (
  <FooterWrapper>
    <Divider />
    <Row>
      <Column flexGrow={1} alignItems="start">
        Copyright © {new Date().getFullYear()}, Maarten Afink
      </Column>
      <Column flexGrow={1} alignItems="end">
        Email at hey@maarten.im
      </Column>
    </Row>
  </FooterWrapper>
)
