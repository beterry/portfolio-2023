import React from 'react'
import styled from "styled-components";
import { Link } from 'gatsby';

// components
import { ContentStack } from './Layout';

// styles
import colors from "../styles/colors";

const ProjectCard = ({title, background, tags, description, textColor = 'black', mockup, link}) => {
    return (
        <Card to={link} bk={background}>
            <CardContent textColor={textColor}>
                <h3>{title}</h3>
                <p>{description}</p>
                <TagList>
                    {tags.map(tag => <Tag key={title + tag}>{tag}</Tag>)}
                </TagList>
            </CardContent >
            <Mockup>
                {mockup}
            </Mockup>
        </Card>
    )
}

const Card = styled(Link)`
    position: relative;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: ${colors.blue.dark};
    overflow: hidden;

    display: grid;
    align-items: center;
    gap: 24px;

    padding: 32px;
    
    min-height: 400px;
    
    text-decoration: none;
    color: inherit;
    
    @media screen and (min-width: 34.375rem) {
        padding: 32px;
        grid-template-columns: 1fr 50%;
    }
`

const CardContent = styled(ContentStack)`
    color: white;
    order: 2;

    @media screen and (min-width: 34.375rem) {
        order: 1;
    }
`

const TagList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 0;
`

const Tag = styled.li`
    display: block;
    color: ${colors.blue.main};
    background-color: ${colors.blue.opacity[10]};
    border: 1px solid ${colors.blue.main};
    border-radius: 50px;
    padding: 6px 16px;
`

const Mockup = styled.div`
    width: 100%;
    order: 1;
    
    @media screen and (min-width: 34.375rem) {
        width: calc(100% + 60px);
        min-width: 400px;
        order: 2;
    }
`

export default ProjectCard