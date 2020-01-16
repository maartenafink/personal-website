import React from "react"
import Layout from "../components/layout"
import HeaderHome from "../components/header-home"
import Image from "../components/image.js"
import CenterLayout from "../components/centerlayout"
import { Column, Row } from "simple-flexbox"
import Box from "../components/box"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Meet Trainer" />
    <HeaderHome style={{ paddingTop: `50px`, textDecoration: `none` }}>
      Meet Trainer
    </HeaderHome>
    <p className="home" style={{ marginBottom: `100px`, maxWidth: 1000 }}>
      The primary objective for this project was to build out a minimally viable
      design system. This would then be applied to iOS products and web. As a
      freelance designer I’ve designed a bold and appealing solution for their
      target audience.
    </p>
    <Row
      style={{
        minWidth: 300,
        maxWidth: 1000,
        marginBottom: `100px`,
      }}
      alignItems="center"
      vertical="center"
      wrap
      justifyContent="space-between"
    >
      <Column>
        <p className="projectheading">Company</p>
        <p className="projectdescription">Meet Trainer</p>
      </Column>
      <Column>
        <p className="projectheading">Role</p>
        <p className="projectdescription">Freelance Designer</p>
      </Column>
      <Column>
        <p className="projectheading">Timeline</p>
        <p className="projectdescription">2018 — 2019</p>
      </Column>
      <Column>
        <p className="projectheading">Status</p>
        <p className="projectdescription">In development</p>
      </Column>
    </Row>
    <Box marginBottom="80px">
      <Image filename="meet-trainer-homepage.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="meet-trainer-design-system.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="meet-trainer-item-1.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="meet-trainer-item-2.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="meet-trainer-item-3.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="meet-trainer-item-4.jpg"></Image>
    </Box>
    <Row>
      <Column flexGrow={1} alignItems="flexstart">
        <p className="item">
          ← Previous Project<br></br>
          <a href="/flame" rel="noopener noreferrer">
            Flame
          </a>
        </p>
      </Column>
      <Column flexGrow={1} alignItems="flex-end" style={{ textAlign: `right` }}>
        <p
          className="item"
          style={{ marginBottom: `150px`, marginTop: `-10px` }}
        >
          Next Project -><br></br>
          <a href="/recruitzio" rel="noopener noreferrer">
            Recruitz.io
          </a>
        </p>
      </Column>
    </Row>
  </Layout>
)
