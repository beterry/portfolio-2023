import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// style
import colors from '../styles/colors'

// icons
import { IoChevronBackOutline } from 'react-icons/io5'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { IoSearch } from 'react-icons/io5'

const Screenshot = ({image, caption, url, mobile}) => {
    const gatsbyImage = getImage(image)

    return (
        <Figure>
            <ThemeProvider theme={{mobile: !!mobile}}>
                <Background>
                    <Screen>
                        { mobile && <GatsbyImage image={gatsbyImage} alt="screenshot"/> }

                        {/* MOBILE BROSWSER BAR */}
                        <BrowserBar>
                            { !mobile && 
                                <>
                                <Dots>
                                    <Dot className='red'></Dot>
                                    <Dot className='yellow'></Dot>
                                    <Dot className='green'></Dot>
                                </Dots>
                                <Buttons>
                                    <IoChevronBackOutline />
                                    <IoChevronForwardOutline />
                                </Buttons>
                                </>
                            }
                            <Searchbar>
                                <IoSearch />
                                <Url>{url}</Url>
                            </Searchbar>
                        </BrowserBar>

                        {/* DESKTOP SCREENSHOT IMAGE */}
                        { !mobile && <GatsbyImage image={gatsbyImage} alt="screenshot"/> }
                    </Screen>

                </Background>
            </ThemeProvider>
            {caption && <Caption>{caption}</Caption>}
        </Figure>
    )
}

const Figure = styled.figure`
    display: grid;
    gap: 16px;
`

const Background = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${colors.gray[10]};
    border-radius: 12px;

    ${props => {
        if (props.theme.mobile) {
            return css`
                padding: 16px;
                border: 1px solid lightgray;
            `
        }
    }}
`

const Screen = styled.div`
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 38px rgba(0,0,0,0.30), 0 0 12px rgba(0,0,0,0.22);

    max-width: ${props => props.theme.mobile && '225px'};
`

const BrowserBar = styled.div`
    height: 40px;
    background-color: #EFEBED;
    border-bottom: ${props => !props.theme.mobile && '1px solid #DBDCDC'};
    border-top: ${props => props.theme.mobile && '1px solid #DBDCDC'};

    display: grid;
    grid-template-columns: ${props => props.theme.mobile ? '1fr' : 'auto auto 1fr'};
    align-items: center;
    gap: 16px;

    padding: 0 ${props => props.theme.mobile ? '8px' : '16px'};
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

const Url = styled.div`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const Caption = styled.figcaption`
    max-width: 42rem;
    font-size: .875rem;
    color: gray;
`

export { Screenshot as default, Figure}