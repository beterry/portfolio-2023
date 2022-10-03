import React from 'react'
import styled from 'styled-components'

// styles
import colors from "../styles/colors";

const Backlog = ({backlog, inProgress}) => {
    return (
        <BacklogGrid>
            <BacklogCol>
                <ColHeader>Backlog <span>({backlog.length})</span></ColHeader>
                <ColList>
                    {backlog.map(item => <BacklogCard item={item} key={item.title}/>)}
                </ColList>
            </BacklogCol>
            <BacklogCol>
                <ColHeader>In Progress <span>({inProgress.length})</span></ColHeader>
                <ColList>
                    {inProgress.map(item => <BacklogCard item={item} key={item.title}/>)}
                </ColList>
            </BacklogCol>
        </BacklogGrid>
    )
}

const BacklogCard = ({item}) => {
    return (
        <Card>
            <h4>{item.title}</h4>
            <TagContainer>
                {item.tags.map(tag => <CardTag key={tag} className={tag}>{tag}</CardTag>)}
            </TagContainer>
        </Card>
    )
}

const BacklogGrid = styled.div`
    display: grid;
    gap: 16px;
    align-items: start;
    
    @media screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
`

const BacklogCol = styled.div`
    
`

const ColList = styled.div`
    display: grid;
    gap: 8px;

    max-height: 600px;
    overflow-y: auto;
`

const Card = styled.div`
    display: grid;
    gap: 8px;
    padding: 16px;
    border: 1px solid ${colors.gray[10]};
    border-radius: 4px;

    h4 {
        font-size: 1rem !important;
        margin-top: 0 !important;
    }
`

const TagContainer = styled.div`
    display: flex;
    gap: 6px;
`

const CardTag = styled.div`
    background-color: ${colors.green.main};
    border-radius: 40px;
    padding: 4px 12px; 
    font-size: .85rem;

    &.Design {
        background-color: ${colors.blue.main};
        color: white;
    }

    &.UX {
        background-color: ${colors.blue.light};
    }

    &.Development {
        background-color: ${colors.green.light};
    }

    &.Defect {
        background-color: ${colors.pink.main};
    }
`

const ColHeader = styled.h3`
    padding-bottom: 0.3em;

    span {
        font-size: .7em;
        color: ${colors.green.opacity[60]};
    }
`

export default Backlog