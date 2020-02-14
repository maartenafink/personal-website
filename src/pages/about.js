import React from "react"
import { Column, Row } from "simple-flexbox"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, Text } from "rebass"
import ArtDirection from "../components/ArtDirection.js"

export default () => (
  <Layout>
    <SEO title="About" />
    <Row
      style={{ marginTop: `140px`, marginBottom: `120px` }}
      alignItems="center"
      vertical="center"
      wrapReverse
      justifyContent="space-between"
    >
      <Column
        style={{
          minWidth: 300,
          maxWidth: 780,
          marginTop: -70,
        }}
        flexGrow={1}
      >
        <Box mb="40px">
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            Hey,<br></br>
            <br></br> I’m a visually minded product designer based in Amsterdam.
            In my day to day life, I like to create digital products functional
            and simple to use. I’m currently working on the design system at{" "}
            <a
              href="https://www.lightspeedhq.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lightspeed
            </a>
            , where I aim to make the life of designers <span>and</span>{" "}
            developers easier.
          </Text>
        </Box>
        <Box mb="40px">
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            Other than designing stuff, I enjoy playing, sharing and finding new
            music. Discover what I've been listening to on my{" "}
            <a href="/journal" rel="noopener noreferrer">
              Journal
            </a>
            .
          </Text>
        </Box>
        <Box mb="15px">
          <Text
            fontSize={["1.125rem", "1.3125rem"]}
            lineHeight={["1.875rem", "2.1875rem"]}
            color="#626d83"
          >
            <a href="mailto:hey@maarten.im?Subject=Hey">Send me an email</a>
          </Text>
        </Box>
        <p className="about">
          Apart from trying to ditch all social media, I still use{" "}
          <a
            href="https://twitter.com/maartenafink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/maarten-afink-6245366b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          <span>(sometimes)</span>
        </p>
        <p className="about" style={{ marginTop: `20px` }}>
          Built with{" "}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>
          . Hosted on{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          . Open sourced on{" "}
          <a
            href="https://github.com/maartenafink/personal-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          .
        </p>
      </Column>
      <Column
        style={{
          minWidth: 345,
          minHeight: 567,
          maxWidth: 345,
        }}
        flexGrow={1}
      >
        <ArtDirection>
          <Box width="250px" margin="0 auto" paddingRight="25px">
            <Image filename="me-mobile.jpg"></Image>
          </Box>
          <Box>
            <Image filename="me.jpg" />
            <p className="me" style={{ marginTop: `30px`, marginLeft: `25px` }}>
              Pictures taken in the{" "}
              <a href="https://www.colorfactory.co/nyc">Color Factory</a>, New
              York
            </p>
          </Box>
        </ArtDirection>
      </Column>
    </Row>
  </Layout>
)
