import React from 'react'
import styled from 'styled-components'

// components
import { Container, ContentStack } from './Layout';
import { ContainedButton } from './Buttons';

// styles
import { Eyebrow } from './Fonts';
import colors from '../styles/colors'

const ProjectHeader = ({
    title, 
    description, 
    madeWith, 
    color = colors.blue.dark,
    textColor = 'black',
    mockup,
    demo,
    code
}) => {
    return (
        <Header color={color}>
            <Container>
                <Grid>
                    <Info size='lg' textColor={textColor}>
                        <div>
                            <Overline>
                                {'Made with ' + madeWith}
                            </Overline>
                            <h1>{title}</h1>
                        </div>
                        <ContentStack>
                            <p>{description}</p>
                        </ContentStack>
                        <ProjectButtons>
                            {code && <ContainedButton as='a' target='_blank' href={code}>View Code</ContainedButton>}
                            {demo && <ContainedButton as='a' target='_blank' href={demo}>Try it out</ContainedButton>}
                        </ProjectButtons>
                    </Info>
                    {mockup}
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
    color: ${props => props.textColor};

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