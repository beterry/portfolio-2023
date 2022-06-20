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
        "gatsby-remark-unwrap-images",
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/pages/projects`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    
                ],
                defaultLayouts: {
                    default: require.resolve("./src/templates/project.js"),
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'lato\:400,500,600,700,800,900',
                    'roboto\:400,500,600,700,800,900',
                ],
                display: 'swap'
            }
        },
    ]
};