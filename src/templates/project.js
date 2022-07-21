import React from 'react'
import styled from 'styled-components'
import { MDXProvider } from "@mdx-js/react"

// components
import Layout from "../components/Layout"
import ProjectHeader from '../components/ProjectHeader'
import { Container, Padding, ContentStack } from "../components/Layout";
import { ContainedButton } from '../components/Buttons';
import Ipad from '../components/devices/Ipad'

// styles
import { Eyebrow } from "../components/Fonts";
import colors from "../styles/colors";

// short codes
import ProjectImages from '../components/ProjectImages'
const shortcodes = { ProjectImages }

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
                mockup={<Ipad url={frontmatter.demo} screenshot={data.mainImage.edges[0].node.childImageSharp.fluid}/>}
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
    grid-template-columns: 1fr 24rem;
    gap: 48px;
`

const Content = styled.div`
    h1, h2, h3, h4 {
        
    }

    h1, h2 {
        margin-top: 2em;
        padding-bottom: 0.4em;
        border-bottom: 1px solid lightgray;
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