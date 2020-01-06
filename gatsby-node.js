// const path = require("path")

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve("src/templates/blogPost.js")

//   const result = await graphql(`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `)

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const path = node.frontmatter.path
//     createPage({
//       path,
//       component: blogPostTemplate,
//       context: {
//         pathSlug: path,
//       },
//     })
//   })
// }