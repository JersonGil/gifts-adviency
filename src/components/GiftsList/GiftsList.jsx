import PropTypes from "prop-types";

/** CHILD COMPONENTS */
import EmptyList from "./EmptyList";
import List from "./styles";
import { BsTrash } from "react-icons/bs";
import Images from "../Image/Images";
import { Fragment } from "react";

const GiftsList = ({ handleDeleteGifts, gifts, setGifts }) => {
  const newGifts = JSON.parse(localStorage.getItem('gifts')) ?? gifts

  return (
    <List>
      {newGifts.length > 0 ? (
        <Fragment>
          <div className="gift-container">
            {newGifts.map((g, index) => (
              <div className="container-icon" key={index}>
                <Images img={g.image} width={40} height={40} alt={g.gift} />
                <div className="label-container">
                  <label>{g.gift}</label>
                  <span>{g.addresse}</span>
                </div>
                <span className="badge">{g.count}</span>
                <button
                  onClick={() => handleDeleteGifts(index)}
                  className="btn-icon"
                >
                  <BsTrash />
                </button>
              </div>
            ))}
          </div>
          <button
            className="btn btn-danger mt-5"
            onClick={() => {
              setGifts([]);
              localStorage.setItem('gifts', JSON.stringify([]))
            }}
          >
            Eliminar los Regalos
          </button>
        </Fragment>
      ) : (
        <EmptyList />
      )}
    </List>
  );
};

GiftsList.propTypes = {
  gifts: PropTypes.array,
  setGifts: PropTypes.func,
  handleDeleteGifts: PropTypes.func
};

export default GiftsList;
