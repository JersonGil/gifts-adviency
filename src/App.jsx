import { useState } from "react"
import GlobalStyle from "./components/GlobalStyles/GlobalStyles"

/** CHILDS COMPONENTS */
import GiftsList from "./components/GiftsList/GiftsList"
import Card from "./components/Card/Card"
import Forms from "./components/Form/Forms"
import Modal from "./components/Modal/Modal"
import { INITIAL_VALUE, TITLE } from './utils/constants'

import Container from "./styles.js"

export const GIFTS = []

export default function App() {
  const [gifts, setGifts] = useState(GIFTS);
  const [editGifts, setEditGifts] = useState(INITIAL_VALUE)
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const handleDeleteGifts = (index) => {
    const newGifts = JSON.parse(localStorage.getItem('gifts'))
    newGifts.splice(index, 1)
    localStorage.setItem('gifts', JSON.stringify(newGifts))
    setGifts(newGifts)
  };

  const handleEditGifts = data => {
    setEditGifts(data)
    setIsOpen(true)
    setIsEdit(true)
  }

  return (
    <Container className="container">
      <div className="d-flex w-100 h-100">
        <div className="col-6 d-flex align-items-center">
          <Card>
            <Card.Header>
              <h1>Regalos:</h1>
            </Card.Header>
            <Card.Body>
              <button 
                className="btn btn-success mb-3"
                onClick={() => {
                  setIsEdit(false)
                  setIsOpen(true)
                }}
              >
                Agregar Regalos
              </button>
              <Modal
                title={isEdit ? TITLE.edit : TITLE.add}
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
              >
                <Forms
                  gifts={gifts}
                  editGifts={editGifts}
                  setGifts={setGifts}
                  closeModal={setIsOpen}
                  isEdit={isEdit}
                />
              </Modal>
              <h3>Lista:</h3>
              <GiftsList
                gifts={gifts}
                setGifts={setGifts}
                handleDeleteGifts={handleDeleteGifts}
                handleEditGifts={handleEditGifts}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <div className="image" />
        </div>
      </div>
      <GlobalStyle />
    </Container>
  )
}
