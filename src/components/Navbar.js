import React from 'react'
import styled from 'styled-components'

// components
import { Container } from './Layout'
import { IconButton } from './Buttons'

// icons
import mail from '../images/mail.svg'
import github from '../images/github.svg'

// styles
import colors from '../styles/colors'

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <InnerNav>
                    <Logo>Ben Terry</Logo>
                    <Spacer></Spacer>
                    <ContactGrid>
                        <IconButton as='a' href='mailto:benterry.dev@gmail.com'><img src={mail} alt='Email' /></IconButton>
                        <IconButton as='a' href='https://github.com/beterry' target='_blank'><img src={github} alt='Github' /></IconButton>
                    </ContactGrid>
                </InnerNav>
            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
    background-color: ${colors.blue.dark};
    padding: .5rem 0;
`

const InnerNav = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
`

const Logo = styled.h2`
    color: white;
    font-size: 1.25rem;
    font-weight: 800;
`

const Spacer = styled.div``

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap: 8px;
`

export default Navbar