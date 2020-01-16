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
      Recruitz.io is a fully automated job advertising platform. During my time
      I was responsible for all the outgoing design work. In a small start-up
      environment I designed several solutions for their marketing output,
      back-end dashboard and the onboarding for new customers.{" "}
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
        <p className="projectdescription">Recruitz.io</p>
      </Column>
      <Column>
        <p className="projectheading">Role</p>
        <p className="projectdescription">Designer</p>
      </Column>
      <Column>
        <p className="projectheading">Timeline</p>
        <p className="projectdescription">2015 — 2017</p>
      </Column>
      <Column>
        <p className="projectheading">Status</p>
        <p className="projectdescription">Rebranded to Wonderkind.com</p>
      </Column>
    </Row>
    <Image filename="recruitz-homepage.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Marketing website
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        To attract new customers a marketing website was designed. It’s a
        vibrant and bold website to draw attention towards possible customers.
      </p>
    </CenterLayout>
    <Image filename="recruitz-item-1.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>
        Campaign dashboard
      </h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        Customers can easily track their best performing campaigns via a custom
        build dashboard. Statistics like clicks, applies and reach are easily
        scalable on this view.
      </p>
    </CenterLayout>
    <Box marginBottom="80px">
      <Image filename="recruitz-item-2.jpg"></Image>
    </Box>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>Onboarding</h2>
      <p className="item" style={{ marginBottom: `45px`, marginTop: `-10px` }}>
        New customers will follow a custom-designed onboarding with the best
        possible experience. In a couple of steps, they are set-up with a custom
        campaign. They're now ready to find the best candidate for their
        vacancy.
      </p>
    </CenterLayout>
    <Image filename="recruitz-item-3.jpg"></Image>
    <CenterLayout>
      <h2 style={{ fontWeight: `800`, marginTop: `200px` }}>Personal notes</h2>
      <p className="item" style={{ marginBottom: `180px`, marginTop: `-10px` }}>
        It has been an absolute pleasure to kick-off my career at Recruitz.io.
        Being responsible for all the outgoing design work as junior designer
        taught me a lot.
      </p>
    </CenterLayout>
    <Row>
      <Column flexGrow={1} alignItems="flexstart">
        <p className="item">
          ← Previous Project<br></br>
          <a href="/meettrainer" rel="noopener noreferrer">
            Meet Trainer
          </a>
        </p>
      </Column>
      <Column flexGrow={1} alignItems="flex-end" style={{ textAlign: `right` }}>
        <p
          className="item"
          style={{ marginBottom: `150px`, marginTop: `-10px` }}
        >
          Next Project -><br></br>
          <a href="/flame" rel="noopener noreferrer">
            Flame
          </a>
        </p>
      </Column>
    </Row>
  </Layout>
)
