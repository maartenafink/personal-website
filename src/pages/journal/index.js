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
    date: node.frontmatter.date,
    year: node.frontmatter.date.split(", ")[1],
    slug: node.fields.slug,
  }))

  // Sort entries by date
  entries.sort(function compare(a, b) {
    var dateA = new Date(a.date)
    var dateB = new Date(b.date)
    return dateB - dateA
  })

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
      <Box mb="7.5rem">
        <Text
          fontSize={["1.125rem", "1.3125rem"]}
          lineHeight={["1.875rem", "2.1875rem"]}
          color="#626d83"
        >
          Welcome to my (listening) Journal.
          <br />
          <br />
          This is where I share weekly findings in music. It’s one of my
          passions to discover new music and share this with the world.
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
            <Box width={[1, 1 / 4]} mb={["2.25rem", 0]}>
              <Text fontSize="1.875rem" fontWeight={700}>
                {year}
              </Text>
            </Box>
            <Box width={[1, 3 / 4]}>
              {entriesByYear[year].map(entry => (
                <Link to={entry.slug}>
                  <Box mb="4.5rem">
                    <Box mb="2.25rem">
                      <Text fontSize="1.5rem" pt="0.375rem" fontWeight={500}>
                        {entry.title}
                      </Text>
                    </Box>

                    <Box mb="2.25rem">
                      <Text
                        fontSize="1.3125rem"
                        lineHeight="2.1875rem"
                        color="#626d83"
                      >
                        {entry.excerpt}
                      </Text>
                    </Box>

                    <Box>
                      <Text
                        fontSize="1.3125rem"
                        lineHeight="2.1875rem"
                        color="#626d83"
                      >
                        Read more →
                      </Text>
                    </Box>
                  </Box>
                </Link>
              ))}
            </Box>
          </Flex>
        ))}
      </Box>
    </CenteredLayout>
  )
}
