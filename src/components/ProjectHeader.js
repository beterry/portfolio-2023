import React from 'react'
import styled from 'styled-components'

// components
import { Container, ContentStack } from './Layout';
import { ContainedButton } from './Buttons';

// icons
import { IoLogoReact } from 'react-icons/io5'
import { IoLogoAngular } from 'react-icons/io5'
import { IoLogoJavascript } from 'react-icons/io5'

// styles
import { Eyebrow } from './Fonts';
import colors from '../styles/colors'

const ProjectHeader = ({
    title, 
    description, 
    madeWith, 
    mockup,
    demo,
    code
}) => {
    const madeWithLogo = (tech) => {
        switch(madeWith) {
            case 'React':
                return <IoLogoReact />
            case 'Angular':
                return <IoLogoAngular />
            case 'Javascript':
                return <IoLogoJavascript />
            default:
                return null
        }
    }

    return (
        <Header>
            <Container>
                <Grid>
                    <Info size='lg'>
                        <div>
                            <Overline>
                                {madeWithLogo(madeWith)}
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
                    <Mockup>
                        {mockup}
                    </Mockup>
                </Grid>
            </Container>
        </Header>
    )
}

const Header = styled.header`
    background-color: ${colors.blue.dark};
    padding: 5vw 0;
    overflow: hidden;
`

const Grid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    @media screen and (min-width: 60rem) {
        display: grid;
        align-items: center;
        grid-template-columns: 1fr 50%;
    }
`

const Info = styled(ContentStack)`
    justify-content: start;
    color: white;

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
    }
`

const Overline = styled(Eyebrow)`
    color: ${colors.blue.main};
    display: flex;
    gap: 8px;
    align-items: center;

    svg{
        font-size: 24px;
    }
`

const ProjectButtons = styled.div`
    display: flex;
    gap: 12px;
`

const Mockup = styled.div`
    width: 100%;

    @media screen and (min-width: 34.375rem) {
        min-width: 600px;
        order: 2;
    }
`

export default ProjectHeader