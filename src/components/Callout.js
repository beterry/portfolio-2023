import React from 'react'
import styled from 'styled-components'

// styles
import colors from '../styles/colors'

const Callout = ({emoji, children}) => {
    return (
        <Container>
            {emoji && <Emoji>{emoji}</Emoji>}
            <div>{children}</div>
        </Container>
    )
}

const Container = styled.div`
    background-color: ${colors.green.opacity[10]};
    padding: 1rem;
    border-radius: 4px;
    margin: 1em 0;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;

    a {
        color: ${colors.blue.main};
        text-decoration: underline;

        &:hover {
            color: ${colors.blue.light};
        }
    }
`

const Emoji = styled.p`
    font-size: 1.5rem;
    margin: 0 !important;
    line-height: 1;
`

export default Callout