import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// style
import colors from '../styles/colors'

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
                        <Dot color='#EF6C5C'></Dot>
                        <Dot color='#F6BD45'></Dot>
                        <Dot color='#5CC24E'></Dot>
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

    margin-top: 1.5em;
`

const Screen = styled.div`
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 38px rgba(0,0,0,0.30), 0 0 12px rgba(0,0,0,0.22);
`

const BrowserBar = styled.div`
    height: 40px;
    background-color: #353435;
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
    background-color: ${props => props.color};
`

const Buttons = styled.div`
    display: flex;
    gap: 8px;
    font-size: 20px;
    color: rgba(255,255,255,.3);
`

const Searchbar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 0 8px;

    height: 25px;
    background-color: #282728;
    border-radius: 4px;

    font-size: 0.75rem;
    color: rgba(255,255,255,.5);
`

const Caption = styled.figcaption`
    font-size: .875rem;
    color: gray;
`

export default Screenshot