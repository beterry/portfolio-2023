import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from "@mdx-js/react"

// components
import Layout from "../components/Layout"
import ProjectHeader from '../components/ProjectHeader'
import { Container, Padding, ContentStack } from "../components/Layout";
import { ContainedButton } from '../components/Buttons';
import Ipad from '../components/devices/Ipad'
import Screenshot from '../components/Screenshot'

// styles
import { Eyebrow } from "../components/Fonts";
import colors from "../styles/colors";

// short codes
import ProjectImages from '../components/ProjectImages'
import Callout from '../components/Callout'
import Backlog from '../components/Backlog'
const shortcodes = { ProjectImages, Callout, Backlog, Screenshot }

const ProjectLayout = ({ children, pageContext, data }) => {
    const frontmatter = pageContext.frontmatter

    return (
        <Layout color={frontmatter.color} navTextColor={frontmatter.textColor}>
            <ProjectHeader 
                title={frontmatter.title}
                description={frontmatter.description}
                madeWith={frontmatter.madeWith}
                color={frontmatter.color}
                textColor={frontmatter.textColor}
                mockup={<Screenshot url={frontmatter.demo} image={data.mainImage.edges[0].node.childImageSharp.fluid}/>}
                demo={frontmatter.demo}
                code={frontmatter.code}
            />
            <Padding size='section' />
            <Container>
                <Main>
                    <Content>
                        <MDXProvider components={shortcodes}>{children}</MDXProvider>
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
    gap: 48px;

    @media screen and (min-width: 60rem) {
        grid-template-columns: 2fr 1fr;
    }
`

const Content = styled.div`
    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.55rem;
    }

    h4 {
        font-size: 1.25rem;
    }

    h1, h2 {
        margin-top: 2em;
        padding-bottom: 0.4em;
        border-bottom: 1px solid ${colors.gray[10]};

        &:first-of-type {
            margin-top: 0;
        }
    }

    h3, h4 {
        margin-top: 1.5em;
    }

    p {
        margin-top: 1em;
    }

    .project-images {
        margin: 1.5em 0;
    }

    ul {
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
    }
`

const Rail = styled.div`
    position: relative;
    display: none;

    @media screen and (min-width: 60rem) {
        display: block;
    }
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