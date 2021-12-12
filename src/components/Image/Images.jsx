import React from 'react'

const Images = ({ img, alt, width, height }) => (
  <img
    src={img}
    class="img-thumbnail rounded"
    alt={alt}
    width={width}
    height={height}
  />
)

export default Images
