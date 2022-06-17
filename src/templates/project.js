import React from 'react'
import styled from 'styled-components'
import { graphql } from "gatsby"

// components
import Layout from "../components/Layout"
import ProjectHeader from '../components/ProjectHeader'
import { Container, Padding, ContentStack } from "../components/Layout";
import { ContainedButton } from '../components/Buttons';
import Ipad from '../components/devices/Ipad'

// styles
import { Eyebrow } from "../components/Fonts";
import colors from "../styles/colors";
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ProjectLayout = ({ data: { mdx } }) => {
    const frontmatter = mdx.frontmatter
    return (
        <Layout>
            <ProjectHeader 
                title={frontmatter.title}
                description={frontmatter.description}
                madeWith={frontmatter.madeWith}
                color={frontmatter.color}
                mockup={<Ipad url={frontmatter.demo} screenshot={frontmatter.ipad.childImageSharp.fluid}/>}
                demo={frontmatter.demo}
                code={frontmatter.code}
            />
            <Padding size='section' />
            <Container>
                <Main>
                    <Content>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </Content>
                    <Rail>
                        <Car size='lg'>
                            <ContentStack>
                                <Eyebrow>Technology</Eyebrow>
                                <UnorderedList>
                                    {frontmatter.technology.map(tech => <li key={tech}>{tech}</li>)}
                                </UnorderedList>
                            </ContentStack>
                            <ContentStack>
                                <Eyebrow>Check it out</Eyebrow>
                                <ProjectButtons>
                                    {frontmatter.code && <ContainedButton as='a' target='_blank' href={frontmatter.code}>View Code</ContainedButton>}
                                    {frontmatter.demo && <ContainedButton as='a' target='_blank' href={frontmatter.demo}>Try it out</ContainedButton>}
                                </ProjectButtons>
                            </ContentStack>
                        </Car>
                    </Rail>
                </Main>
            </Container>
            <Padding size='section' />
        </Layout>
    )
}

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 24rem;
    gap: 48px;
`

const Content = styled.div`
    h1, h2 {
        margin-top: 2em;
    }

    h3, h4 {
        margin-top: 1.5em;
    }

    p {
        margin-top: 1em;
    }
`

const Rail = styled.div`
    position: relative;
`

const Car = styled(ContentStack)`
    position: sticky;
    top: 48px;
`

const UnorderedList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        line-height: 1.75;
    }

    li::before {
        content: "•";
        color: ${colors.green.main};
        font-weight: 900; 
        display: inline-block; 
        width: 1em;
    }
`

const ProjectButtons = styled.div`
    display: flex;
    gap: 12px;
` 

export default ProjectLayout

export const query = graphql`
    query ProjectQuery($slug: String) {
        mdx(slug: { eq: $slug }) {
            id
            body
            frontmatter {
                title
                description
                madeWith
                color
                technology
                demo
                code
                ipad {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`