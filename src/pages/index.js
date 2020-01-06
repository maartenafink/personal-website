import React from "react"
import Blur from "../components/blur"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image.js"
import CenterLayout from "../components/centerlayout"
import { Column, Row } from "simple-flexbox"
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Designer" />
    <CenterLayout style={{ maxWidth: 1400}}>
      <Blur />
      <p
        className="header"
        style={{ marginTop: `260px`, marginBottom: `280px` }}
      >
        Designer focused on creating digital products
      </p>
    </CenterLayout>
    <Link to="/flame/">
      <Image filename="flame-homepage.jpg"></Image>
      <Row
        style={{ marginTop: `40px`, marginBottom: `160px` }}
        alignItems="baseline"
        wrap
        justifyContent="space-between"
      >
        <Column
          style={{
            minWidth: 200,
            maxWidth: 450,
          }}
          flexGrow={1}
        >
          <h2 style={{ fontWeight: `700` }}>Flame design system</h2>
        </Column>
        <Column
          style={{
            minWidth: 300,
            maxWidth: 785,
            marginTop: -35,
          }}
          flexGrow={1}
        >
          <p className="home">
          Flame is Lightspeed’s design system for creating smart, reliable and consistent user experiences.
          </p>
          <p className="home">View project →</p>
        </Column>
      </Row>
    </Link>
    <Link to="/meettrainer/">
      <Image filename="meet-trainer-homepage.jpg"></Image>
      <Row
        style={{ marginTop: `40px`, marginBottom: `160px` }}
        alignItems="baseline"
        wrap
        justifyContent="space-between"
      >
        <Column
          style={{
            minWidth: 200,
            maxWidth: 450,
          }}
          flexGrow={1}
        >
          <h2 style={{ fontWeight: `700` }}>Meet Trainer</h2>
        </Column>
        <Column
          style={{
            minWidth: 300,
            maxWidth: 785,
            marginTop: -35,
          }}
          flexGrow={1}
        >
          <p className="home">
          A strength and conditioning coaching app. Reserved for professional or semi-professional athletes, to help and improve their performances.
          </p>
          <p className="home">View project →</p>
        </Column>
      </Row>
    </Link>
    <Link to="/recruitzio/">
      <Image filename="recruitz-homepage.jpg"></Image>
      <Row
        style={{ marginTop: `40px`, marginBottom: `160px` }}
        alignItems="baseline"
        wrap
        justifyContent="space-between"
      >
        <Column
          style={{
            minWidth: 200,
            maxWidth: 450,
          }}
          flexGrow={1}
        >
          <h2 style={{ fontWeight: `700` }}>Recruitz.io</h2>
        </Column>
        <Column
          style={{
            minWidth: 300,
            maxWidth: 785,
            marginTop: -35,
          }}
          flexGrow={1}
        >
          <p className="home">
          Recruitz.io is a fully automated job advertising platform that helps corporates and staffing agencies to create and execute the perfect recruitment marketing campaign.
          </p>
          <p className="home">View project →</p>
        </Column>
      </Row>
    </Link>
  </Layout>
)
