const siteConfig = require('./data/site-config')
const rss = require('./gatsby-rss')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-offline',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-remark-emoji',
    rss,

    // // Read pages files
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/pages`
    //   }
    // },

    // Read markdown/mdx files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/posts`
      }
    },

    // Read projects files
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects`
      }
    },

    // Read images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/static`
      }
    },

    // Read dummy page
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'dummy',
        path: `${__dirname}/src/z_`
      }
    },

    // mdx support
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'code-title-custom'
            }
          },

          // Process images in markdown
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false
            }
          },

          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'anchor-heading'
            }
          },

          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: `${__dirname}/content/posts`,
              ignoreFileExtensions: ['png', 'jpg', 'jpeg', 'bmp', 'tiff']
            }
          }
        ]
      }
    },

    // Using svg as component
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },

    {
      resolve: 'gatsby-transformer-sharp',
      options: {
        // Removes warnings trying to use non-gatsby image in markdown
        checkSupportedExtensions: false
      }
    },

    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: siteConfig.gaTrackingId
      }
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // Somehow need to be defined under both gatsby-plugin-mdx & gatsby-transformer-remark to work
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'anchor-heading'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: siteConfig.maxWidth,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-blog-mdx',
        short_name: 'blog',
        start_url: '/',
        display: 'minimal-ui',
        icon: siteConfig.faviconSrc // This path is relative to the root of the site.
      }
    },

    //
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          maximumFileSizeToCacheInBytes: 10000000
        }
      }
    }
  ]
}
