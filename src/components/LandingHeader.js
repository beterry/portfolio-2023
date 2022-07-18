import React from 'react'
import styled, { keyframes } from 'styled-components'
import Img from 'gatsby-image'

// components
import { Container, ContentStack, Padding } from './Layout';
import { ContainedButton } from './Buttons';

// styles
import { Eyebrow } from './Fonts';
import colors from '../styles/colors'

// icons
import { MdOutlineFrontHand } from 'react-icons/md';

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
                            <p>I’m a creative professional who loves designing and developing great web experiences. This is my portfolio where I write about my recent work and the technology I’m currently using and learning.</p>
                            <p>Something about looking for a new opportunity. But make it polite and professional.</p>
                        </ContentStack>
                        <div>
                            <ContainedButton>Resume</ContainedButton>
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

export default LandingHeader