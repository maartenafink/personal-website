import React from "react"
import Layout from "../components/layout"
import Image from "../components/image.js"
import { Column, Row } from "simple-flexbox"
import Box from "../components/box"
import SEO from "../components/seo"
import { Flex, Text, Heading } from "rebass"

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
    <Box mb={["20px", "80px"]}>
      <Image filename="meet-trainer-homepage.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="meet-trainer-design-system.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="meet-trainer-item-1.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="meet-trainer-item-2.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="meet-trainer-item-3.jpg"></Image>
    </Box>
    <Box mb={["80px", "80px"]}>
      <Image filename="meet-trainer-item-4.jpg"></Image>
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
