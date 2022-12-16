import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import { Link } from 'gatsby'

// components
import Layout from "../components/Layout"
import { Container, Padding, ContentStack } from "../components/Layout"
import ProjectCard from "../components/ProjectCard"
import { ContainedButton } from '../components/Buttons'
import Screenshot from "../components/Screenshot";

// styles
import colors from "../styles/colors"

// icons
import { MdOutlineSearchOff } from 'react-icons/md'

const NotFoundHeader = () => {
    return (
        <Header>
            <Container>
                <Info size='lg' padding='section'>
                    <Icon><MdOutlineSearchOff /></Icon>
                    <h1>Page Not Found</h1>
                    <p>Either I haven't completed this project yet, or I've decided there are better things to show you!</p>
                    <Link to='/'>
                        <ContainedButton>Go to Home</ContainedButton>
                    </Link>
                </Info>
            </Container>
        </Header>
    )
}

const NotFoundPage = ({data}) => {
    const projects = data.projectsQuery.edges.map(edge => ({...edge.node.frontmatter , ...edge.node.fields}))
    return (
        <Layout>
            <NotFoundHeader />
            <Padding size='section' />
            <Container>
                <Main>
                    <ContentStack size='section'>
                        <ContentStack size='lg'>
                            <ContentStack>
                                <h2>Some existing pages</h2>
                                <p>These are my favorite personal projects from the past few years.</p>
                            </ContentStack>
                            <ProjectGrid>
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
                            </ProjectGrid>
                        </ContentStack>
                    </ContentStack>
                </Main>
            </Container>
            <Padding size='section' />
        </Layout>
    )
}

const Header = styled.header`
    background-color: ${colors.blue.dark};
    padding-bottom: 56px;
`

const Icon = styled.div`
    font-size: 48px;
    color: white;
`

const Info = styled(ContentStack)`
    justify-content: center;
    justify-items: center;
    color: white;
    
    h1 {
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
    }

    p {
        text-align: center;
    }
`

const Main = styled.div`
    h2 {
        padding-bottom: 0.4em;
        border-bottom: 1px solid ${colors.gray[10]};
    }
`

const ProjectGrid = styled.div`
    display: grid;
    gap: 16px;
    
    @media screen and (min-width: 1100px) {
        grid-template-columns: 1fr 1fr;
    }
`

export default NotFoundPage

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