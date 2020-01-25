import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image.js"
import { Column, Row } from "simple-flexbox"
import SEO from "../components/seo"
import { Box, Text } from "rebass"
import ArtDirection from "../components/ArtDirection.js"

export default () => (
  <Layout m={["120px auto  3rem", "80px auto  3rem"]}>
    <SEO />
    <Box mb={["100px", "160px"]} mt={["100px", "160px"]}>
      <Text
        fontSize={["38px", "74px"]}
        lineHeight={["50px", "89px"]}
        color="#1b202b"
        maxWidth="920px"
        fontWeight="bold"
      >
        <a href="/about" rel="noopener noreferrer">
          Maarten Afink
        </a>{" "}
        is a designer focused on creating digital products.
      </Text>
    </Box>
    <Box mb={["15px", "30px"]}>
      <Text
        fontSize={["1.125rem", "1.3125rem"]}
        lineHeight={["1.875rem", "2.1875rem"]}
        color="#626d83"
      >
        Featured work ↓
      </Text>
    </Box>
    <Link to="/flame/">
      <ArtDirection>
        <Image filename="flame-homepage-mobile.jpg"></Image>
        <Image filename="flame-homepage.jpg"></Image>
      </ArtDirection>
      <Box mb={["40px", "160px"]} mt={["20px", "40px"]}>
        <Row alignItems="baseline" wrap justifyContent="space-between">
          <Column
            style={{
              minWidth: 200,
              maxWidth: 450,
            }}
            flexGrow={1}
          >
            <Text
              fontSize={["32px", "40px"]}
              lineHeight={["38px", "64px"]}
              color="#1b202b"
              maxWidth="920px"
              fontWeight="bold"
              marginBottom={["35px", "20px"]}
            >
              Flame design system
            </Text>
          </Column>
          <Column
            style={{
              minWidth: 300,
              maxWidth: 785,
              marginTop: -35,
            }}
            flexGrow={1}
          >
            <Box mb={["15px", "30px"]}>
              <Text
                fontSize={["1.125rem", "1.3125rem"]}
                lineHeight={["1.875rem", "2.1875rem"]}
                color="#626d83"
              >
                Flame is Lightspeed’s design system for creating smart, reliable
                and consistent user experiences.
              </Text>
            </Box>
            <Box mb={["40px", "0px"]}>
              <Text
                fontSize={["1.125rem", "1.3125rem"]}
                lineHeight={["1.875rem", "2.1875rem"]}
                color="#626d83"
              >
                View project →{" "}
              </Text>
            </Box>
          </Column>
        </Row>
      </Box>
    </Link>
    <Link to="/meettrainer/">
      <ArtDirection>
        <Image filename="meet-trainer-homepage-mobile.jpg"></Image>
        <Image filename="meet-trainer-homepage.jpg"></Image>
      </ArtDirection>
      <Box mb={["40px", "160px"]} mt={["20px", "40px"]}>
        <Row alignItems="baseline" wrap justifyContent="space-between">
          <Column
            style={{
              minWidth: 200,
              maxWidth: 450,
            }}
            flexGrow={1}
          >
            <Text
              fontSize={["32px", "40px"]}
              lineHeight={["50px", "89px"]}
              color="#1b202b"
              maxWidth="920px"
              fontWeight="bold"
              marginBottom={["35px", "20px"]}
            >
              Meet Trainer
            </Text>
          </Column>
          <Column
            style={{
              minWidth: 300,
              maxWidth: 785,
              marginTop: -35,
            }}
            flexGrow={1}
          >
            <Box mb={["15px", "30px"]}>
              <Text
                fontSize={["1.125rem", "1.3125rem"]}
                lineHeight={["1.875rem", "2.1875rem"]}
                color="#626d83"
              >
                A strength and conditioning coaching app. Reserved for
                professional or semi-professional athletes, to help and improve
                their performances.
              </Text>
            </Box>
            <Box mb={["40px", "0px"]}>
              <Text
                fontSize={["1.125rem", "1.3125rem"]}
                lineHeight={["1.875rem", "2.1875rem"]}
                color="#626d83"
              >
                View project →{" "}
              </Text>
            </Box>
          </Column>
        </Row>
      </Box>
    </Link>
    <Link to="/recruitzio/">
      <ArtDirection>
        <Image filename="recruitz-homepage-mobile.jpg"></Image>
        <Image filename="recruitz-homepage.jpg"></Image>
      </ArtDirection>
      <Box mb={["40px", "160px"]} mt={["20px", "40px"]}>
        <Row alignItems="baseline" wrap justifyContent="space-between">
          <Column
            style={{
              minWidth: 200,
              maxWidth: 450,
            }}
            flexGrow={1}
          >
            <Text
              fontSize={["32px", "40px"]}
              lineHeight={["50px", "89px"]}
              color="#1b202b"
              maxWidth="920px"
              fontWeight="bold"
              marginBottom={["35px", "20px"]}
            >
              Recruitz.io
            </Text>
          </Column>
          <Column
            style={{
              minWidth: 300,
              maxWidth: 785,
              marginTop: -35,
            }}
            flexGrow={1}
          >
            <Box mb={["15px", "30px"]}>
              <Text
                fontSize={["1.125rem", "1.3125rem"]}
                lineHeight={["1.875rem", "2.1875rem"]}
                color="#626d83"
              >
                Recruitz.io is a fully automated job advertising platform that
                helps corporates and staffing agencies to create and execute the
                perfect recruitment marketing campaign.
              </Text>
            </Box>
            <Box mb={["40px", "0px"]}>
              <Text
                fontSize={["1.125rem", "1.3125rem"]}
                lineHeight={["1.875rem", "2.1875rem"]}
                color="#626d83"
              >
                View project →{" "}
              </Text>
            </Box>
          </Column>
        </Row>
      </Box>
    </Link>
  </Layout>
)
