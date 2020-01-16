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
    <SEO title="Flame" />
    <HeaderHome style={{ paddingTop: `50px`, textDecoration: `none` }}>
      Flame Design System
    </HeaderHome>
    <p className="home" style={{ marginBottom: `100px`, maxWidth: 1000 }}>
      Together with a dedicated team, I’ve contributed and build a design
      system. The system is currently used and adopted by all the web solutions
      in Lightspeed. It helps people design, write and build consistent user
      experiences.
    </p>
    <Row
      style={{
        minWidth: 200,
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
        <p className="projectdescription">Lightspeed POS</p>
      </Column>
      <Column>
        <p className="projectheading">Role</p>
        <p className="projectdescription">Product Designer</p>
      </Column>
      <Column>
        <p className="projectheading">Timeline</p>
        <p className="projectdescription">2017 — Present</p>
      </Column>
      <Column>
        <p className="projectheading">Status</p>
        <p className="projectdescription">In active use</p>
      </Column>
    </Row>
    <Image filename="flame-homepage.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        A design system for every web product
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        The design system supports every web product inside the Lightspeed
        ecosystem. Customers can rapidly build out products with the help of a
        Sketch template, React components and documentation.
      </p>
    </CenterLayout>
    <Image filename="flame-design-system-overview.jpg"></Image>
    <Row
      style={{ marginTop: `200px`, marginBottom: `100px` }}
      alignItems="center"
      vertical="center"
      wrap
      justifyContent="space-between"
    >
      <Column
        style={{
          minWidth: 596,
          minHeight: 320,
          maxWidth: 400,
        }}
        flexGrow={1}
      >
        <>
          <Image filename="color-example.jpg" />
        </>
      </Column>
      <Column
        style={{
          minWidth: 200,
          maxWidth: 550,
        }}
        flexGrow={1}
      >
        <h2 style={{ fontWeight: `800` }}>
          Vibrant and accessible color system
        </h2>
        <p className="item" style={{ marginTop: `-10px` }}>
          A custom color palette has been created to support the system. It’s a
          vibrant and accessible palette to enhance the user experience across
          the web products. 
        </p>
      </Column>
    </Row>
    <Image filename="colors.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Components into patterns
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        Small bits of components can be built out into complex patterns. These
        patterns are used to shape out complex layouts and serve all the needs
        of users.
      </p>
    </CenterLayout>
    <Image filename="table-pattern.png"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Design system documentation
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        A custom website was built to serve all the documentation for the
        system. It's a dedicated space for all the designers and developers to
        find out how to create smart, reliable and consistent user experiences. 
      </p>
    </CenterLayout>
    <Box marginBottom="80px">
      <Image filename="design-system-documentation-1.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="design-system-documentation-2.jpg"></Image>
    </Box>
    <Box marginBottom="80px">
      <Image filename="design-system-documentation-3.jpg"></Image>
    </Box>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>Open Source</h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        Since September 2019 the React components of the system have been open
        sourced on Github. It was a big step into building out an open source
        mentality in Lightspeed, as Flame was the first project to do so.
      </p>
      <p className="item" style={{ marginBottom: `150px`, marginTop: `-10px` }}>
        <a
          href="https://github.com/lightspeed/flame"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on Github
        </a>
      </p>
    </CenterLayout>
    <Row>
      <Column flexGrow={1} alignItems="flexstart">
        <p className="item">
          ← Previous Project<br></br>
          <a href="/recruitzio" rel="noopener noreferrer">
            Recruitz.io
          </a>
        </p>
      </Column>
      <Column flexGrow={1} alignItems="flex-end" style={{ textAlign: `right` }}>
        <p
          className="item"
          style={{ marginBottom: `150px`, marginTop: `-10px` }}
        >
          Next Project -><br></br>
          <a href="/meettrainer" rel="noopener noreferrer">
            Meet Trainer
          </a>
        </p>
      </Column>
    </Row>
  </Layout>
)
