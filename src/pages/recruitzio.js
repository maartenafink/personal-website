import React from "react"
import Layout from "../components/layout"
import Image from "../components/image.js"
import CenterLayout from "../components/centerlayout"
import { Column, Row } from "simple-flexbox"
import Box from "../components/box"
import SEO from "../components/seo"
import { Text } from "rebass"
import ArtDirection from "../components/ArtDirection.js"

export default () => (
  <Layout>
    <SEO title="Recruitz.io" />
    <Box mb={["25px", "25px"]} mt={["100px", "160px"]}>
      <Text
        fontSize={["38px", "74px"]}
        lineHeight={["50px", "89px"]}
        color="#1b202b"
        maxWidth="920px"
        fontWeight="bold"
      >
        Recruitz.io
      </Text>
    </Box>
    <Box mb={["60px", "100px"]}>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        Recruitz.io is a fully automated job advertising platform. During my
        time I was responsible for all the outgoing design work. In a small
        start-up environment I designed several solutions for their marketing
        output, back-end dashboard and the onboarding for new customers.
      </Text>
    </Box>
    <ArtDirection>
      <Row
        style={{
          maxWidth: 150,
          marginBottom: `60px`,
        }}
        alignItems="left"
        vertical="left"
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
      <Row
        style={{
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
    </ArtDirection>

    <ArtDirection>
      <Image filename="recruitz-homepage-mobile.jpg"></Image>
      <Image filename="recruitz-homepage.jpg"></Image>
    </ArtDirection>
    <CenterLayout>
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Marketing website
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        To attract new customers a marketing website was designed. It’s a
        vibrant and bold website to draw attention towards possible customers.
      </Text>
    </CenterLayout>
    <ArtDirection>
      <Image filename="recruitz-mobile-1.jpg"></Image>
      <Image filename="recruitz-item-1.jpg"></Image>
    </ArtDirection>
    <CenterLayout>
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Campaign dashboard
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        Customers can easily track their best performing campaigns via a custom
        build dashboard. Statistics like clicks, applies and reach are easily
        scalable on this view.
      </Text>
    </CenterLayout>
    <Box marginBottom="80px">
      <ArtDirection>
        <Image filename="recruitz-mobile-2.jpg"></Image>
        <Image filename="recruitz-item-2.jpg"></Image>
      </ArtDirection>
    </Box>
    <CenterLayout>
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Onboarding
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        New customers will follow a custom-designed onboarding with the best
        possible experience. In a couple of steps, they are set-up with a custom
        campaign. They're now ready to find the best candidate for their
        vacancy.
      </Text>
    </CenterLayout>
    <ArtDirection>
      <Image filename="recruitz-mobile-3.jpg"></Image>
      <Image filename="recruitz-item-3.jpg"></Image>
    </ArtDirection>
    <CenterLayout>
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Personal notes
        </Text>
      </Box>
      <Box mb={["15px", "100px"]}>
        <Text
          fontSize={["1.125rem", "1.3125rem"]}
          lineHeight={["1.875rem", "2.1875rem"]}
          color="#626d83"
          maxWidth="1000px"
        >
          It has been an absolute pleasure to kick-off my career at Recruitz.io.
          Being responsible for all the outgoing design work as junior designer
          taught me a lot.
        </Text>
      </Box>
    </CenterLayout>
    <Box mb={["80px", "80px"]} mt={["80px", "80px"]}>
      <Row>
        <Column flexGrow={1} alignItems="flexstart">
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            ← Previous Project
          </Text>
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            <a href="/meettrainer" rel="noopener noreferrer">
              Meet Trainer
            </a>
          </Text>
        </Column>
        <Column
          flexGrow={1}
          alignItems="flex-end"
          style={{ textAlign: `right` }}
        >
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            Next Project →
          </Text>
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            <a href="/flame" rel="noopener noreferrer">
              Flame
            </a>
          </Text>
        </Column>
      </Row>
    </Box>
  </Layout>
)
