import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// components
import { IconButton } from './Buttons'

// styles
import colors from '../styles/colors'

//import icons
import mail from '../images/mail.svg'
import github from '../images/github.svg'
import home from '../images/home.svg'

const Footer = () => {
    return (
        <Foot>
            <HomeButton to='/'><img src={home} alt='Email' /></HomeButton>
            <IconButton as='a' href='mailto:benterry.dev@gmail.com'><img src={mail} alt='Email' /></IconButton>
            <IconButton as='a' href='https://github.com/beterry' target='_blank'><img src={github} alt='Github' /></IconButton>
        </Foot>
    )
}

const Foot = styled.footer`
    background-color: ${colors.blue.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 16px;
    gap: 16px;
`

const HomeButton = styled(Link)`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: none;
    color: ${props => props.white ? 'white' : 'black'};
    transition: transform .35s;
    &:hover{
        background: ${colors.blue.main};
    }
    svg{
      flex-shrink: 0;
    }
`

export default Footer