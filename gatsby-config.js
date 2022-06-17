module.exports = {
    siteMetadata: {
        title: `Ben Terry Portfolio`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-image", 
        "gatsby-plugin-react-helmet", 
        "gatsby-plugin-sharp", 
        "gatsby-transformer-sharp",
        "gatsby-remark-images",
        "gatsby-plugin-styled-components",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'lato\:400,500,600,700,800,900',
                    'roboto\:400,500,600,700,800,900',
                    'material icons',
                    'material symbols',
                ],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1008,
                        },
                    },
                ],
            },
        },
    ]
};