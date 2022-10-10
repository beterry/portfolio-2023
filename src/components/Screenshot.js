import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// style
// import colors from '../styles/colors'

// icons
import { IoChevronBackOutline } from 'react-icons/io5'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { IoSearch } from 'react-icons/io5'

const Screenshot = ({image, caption, url}) => {
    return (
        <Figure>
            <Screen>
                {/* BROSWSER BAR */}
                <BrowserBar>
                    <Dots>
                        <Dot className='red'></Dot>
                        <Dot className='yellow'></Dot>
                        <Dot className='green'></Dot>
                    </Dots>
                    <Buttons>
                        <IoChevronBackOutline />
                        <IoChevronForwardOutline />
                    </Buttons>
                    <Searchbar>
                        <IoSearch />
                        {url}
                    </Searchbar>
                </BrowserBar>

                {/* SCREENSHOT IMAGE */}
                <Img fluid={image} />
            </Screen>

            {caption && <Caption>{caption}</Caption>}

        </Figure>
    )
}

const Figure = styled.figure`
    display: grid;
    gap: 16px;
`

const Screen = styled.div`
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 38px rgba(0,0,0,0.30), 0 0 12px rgba(0,0,0,0.22);
`

const BrowserBar = styled.div`
    height: 40px;
    background-color: #EFEBED;
    border-bottom: 1px solid #5E5D5E;

    display: grid;
    grid-template-columns: auto auto 1fr;
    align-items: center;
    gap: 16px;

    padding: 0 16px;
`

const Dots = styled.div`
    display: flex;
    gap: 7px;
`

const Dot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 50%;

    &.red {
        background-color: #EF6C5C;
        border: 1px solid #DA5746;
    }

    &.yellow {
        background-color: #F6BD45;
        border: 1px solid #E0A737;
    }

    &.green {
        background-color: #5CC24E;
        border: 1px solid #54AE3F;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 8px;
    font-size: 20px;
    color: #AFACAD;
`

const Searchbar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 0 8px;

    height: 25px;
    background-color: #E3DFE0;
    border-radius: 4px;

    font-size: 0.75rem;
    color: #9D999A;
`

const Caption = styled.figcaption`
    font-size: .875rem;
    color: gray;
`

export { Screenshot as default, Figure}