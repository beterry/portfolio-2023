import React from 'react'
import styled from 'styled-components'

// components
import { Container, ContentStack } from './Layout';
import { ContainedButton } from './Buttons';
import Ipad from './devices/Ipad';

// styles
import { Eyebrow } from './Fonts';
import colors from '../styles/colors'

// images
import headerScreenshot from '../images/projects/cookbook/gallery.png'

const ProjectHeader = ({
    title, 
    description, 
    overline, 
    color = colors.blue.dark,
    text = 'black'
}) => {
    return (
        <Header color={color}>
            <Container>
                <Grid>
                    <Info size='lg' text={text}>
                        <div>
                            <Overline>
                                {overline}
                            </Overline>
                            <h1>{title}</h1>
                        </div>
                        <ContentStack>
                            <p>{description}</p>
                        </ContentStack>
                        <ProjectButtons>
                            <ContainedButton>View Code</ContainedButton>
                            <ContainedButton>Try it out</ContainedButton>
                        </ProjectButtons>
                    </Info>
                    <Ipad url='http://cookbook.com' page={headerScreenshot}/>
                </Grid>
            </Container>
        </Header>
    )
}

const Header = styled.header`
    background-color: ${props => props.color};
    padding: 5vw 0;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    align-items: center;
`

const Info = styled(ContentStack)`
    justify-content: start;
    color: ${props => props.text}

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
    }
`

const Overline = styled(Eyebrow)`
    color: ${colors.blue.main};
`

const ProjectButtons = styled.div`
    display: flex;
    gap: 12px;
`

export default ProjectHeader