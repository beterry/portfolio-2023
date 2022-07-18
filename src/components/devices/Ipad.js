import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Img from 'gatsby-image'

// icons
import wifi from '../../images/devices/wifi.svg'
import battery from '../../images/devices/battery.svg'
import add from '../../images/devices/add.svg'
import back from '../../images/devices/back.svg'
import forward from '../../images/devices/forward.svg'
import grid from '../../images/devices/grid.svg'
import share from '../../images/devices/share.svg'
import web from '../../images/devices/web.svg'
import font from '../../images/devices/font.svg'
import lock from '../../images/devices/lock.svg'
import refresh from '../../images/devices/refresh.svg'

const Ipad = ({url, screenshot, width = '400px'}) => {
    return (
        // provide the device width to all styled components to do calculations
        <ThemeProvider theme={{width}}>
            <Base>
                <Screen>
                    <SystemBar>
                        <TopText>4:40 PM</TopText>
                        <TopText>Mon June 13</TopText>
                        <Spacer />
                        <SystemIcon src={wifi} alt='wifi'/>
                        <SystemIcon src={battery} alt='battery'/>
                    </SystemBar>
                    <BrowserBar>
                        <BrowserBarSide>
                            <BrowserIcon src={web} alt='web'/>
                            <BrowserIcon src={back} alt='back'/>
                            <BrowserIcon src={forward} alt='forward'/>
                        </BrowserBarSide>
                        <Spacer />
                        <BrowserSearch>
                            <SearchIcon src={font} alt='font'/>
                            <Spacer />
                            <SearchText>
                                {url}
                                <SecureIcon src={lock} alt='secure'/>
                            </SearchText>
                            <Spacer />
                            <SearchIcon src={refresh} alt='refresh'/>
                        </BrowserSearch>
                        <Spacer />
                        <BrowserBarSide>
                            <BrowserIcon src={share} alt='share'/>
                            <BrowserIcon src={add} alt='add'/>
                            <BrowserIcon src={grid} alt='grid'/>
                        </BrowserBarSide>
                    </BrowserBar>
                    <Img fluid={screenshot} />
                </Screen>
            </Base>
        </ThemeProvider>
    )
}

const Base = styled.div`
    width: ${(props) => props.theme.width};
    aspect-ratio: 4 / 3;
    background-color: black;
    border-radius: 4.3% / 5.8%;
    border: 1px solid #8F9094;
    padding: 3.2%;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const Screen = styled.div`
    background-color: white;
    height: 100%;
    border: 1px solid #151716;
    border-radius: 2.33% / 3.1%;
    overflow: hidden;
`

const SystemBar = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr auto auto;
    gap: 2%;
    padding: .5% 1%;
`

const TopText = styled.p`
    font-size: calc(${props => props.theme.width} / 90);
    white-space: nowrap;
    width: max-content;
`

const Spacer = styled.div``

const SystemIcon = styled.img`
    width: calc(${props => props.theme.width} / 80);
`

const BrowserBar = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 50% 1fr auto;
    padding: .5% 1%;
    padding-bottom: 1.5%;
    border-bottom: .5px solid #8F9094;
`

const BrowserBarSide = styled.div`
    display: grid;
    grid-template-columns: repeat(3, calc(${props => props.theme.width} / 45));
    align-items: center;
    gap: calc(${props => props.theme.width} / 45);
`


const BrowserIcon = styled.img`
    width: calc(${props => props.theme.width} / 45);
    height: calc(${props => props.theme.width} / 45);
    object-fit: contain;
`

const BrowserSearch = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto 1fr auto;
    align-items: center;
    background-color: #E8E7E5;
    border-radius: 4px;
    padding: 1.5%;
`

const SearchText = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    font-size: calc(${props => props.theme.width} / 80);
`

const SearchIcon = styled.img`
    width: calc(${props => props.theme.width} / 65);
    height: calc(${props => props.theme.width} / 65);
    object-fit: contain;
`

const SecureIcon = styled.img`
    position: absolute;
    left: 102%;
    width: calc(${props => props.theme.width} / 70);
    height: calc(${props => props.theme.width} / 70);
`

export default Ipad