import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const ProjectImages = ({images}) => {
    return (
        <ImageGrid className='project-images'>
            {images.map(image => 
                <Figure key={image.caption.slice(0,10)}>
                    <Img fluid={image.fluid} />
                    <Caption>{image.caption}</Caption>
                </Figure>
            )}
        </ImageGrid>
    )
}

const ImageGrid = styled.div``

const Figure = styled.figure`
    .gatsby-image-wrapper {
        margin-bottom: .5em;
        border-radius: 8px;
        border: 1px solid lightgray;
    }
`

const Caption = styled.figcaption`
    font-size: .875rem;
    color: gray;
`

export default ProjectImages