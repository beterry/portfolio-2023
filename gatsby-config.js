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
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Lato', 'Roboto']
                }
            }
        }
    ]
};