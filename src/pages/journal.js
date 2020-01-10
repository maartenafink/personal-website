import React from "react"
import { Row } from "simple-flexbox"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => (
    <Layout>
    <SEO title="Journal" />
    <Row
      style={{ marginTop: `140px`, marginBottom: `120px`, maxWidth: `980px` }}
      alignItems="center"
      vertical="center"
      wrap
      justifyContent="space-between"
    >
      <p class ="home">Welcome to my Journal.<br></br><br></br>

The idea behind this journal is to look further than automated playlists. These playlists are usually done by algorithms which you’ll see on major streaming platforms. It’s my ambition to show you the other side of music by handpicking weekly gems, and with the ability to support these underrepresented artists.<br></br><br></br> 

Any suggestions?<br></br>
Hit me here → music@maarten.im</p>
    </Row>
  </Layout>
)
