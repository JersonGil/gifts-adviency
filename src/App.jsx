import { useState } from "react";
import GlobalStyle from "./components/GlobalStyles/GlobalStyles";
import GiftsList from "./components/GiftsList/GiftsList";
import Card from "./components/Card/Card";
import Forms from "./components/Form/Forms";
import isEmpty from 'lodash/isEmpty'

import Container from "./styles.js";

export const GIFTS = [{
  gift: "Xbox",
  count: 1
},
{
  gift: "Play 5",
  count: 1
},
{
  gift: "La paz mundial",
  count: 1
}]

export default function App() {
  const [gifts, setGifts] = useState(GIFTS);

  const handleDeleteGifts = (index) => {
    const newGifts = JSON.parse(localStorage.getItem('gifts'))
    newGifts.splice(index, 1);
    localStorage.setItem('gifts', JSON.stringify(newGifts))
    setGifts(newGifts);
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
              <Forms setGifts={setGifts} gifts={gifts} />
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
  );
}
