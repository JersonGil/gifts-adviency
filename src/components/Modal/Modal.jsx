import React from 'react'
import PropTypes from 'prop-types'
import { AiOutlineClose } from 'react-icons/ai'

import ReactModal from './styles'

ReactModal.setAppElement('#root');

const Modal = ({isOpen, title, closeModal, children}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <ReactModal.Header>
        <h2>{title}</h2>
        <button onClick={closeModal}>
          <AiOutlineClose />
        </button>
      </ReactModal.Header> 
      <ReactModal.Body>
        {children}
      </ReactModal.Body>
    </ReactModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  closeModal: PropTypes.func,
  children: PropTypes.node
}

export default Modal
