import React from 'react'
import styled from 'styled-components'

// components
import { Container } from './Layout'
import { IconButton } from './Buttons'

// icons
import {MdEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'

// styles
import colors from '../styles/colors'

const Navbar = ({
    background = colors.blue.dark,
    textColor = 'white'
}) => {
    return (
        <Nav background={background} textColor={textColor}>
            <Container>
                <InnerNav>
                    <Logo>Ben Terry</Logo>
                    <Spacer></Spacer>
                    <ContactGrid>
                        <IconButton as='a' href='mailto:benterry.dev@gmail.com' color={textColor}><MdEmail /></IconButton>
                        <IconButton as='a' href='https://github.com/beterry' target='_blank' color={textColor}><BsGithub /></IconButton>
                    </ContactGrid>
                </InnerNav>
            </Container>
        </Nav>
    )
}

const Nav = styled.nav`
    background-color: ${props => props.background};
    color: ${props => props.textColor};
    padding: .5rem 0;
`

const InnerNav = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
`

const Logo = styled.h2`
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