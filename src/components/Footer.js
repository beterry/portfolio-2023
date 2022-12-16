import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

// components
import { IconButton } from './Buttons'

// layout
import { Container } from './Layout'

// styles
import colors from '../styles/colors'

//import icons
import {MdEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import {MdChevronLeft} from 'react-icons/md'
import {MdChevronRight} from 'react-icons/md'
import {MdHome} from 'react-icons/md'


const Footer = ({prev, next}) => {
    return (
        <Foot>
            <Container>
                <FooterLayout>
                    <FooterLinkContainer>
                        {prev && 
                            <FooterLink to={prev.title ? prev.link : '/'}>
                                <FooterLinkIcon>{prev.title ? <MdChevronLeft /> : <MdHome />}</FooterLinkIcon>
                                {prev.title ? prev.title : 'Home'}
                            </FooterLink>
                        }
                    </FooterLinkContainer>
                    <IconButtons>
                        <IconButton as='a' href='mailto:benterry.dev@gmail.com' color='white'><MdEmail /></IconButton>
                        <IconButton as='a' href='https://github.com/beterry' target='_blank' color='white'><BsGithub /></IconButton>
                    </IconButtons>
                    <FooterLinkContainer>
                    {prev && 
                        <FooterLink to={next.title ? next.link : '/'} className='next'>
                            {next.title ? next.title : 'Home'}
                            <FooterLinkIcon>{next.title ? <MdChevronRight /> : <MdHome />}</FooterLinkIcon>
                        </FooterLink>
                    }
                    </FooterLinkContainer>
                </FooterLayout>
            </Container>
        </Foot>
    )
}

const Foot = styled.footer`
    background-color: ${colors.blue.dark};
    padding: 16px 16px;
`

const FooterLayout = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    
`

const FooterLinkIcon = styled.div`
    font-size: 24px;
    flex-shrink: 0;
`

const IconButtons = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`

const FooterLinkContainer = styled.div`
    
`

const FooterLink = styled(Link)`
    display: none;
    align-items: center;
    gap: 16px;
    color: white;

    width: 250px;
    height: 100%;
    padding: 16px 24px;

    border-radius: 4px;

    &:hover {
        color: ${colors.blue.light};
        background-color: ${colors.blue.opacity[10]};
    }

    &.next {
        justify-content: flex-end;
        text-align: right;
    }

    @media screen and (min-width: 800px) {
        display: flex;
    }
`

export default Footer