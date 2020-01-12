import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Box, Flex, Text } from "rebass"

import CenteredLayout from "../../components/centered-layout"
import SEO from "../../components/seo"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              excerpt
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  // Gather all required information per journal entry
  const entries = data.allMdx.edges.map(({ node }) => ({
    title: node.frontmatter.title,
    excerpt: node.frontmatter.excerpt,
    year: node.frontmatter.date.split(", ")[1],
    slug: node.fields.slug,
  }))

  // Group journal entries by year
  const entriesByYear = entries.reduce((acc, entry) => {
    acc[entry.year] = acc[entry.year] || []
    acc[entry.year].push(entry)
    return acc
  }, {})

  // Get blog post years
  const years = Object.keys(entriesByYear)
    .sort()
    .reverse()

  return (
    <CenteredLayout>
      <SEO title="Journal" />
      <Box mb="120px">
        <Text fontSize="21px" lineHeight="35px" color="#626d83">
          Welcome to my Journal.
          <br />
          <br />
          The idea behind this journal is to look further than automated
          playlists. These playlists are usually done by algorithms which you’ll
          see on major streaming platforms. It’s my ambition to show you the
          other side of music by handpicking weekly gems, and with the ability
          to support these underrepresented artists.
          <br />
          <br />
          Any suggestions?
          <br />
          Hit me here → music@maarten.im
        </Text>
      </Box>
      <Box>
        {years.map(year => (
          <Flex flexWrap="wrap">
            <Box width={[1, 1 / 4]} mb={["36px", 0]}>
              <Text fontSize="30px" fontWeight={700}>
                {year}
              </Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              {entriesByYear[year].map(entry => (
                <Box mb="72px">
                  <Box mb="36px">
                    <Text fontSize="24px" fontWeight={500}>
                      {entry.title}
                    </Text>
                  </Box>

                  <Box mb="36px">
                    <Text fontSize="21px" lineHeight="35px" color="#626d83">
                      {entry.excerpt}
                    </Text>
                  </Box>

                  <Box>
                    <Link to={entry.slug}>
                      <Text fontSize="21px" lineHeight="35px" color="#626d83">
                        Read more →
                      </Text>
                    </Link>
                  </Box>
                </Box>
              ))}
            </Box>
          </Flex>
        ))}
      </Box>
    </CenteredLayout>
  )
}
