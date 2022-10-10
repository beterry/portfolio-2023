import React from 'react'
import styled from 'styled-components'

//components
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <Site>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Site>
    )
}

const Site = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Container = styled.div`
    width: 85%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
`

const paddingSize = (size) => {
    switch (size) {
        case 'none':
            return '0'
        case 'xs':
            return '.5rem'
        case 'sm':
            return '.75rem'
        case 'lg':
            return '1.5rem'
        case 'xl':
            return '2rem'
        case 'section':
            return '4rem'
        default:
            return '1rem'
    }
}

const Padding = styled.div`
    height: ${({size}) => paddingSize(size)};
`

const ContentStack = styled.div`
    display: grid;
    gap: ${({size}) => paddingSize(size)};

    //defualt the padding to 0
    padding: ${({padding = 'none'}) => paddingSize(padding)} 0;
`

export {Layout as default, Container, Padding, ContentStack}