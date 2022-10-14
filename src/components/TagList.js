import React from 'react'
import styled from 'styled-components'

// styles
import colors from "../styles/colors";

const TagList = ({tags}) => {
    return (
        <List>
            {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </List>
    )
}

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 0;
`

const Tag = styled.li`
    display: block;
    color: ${colors.green.main};
    background-color: ${colors.green.opacity[20]};
    border: 1px solid ${colors.green.main};
    border-radius: 4px;
    padding: 4px 8px;
    font-size: .85rem;
    font-weight: 700;
`

export default TagList