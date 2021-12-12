import React from 'react'
import PropTypes from 'prop-types'

const Images = ({ img, alt, width, height }) => (
  <img
    src={img}
    className="img-thumbnail rounded"
    alt={alt}
    width={width}
    height={height}
  />
)

Images.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Images
