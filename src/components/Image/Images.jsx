import React from 'react'
import PropTypes from 'prop-types'

import { IMAGE } from '../../utils/constants'

const Images = ({ img, alt, width, height }) => (
  <img
    src={img === '' ? IMAGE : img}
    className="img-thumbnail rounded"
    alt={alt}
    width={width}
    height={height}
  />
)

Images.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Images
