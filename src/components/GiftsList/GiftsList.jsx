import PropTypes from "prop-types";

/** CHILD COMPONENTS */
import EmptyList from "./EmptyList";
import List from "./styles";
import { BsTrash, BsPencil } from "react-icons/bs";
import Images from "../Image/Images";
import { Fragment } from "react";

const GiftsList = ({
  gifts,
  handleDeleteGifts,
  setGifts,
  handleEditGifts
}) => {
  const newGifts = JSON.parse(localStorage.getItem('gifts')) ?? gifts

  return (
    <List>
      {newGifts.length > 0 ? (
        <Fragment>
          <div className="gift-container">
            {newGifts.map((g, index) => (
              <div className="container-icon" key={g.id}>
                <Images img={g.image} width={40} height={40} alt={g.gift} />
                <div className="label-container">
                  <label>{g.gift}</label>
                  <span>{g.addresse}</span>
                </div>
                <span className="badge">{g.count}</span>
                <button
                  onClick={() => handleEditGifts(g)}
                  className="btn-icon edit"
                >
                  <BsPencil />
                </button>
                <button
                  onClick={() => handleDeleteGifts(index)}
                  className="btn-icon delete"
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
  handleDeleteGifts: PropTypes.func,
  handleEditGifts: PropTypes.func
};

export default GiftsList;
