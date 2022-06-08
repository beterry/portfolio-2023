import React from 'react'
import styled from 'styled-components'

// components
import { Container, ContentStack } from './Layout';
import { ContainedButton } from './Buttons';

// styles
import { Eyebrow } from './Fonts';
import colors from '../styles/colors'

// images
import ben from '../images/ben.png'

const LandingHeader = () => {
    return (
        <Header>
            <Container>
                <Grid>
                    <Info size='lg'>
                        <div>
                            <Overline>
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
                    <Ben src={ben} alt='Ben' />
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
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    align-items: center;
`

const Info = styled(ContentStack)`
    justify-content: start;
    color: white;

    h1 {
        font-size: 2.5rem;
        font-weight: 900;
    }
`

const Overline = styled(Eyebrow)``

const Ben = styled.img`
    max-height: 650px;
    opacity: .5;
    margin: 0 auto;
`

export default LandingHeader