import React from 'react'
import styled from 'styled-components'

// components
import { ContentStack } from './Layout'
import { Padding } from './Layout'

// styles
import { Eyebrow } from './Fonts'
import colors from '../styles/colors'

const Year = ({year, title, children}) => {
    return (
        <TimelineSection>
            <Eyebrow>{year}</Eyebrow>
            <ContentStack>
                <h3>{title}</h3>
                {children}
            </ContentStack>
            <Line />
            <Dot />
        </TimelineSection>
    )
}

const Timeline = () => {
    return (
        <div>
            <h2>My Timeline</h2>
            <Padding size='lg' />
            <Year year='2016' title='Graduated with Bachelor of Science degree'>
                <p>At Millersville University, I studied Graphic Communication, a curriculum that involved a mix of learning graphic design and printing technology. I pursued and achieved a minor of Computer Science.</p>
            </Year>
            <Year year='2016 - 2018' title='Worked as a Graphic Designer'>
                <p>After college, I worked as a Graphic Designer for a few years.</p>
                <p>At Mail Shark, my responsibilities involve periodic web design. This is when I fell in love with web technology.</p>
                <p>After work, for several years, I studied web technology and learned how to code with HTML, CSS and Javascript.</p>
            </Year>
            <Year year='2019' title='Promoted to UI/UX Designer'>
                <p>After learning and then applying modern web technologies to my work at Mail Shark, I was promoted to UI/UX Designer. In this position, I created designs using Adobe XD for emails, webpages, and web applications and also developed prototypes using code to demonstrate advanced functionality of these designs.</p>
            </Year>
            <Year year='2020 - Now' title='eCommerce Developer'>
                <p>I was hired by Deacom to work in their eCommerce department. In this role I’m responsible for developing several custom eCommerce websites utilizing Deacom's ERP software API.</p>
                <p>In 2022, Deacom was acquired by ECI Solutions.</p>
                <p>I love being able to develop full-time everyday. I’m constantly improving my web development skills and learning how to become a better developer.</p>
            </Year>
        </div>
    )
}

const TimelineSection = styled.div`
    position: relative;
    padding: 0 0 2rem 2rem;
`

const Line = styled.div`
    width: 2px;
    border-radius: 1px;
    background-color: ${colors.green.main};
    position: absolute;
    left: 4px;
    bottom: 0;
    height: calc(100% - 20px);
`

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${colors.green.main};
    position: absolute;
    left: 0;
    top: 5px;
`

export default Timeline