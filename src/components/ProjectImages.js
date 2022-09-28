import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

// style
import colors from '../styles/colors'

const ProjectImages = ({images, mobile}) => {
    return (
        <ImageGrid className={`project-images`}>
            {images.map(image => 
                <Figure key={image.caption.slice(0,10)}>
                    <ImageContainer className={mobile && 'mobile'}>
                        <Screen className={mobile && 'mobile'}>
                            <Img fluid={image.fluid} />
                        </Screen>
                    </ImageContainer>
                    <Caption>{image.caption}</Caption>
                </Figure>
            )}
        </ImageGrid>
    )
}

const ImageGrid = styled.div`
    
`

const ImageContainer = styled.div`
    display: grid;
    place-items: center;
    background-color: ${colors.gray[10]};
    border-radius: 8px;
    border: 1px solid lightgray;
    margin-bottom: .5rem;
    overflow: hidden;

    &.mobile {
        padding: 16px;
    }
`

const Screen = styled.div`
    width: 100%;

    
    &.mobile {
        max-width: 200px;

        .gatsby-image-wrapper {
            border-radius: 8px;
            border: 1px solid lightgray;
        }
    }
`

const Figure = styled.figure`
    
`

const Caption = styled.figcaption`
    font-size: .875rem;
    color: gray;
`

export default ProjectImages