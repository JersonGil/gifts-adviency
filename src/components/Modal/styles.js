import styled from 'styled-components'
import Modal from 'react-modal'

const ReactModal = styled(Modal)`
  width: 100%;
  max-width: 450px;
  position: absolute;
  top: 30%;
  left: 30%;
  border: 1px solid #000;
  padding: 1em;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 6px 17px 31px -5px rgba(0, 0, 0, 0.57);
`

ReactModal.Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1em;

  h2 {
    font-size: 20px;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
  }
`

ReactModal.Body = styled.div`
  padding: 1em;
`

export default ReactModal
