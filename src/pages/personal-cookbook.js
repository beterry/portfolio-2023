import React from 'react'
import styled from 'styled-components'

// components
import Layout from "../components/Layout"
import ProjectHeader from '../components/ProjectHeader'
import { Container, Padding, ContentStack } from "../components/Layout";
import { ContainedButton } from '../components/Buttons';

// styles
import { Eyebrow } from "../components/Fonts";
import colors from "../styles/colors";

const PersonalCookbook = () => {
    return (
        <Layout>
            <ProjectHeader 
                title='Personnal Cookbook'
                description='I built this web application to help me organize and prepare my favorite recipes.'
                overline='Built with angular'
                color='#F1F1E9'
            />
            <Padding size='section' />
            <Container>
                <Main>
                    <ContentStack size='section'>
                        {/* Content here */}
                    </ContentStack>
                    <Rail>
                        <Car size='lg'>
                            <ContentStack>
                                <Eyebrow as='h3'>Technology</Eyebrow>
                                <UnorderedList>
                                    <li>Angular</li>
                                    <li>NgRx</li>
                                    <li>Firebase</li>
                                    <li>CSS</li>
                                </UnorderedList>
                            </ContentStack>
                            <ContentStack>
                                <Eyebrow as='h3'>Check it out</Eyebrow>
                                <ProjectButtons>
                                    <ContainedButton>View Code</ContainedButton>
                                    <ContainedButton>Live Project</ContainedButton>
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

export default PersonalCookbook