import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'

// components
import Layout from "../components/Layout"
import { Container, Padding, ContentStack } from "../components/Layout"
import LandingHeader from '../components/LandingHeader'
import ProjectCard from "../components/ProjectCard"
import Timeline from "../components/Timeline"
import Screenshot from "../components/Screenshot";

// styles
import { Eyebrow } from "../components/Fonts"
import colors from "../styles/colors"

// icons
import { MdSmartphone } from 'react-icons/md'
import { MdMail } from 'react-icons/md'

const IndexPage = ({data}) => {
    const projects = data.projectsQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))

    return (
        <Layout>
            <LandingHeader />
            <Padding size='section' />
            <Container>
                <Main>
                    <ContentStack size='section'>
                        <ContentStack size='lg'>
                            <ContentStack>
                                <h2>Portfolio</h2>
                                <p>I'm not permitted to show my professional development projects from ECI; however, these are my favorite personal projects from the past few years.</p>
                            </ContentStack>
                            {projects.map(project => 
                                <ProjectCard 
                                    title={project.title}
                                    background={project.color}
                                    textColor={project.textColor}
                                    description={project.description}
                                    tags={project.technology}
                                    mockup={<Screenshot url={project.demo} image={project.mainImage.childImageSharp.gatsbyImageData}/>}
                                    link={project.slug}
                                    key={project.slug}
                                />
                            )}
                        </ContentStack>
                        <Timeline />
                    </ContentStack>
                    <Rail>
                        <Car size='lg'>
                            <ContentStack>
                                <Eyebrow as='h3'>My Top Skills</Eyebrow>
                                <p>I strive to be constantly leveling up my web development skills! Over the years, these are some of the technologies that I've enjoyed learning and developing with.</p>
                                <UnorderedList>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>Javascript</li>
                                    <li>HTML5</li>
                                    <li>Responsive CSS</li>
                                    <li>APIs / Asyncronous Data Fetching</li>
                                    <li>Unit Testing</li>
                                </UnorderedList>
                            </ContentStack>
                            <ContentStack>
                                <Eyebrow as='h3'>Let's Connect</Eyebrow>
                                <div>
                                    <Contact href="tel:7174190478">
                                        <MdSmartphone />
                                        (717) 419-0478
                                    </Contact>
                                    <Contact href="mailto:benterry.dev@gmail.com">
                                        <MdMail />
                                        benterry.dev@gmail.com
                                    </Contact>
                                </div>
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

    h2 {
        padding-bottom: 0.4em;
        border-bottom: 1px solid ${colors.gray[10]};
    }

    @media screen and (min-width: 60rem) {
        grid-template-columns: 2fr 1fr;
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

const Contact = styled.a`
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 4px;
    gap: 6px;
    color: black;
    text-decoration: none;

    &:hover {
        background-color: ${colors.green.opacity[10]};
    }
`

export default IndexPage

export const pageQuery = graphql`
    query {
        siteQuery: site {
            siteMetadata {
                title
            }
        }
        projectsQuery: allMdx(sort: {fields: frontmatter___order, order: ASC}) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        technology
                        madeWith
                        demo
                        code
                        mainImage {
                            childImageSharp{
                                gatsbyImageData
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`