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
    <SEO title="Recruitz.io" />
    <HeaderHome style={{ paddingTop: `50px`, textDecoration: `none` }}>
      Recruitz.io
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
      <Column><p className="projectheading">Company</p><p className="projectdescription">Recruitz.io</p></Column>
      <Column><p className="projectheading">Role</p><p className="projectdescription">Designer</p></Column>
      <Column><p className="projectheading">Timeline</p><p className="projectdescription">2015 — 2017</p></Column>
      <Column><p className="projectheading">Status</p><p className="projectdescription">Rebranded to Wonderkind.com</p></Column>
    </Row>
    <Image filename="recruitz-homepage.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Marketing website
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
    </CenterLayout>
    <Image filename="recruitz-item-1.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Campaign dashboard
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
    </CenterLayout>
    <Box marginBottom="80px">
      <Image filename="recruitz-item-2.jpg"></Image>
    </Box>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Onboarding
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
    </CenterLayout>
    <Image filename="recruitz-item-3.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>Conclusion</h2>
      <p className="item" style={{ marginBottom: `180px`, marginTop: `-10px` }}>
        With a company history rich with acquisitions from the world over,
        Lightspeed was ripe for a way to harmonize the divergent styles
        presented in its products. The Flame design system is a collaborative
        living set of multidisciplinary.
      </p>
    </CenterLayout>
  </Layout>
)
