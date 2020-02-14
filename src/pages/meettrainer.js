import React from "react"
import Layout from "../components/layout"
import Image from "../components/image.js"
import { Column, Row } from "simple-flexbox"
import Box from "../components/box"
import SEO from "../components/seo"
import { Text } from "rebass"
import ArtDirection from "../components/ArtDirection.js"

export default () => (
  <Layout>
    <SEO title="Meet Trainer" />
    <Box mb={["25px", "25px"]} mt={["100px", "160px"]}>
      <Text
        fontSize={["38px", "74px"]}
        lineHeight={["50px", "89px"]}
        color="#1b202b"
        maxWidth="920px"
        fontWeight="bold"
      >
        Meet Trainer
      </Text>
    </Box>
    <Box mb={["60px", "100px"]}>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        The primary objective for this project was to build out a minimally
        viable design system. This would then be applied to iOS products and
        web. As a freelance designer I’ve designed a bold and appealing solution
        for their target audience.
      </Text>
    </Box>
    <ArtDirection>
      <Row
        style={{
          maxWidth: 200,
          marginBottom: `60px`,
        }}
        alignItems="left"
        vertical="left"
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
    </ArtDirection>
    <Box mb={["20px", "80px"]}>
      <ArtDirection>
        <Image filename="meet-trainer-homepage-mobile.jpg"></Image>
        <Image filename="meet-trainer-homepage.jpg"></Image>
      </ArtDirection>
    </Box>
    <Box mb={["20px", "80px"]}>
      <ArtDirection>
        <Image filename="meet-trainer-mobile-1.jpg"></Image>
        <Image filename="meet-trainer-design-system.jpg"></Image>
      </ArtDirection>
    </Box>
    <Box mb={["20px", "80px"]}>
      <ArtDirection>
        <Image filename="meet-trainer-mobile-2.jpg"></Image>
        <Image filename="meet-trainer-item-1.jpg"></Image>
      </ArtDirection>
    </Box>
    <Box mb={["20px", "80px"]}>
      <ArtDirection>
        <Image filename="meet-trainer-mobile-3.jpg"></Image>
        <Image filename="meet-trainer-item-2.jpg"></Image>
      </ArtDirection>{" "}
    </Box>
    <Box mb={["20px", "80px"]}>
      <ArtDirection>
        <Image filename="meet-trainer-mobile-4.jpg"></Image>
        <Image filename="meet-trainer-item-3.jpg"></Image>
      </ArtDirection>{" "}
    </Box>
    <Box mb={["80px", "80px"]}>
      <ArtDirection>
        <Image filename="meet-trainer-mobile-5.jpg"></Image>
        <Image filename="meet-trainer-item-4.jpg"></Image>
      </ArtDirection>{" "}
    </Box>
    <Box mb={["80px", "80px"]}>
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
            <a href="/flame" rel="noopener noreferrer">
              Flame
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
            <a href="/recruitzio" rel="noopener noreferrer">
              Recruitz.io
            </a>{" "}
          </Text>
        </Column>
      </Row>
    </Box>
  </Layout>
)
