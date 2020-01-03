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
      With a company history rich with acquisitions from the world over,
      Lightspeed was ripe for a way to harmonize the divergent styles presented
      in its products. The Flame design system is a collaborative living set of
      multidisciplinary tools that helps Lightspeeders create unified
      experiences for its customers.
    </p>
    <Row    style={{
          minWidth: 300,
          maxWidth: 1000,
          marginBottom: `100px`,
        }}       alignItems="center"
      vertical="center"
      wrap
      justifyContent="space-between">
      <Column><p className="projectheading">Company</p><p className="projectdescription">Meet Trainer</p></Column>
      <Column><p className="projectheading">Role</p><p className="projectdescription">Freelance Designer</p></Column>
      <Column><p className="projectheading">Timeline</p><p className="projectdescription">2018 — 2019</p></Column>
      <Column><p className="projectheading">Status</p><p className="projectdescription">In development</p></Column>
    </Row>
    <Image filename="meet-trainer-homepage.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        A design system for every web product
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
    </CenterLayout>
    <Image filename="meet-trainer-design-system.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Design system documentation
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
    </CenterLayout>
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
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>Open Source</h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
      <p className="item" style={{ marginBottom: `180px`, marginTop: `-10px` }}>
        Design system documentation Source code on Github
      </p>
    </CenterLayout>
  </Layout>
)
