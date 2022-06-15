import React from "react"
import styled from 'styled-components'

// components
import Layout from "../components/Layout"
import { Container, Padding, ContentStack } from "../components/Layout";
import LandingHeader from '../components/LandingHeader';
import ProjectCard from "../components/ProjectCard";
import Ipad from "../components/devices/Ipad";

// styles
import { Eyebrow } from "../components/Fonts";
import colors from "../styles/colors";

// icons
import iphone from '../images/contact/iphone.svg'
import mail from '../images/contact/mail.svg'

// projects
import cookbook from '../images/projects/cookbook/gallery.png'
import tmHelper from '../images/projects/tm-helper/screen.png'
import mnu from '../images/projects/mnu/screen.png'

const IndexPage = () => {
    return (
        <Layout>
            <LandingHeader />
            <Padding size='section' />
            <Container>
                <Main>
                    <ContentStack size='section'>
                        <ContentStack size='lg'>
                            <ContentStack>
                                <h2>Portfolio</h2>
                                <p>These are my favorite personal projects from past two years. I’m constantly building side projects outside of my professional work day-to-day. Constantly flexing my creative muscles allows me to learn new skills and further improve on existing skills.</p>
                            </ContentStack>
                            <ProjectCard 
                                title='Personal Cookbook'
                                background='#F1F1E9'
                                description='A web app that stores my favorite recipes for easy cooking instructions and shopping lists.'
                                tags={['Angular', 'Firebase']}
                                mockup={<Ipad url='http://cookbook.com' page={cookbook}/>}
                                link='/personal-cookbook'
                            />
                            <ProjectCard 
                                title='Terraforming Mars Helper'
                                background='#0C2030'
                                description='A companion web app for my favorite board game, Terraforming Mars.'
                                tags={['React', 'Styled Components']}
                                text='white'
                                mockup={<Ipad url='http://cookbook.com' page={tmHelper}/>}
                                link='/tm-helper'
                            />
                            <ProjectCard 
                                title='MNU: Menu Websites'
                                background='#F6D58D'
                                description='A business venture.'
                                tags={['Javascript', 'Headless CMS']}
                                mockup={<Ipad url='http://cookbook.com' page={mnu}/>}
                                link='/mnu'
                            />
                        </ContentStack>
                        <ContentStack size="lg">
                            <h2>About Me</h2>
                            <ContentStack>
                                <p>My career, after university, began as a Graphic Designer. At both Lasting Image and Sign Medix, I was the only creative professional on staff and was responsible for designing marketing materials, creating and maintaining brand guidelines, communicating with clients, updating website content, and much more.</p>
                                <p>In 2017, I began experimenting with web technologies. I created my first personal website with vanilla HTML and CSS and realized front-end development was the perfect combination of my interest in design and technology. Soon after this realization, I enrolled in several online curriculums to foster my desire to become a front-end developer.</p>
                                <p>In 2018, I began working at Mail Shark. Working with the Creative Director, I introduced the marketing team to Adobe XD, which allowed for a more efficient approach to designing and prototyping digital content. I created a design system that established a cohesive look for their web pages and developed a step-by-step, goal-oriented process for completing projects. In 2019, I was promoted to User Interface and Experience Designer. Currently, as UI/UX Designer, it's my responsibility to plan, design, and prototype Mail Shark's digital projects.</p>
                            </ContentStack>
                        </ContentStack>
                    </ContentStack>
                    <Rail>
                        <Car size='lg'>
                            <ContentStack>
                                <Eyebrow as='h3'>My Top Skills</Eyebrow>
                                <p>Something about how I’m constantly learning and love to learning the latest and great technology and improving my skills.</p>
                                <UnorderedList>
                                    <li>React</li>
                                    <li>Angular</li>
                                    <li>Javascript</li>
                                    <li>HTML5</li>
                                    <li>Responsive CSS</li>
                                    <li>APIs / Asyncronous Data Fetching</li>
                                </UnorderedList>
                            </ContentStack>
                            <ContentStack>
                                <Eyebrow as='h3'>Let's Connect</Eyebrow>
                                <div>
                                    <Contact href="tel:7174190478">
                                        <ContactIcon src={iphone} alt="phone"/>
                                        (717) 419-0478
                                    </Contact>
                                    <Contact href="mailto:benterry.dev@gmail.com">
                                        <ContactIcon src={mail} alt="email"/>
                                        benterry.dev@gmail.com
                                    </Contact>
                                </div>
                            </ContentStack>
                        </Car>
                    </Rail>
                </Main>
            </Container>
            <Padding size='section' />
        </Layout>
    )
}

const Main = styled.div`
    display: grid;
    grid-template-columns: 1fr 24rem;
    gap: 48px;
`

const Rail = styled.div`
    position: relative;
`

const Car = styled(ContentStack)`
    position: sticky;
    top: 48px;
`

const UnorderedList = styled.ul`
    list-style: none;
    padding: 0;

    li {
        line-height: 1.75;
    }

    li::before {
        content: "•";
        color: ${colors.green.main};
        font-weight: 900; 
        display: inline-block; 
        width: 1em;
    }
`

const Contact = styled.a`
    display: flex;
    align-items: center;
    padding: 6px;
    border-radius: 4px;
    gap: 6px;
    color: black;
    text-decoration: none;

    &:hover {
        background-color: ${colors.green.opacity[10]};
    }
`

const ContactIcon = styled.img``

export default IndexPage