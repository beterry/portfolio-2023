import React from 'react'
import styled from "styled-components";

// components
import { ContentStack } from './Layout';

// styles
import colors from "../styles/colors";

const ProjectCard = ({title, background, tags, description, text = 'black'}) => {
    return (
        <Card bk={background}>
            <CardContent size='xs' textColor={text}>
                <h3>{title}</h3>
                <p>{description}</p>
            </CardContent >
            <TagList>
                {tags.map(tag => <Tag key={title + tag}>{tag}</Tag>)}
            </TagList>
        </Card>
    )
}

const Card = styled.article`
    position: relative;
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    background-color: ${props => props.bk};
    overflow: hidden;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;

    padding: 32px;
    min-height: 400px;
`

const CardContent = styled(ContentStack)`
    color: ${props => props.textColor};
`

const TagList = styled.ul`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 32px;

    list-style: none;
    display: flex;
    gap: 6px;
`

const Tag = styled.li`
    display: block;
    color: ${colors.blue.main};
    background-color: ${colors.blue.opacity[10]};
    border: 1px solid ${colors.blue.main};
    border-radius: 50px;
    padding: 6px 16px;
`

export default ProjectCard