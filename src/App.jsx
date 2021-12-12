import { useState } from "react"
import GlobalStyle from "./components/GlobalStyles/GlobalStyles"

/** CHILDS COMPONENTS */
import GiftsList from "./components/GiftsList/GiftsList"
import Card from "./components/Card/Card"
import Forms from "./components/Form/Forms"
import Modal from "./components/Modal/Modal"

import Container from "./styles.js"

export const GIFTS = []

export default function App() {
  const [gifts, setGifts] = useState(GIFTS);
  const [isOpen, setIsOpen] = useState(false)

  const handleDeleteGifts = (index) => {
    const newGifts = JSON.parse(localStorage.getItem('gifts'))
    newGifts.splice(index, 1)
    localStorage.setItem('gifts', JSON.stringify(newGifts))
    setGifts(newGifts)
  };

  return (
    <Container className="container">
      <div className="d-flex w-100">
        <div className="col-6">
          <Card>
            <Card.Header>
              <h1>Regalos:</h1>
            </Card.Header>
            <Card.Body>
              <button 
                className="btn btn-success mb-3"
                onClick={() => setIsOpen(true)}
              >
                Agregar Regalos
              </button>
              <Modal
                title="Que deseas para navidad?" 
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
              >
                <Forms setGifts={setGifts} gifts={gifts} closeModal={setIsOpen} />
              </Modal>
              <h3>Lista:</h3>
              <GiftsList
                handleDeleteAllGifts={() => {
                  setGifts([]);
                  localStorage.setItem('gifts', JSON.stringify([]))
                }}
                gifts={gifts}
                handleDeleteGifts={handleDeleteGifts}
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
