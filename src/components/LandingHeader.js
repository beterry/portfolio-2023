import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

// components
import { Container, ContentStack } from './Layout'
import { ContainedButton } from './Buttons'

// styles
import { Eyebrow } from './Fonts'
import colors from '../styles/colors'

// icons
import { MdOutlineFrontHand } from 'react-icons/md'

// resume
import resume from '../images/resume/Ben Terry Resume 2023.pdf'

const LandingHeader = ({img}) => {
    return (
        <Header>
            <Container>
                <Grid>
                    <Info size='lg' padding='section'>
                        <div>
                            <Overline>
                                <Hand><MdOutlineFrontHand /></Hand>
                                Hi, my name is Ben
                            </Overline>
                            <h1>Web Developer</h1>
                        </div>
                        <ContentStack>
                            <p>I’m a creative professional who loves <Highlight>designing</Highlight> and <Highlight>developing</Highlight> great web experiences. Currently, I'm working as Web Developer II at ECI Solutions, developing eCommerce websites for existing ERP clients.</p>
                            <p>I enjoy building side projects in my personal time. Constantly flexing my creative muscles allows me to learn new web technologies and further improve my development skills. This is my portfolio, highlighting some of my recent projects.</p>
                        </ContentStack>
                        <div>
                            <ResumeButton 
                                as='a' 
                                href={resume}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                Resume
                            </ResumeButton>
                        </div>
                    </Info>
                    <ImageContainer>
                        <Img fluid={img} />
                    </ImageContainer>
                </Grid>
            </Container>
        </Header>
    )
}

const Header = styled.header`
    background-color: ${colors.blue.dark};
`

const Grid = styled.div`
    display: grid;
    gap: 2rem;
    align-items: center;
    
    @media screen and (min-width: 60rem) {
        grid-template-columns: 1fr 1fr;
        
    }
`

const Info = styled(ContentStack)`
    justify-content: start;
    color: white;
    
    h1 {
        font-size: 2.5rem;
        font-weight: 900;
    }

    @media screen and (min-width: 60rem) {
        /* this centers the text in the blue area */
        margin-top: -56px;
    }
`

const Highlight = styled.strong`
    color: ${colors.green.main};
`

const Overline = styled(Eyebrow)`
    display: flex;
    gap: 8px;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 30rem;
    opacity: .5;
    margin: 0 auto;
    display: none;

    @media screen and (min-width: 60rem) {
        display: block;
    }
`

const wave = keyframes`
    0% { transform: rotate(-30deg) }
    10% { transform: rotate(-16.0deg) }
    20% { transform: rotate(-38.0deg) }
    30% { transform: rotate(-16.0deg) }
    40% { transform: rotate(-34.0deg) }
    50% { transform: rotate(-20.0deg) }
    60% { transform: rotate(-30.0deg) }
    100% { transform: rotate(-30.0deg) }
`

const Hand = styled.div`
    font-size: 24px;
    transform: rotate(-30deg);
    animation-name: ${wave};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    display: inline-block;
`

const ResumeButton = styled(ContainedButton)`
    display: inline-flex;
`

export default LandingHeader