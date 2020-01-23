import React from "react"
import Layout from "../components/layout"
import HeaderHome from "../components/header-home"
import Image from "../components/image.js"
import CenterLayout from "../components/centerlayout"
import { Column, Row } from "simple-flexbox"
import Box from "../components/box"
import SEO from "../components/seo"
import { Flex, Text, Heading } from "rebass"
import { flexDirection } from "styled-system"

export default () => (
  <Layout>
    <SEO title="Flame" />
    <Box mb={["25px", "25px"]} mt={["100px", "160px"]}>
      <Text
        fontSize={["38px", "74px"]}
        lineHeight={["50px", "89px"]}
        color="#1b202b"
        maxWidth="920px"
        fontWeight="bold"
      >
        Flame Design System
      </Text>
    </Box>
    <Box mb={["60px", "100px"]}>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        Together with a dedicated team, I’ve contributed and build a design
        system. The system is currently used and adopted by all the web
        solutions in Lightspeed. It helps people design, write and build
        consistent user experiences.
      </Text>
    </Box>
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
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Design system for every web product
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        The design system supports every web product inside the Lightspeed
        ecosystem. Customers can rapidly build out products with the help of a
        Sketch template, React components and documentation.
      </Text>
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
        <Box mb={["15px", "15px"]} mt={["100px", "0px"]}>
          <Text
            fontSize={["30px", "40px"]}
            lineHeight={["42px", "52px"]}
            color="#1b202b"
            maxWidth="920px"
            fontWeight="bold"
            textAlign={["center", "left"]}
          >
            Vibrant and accessible color system
          </Text>
        </Box>
        <Text
          fontSize={["1.125rem", "1.3125rem"]}
          lineHeight={["1.875rem", "2.1875rem"]}
          color="#626d83"
          maxWidth="1000px"
          textAlign={["center", "left"]}
        >
          A custom color palette has been created to support the system. It’s a
          vibrant and accessible palette to enhance the user experience across
          the web products.
        </Text>
      </Column>
    </Row>
    <Image filename="colors.jpg"></Image>
    <CenterLayout>
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Components into patterns
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        Small bits of components can be built out into complex patterns. These
        patterns are used to shape out complex layouts and serve all the needs
        of users.
      </Text>
    </CenterLayout>
    <Image filename="table-pattern.jpg"></Image>
    <CenterLayout>
      <Box mb={["15px", "0px"]} mt={["100px", "160px"]}>
        <Text
          fontSize={["30px", "40px"]}
          lineHeight={["42px", "89px"]}
          color="#1b202b"
          maxWidth="920px"
          fontWeight="bold"
        >
          Design system documentation
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        A custom website was built to serve all the documentation for the
        system. It's a dedicated space for all the designers and developers to
        find out how to create smart, reliable and consistent user experiences.
      </Text>
    </CenterLayout>
    <Box mb={["20px", "80px"]}>
      <Image filename="design-system-documentation-1.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="design-system-documentation-2.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="design-system-documentation-3.jpg"></Image>
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
          Brand identity to build recognition
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        To encourage adoption across the company a brand identity was created
        for Flame. The mark is build out of blocks with the colours of a flame.{" "}
      </Text>
    </CenterLayout>
    <Box mb={["20px", "80px"]}>
      <Image filename="flame-branding-1.jpg"></Image>
    </Box>
    <Box mb={["20px", "80px"]}>
      <Image filename="flame-branding-2.jpg"></Image>
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
          Open source
        </Text>
      </Box>
      <Box mb={["20px", "40px"]}>
        <Text
          fontSize={["1.125rem", "1.3125rem"]}
          lineHeight={["1.875rem", "2.1875rem"]}
          color="#626d83"
          maxWidth="1000px"
        >
          Since September 2019 the React components of the system have been open
          sourced on Github. It was a big step into building out an open source
          mentality in Lightspeed, as Flame was the first project to do so.
        </Text>
      </Box>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
        maxWidth="1000px"
      >
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code on Github
        </a>{" "}
      </Text>
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
            <a href="/recruitzio" rel="noopener noreferrer">
              Recruitz.io
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
            <a href="/meettrainer" rel="noopener noreferrer">
              Meet Trainer
            </a>
          </Text>
        </Column>
      </Row>
    </Box>
  </Layout>
)
