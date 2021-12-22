import PropTypes from "prop-types";
import isNaN from 'lodash/isNaN'

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
}) => (
  <List>
    {gifts.length > 0 ? (
      <Fragment>
        <div className="gift-container">
          {gifts.map((g, index) => (
            <div className="container-icon" key={g.id}>
              <Images img={g.image} width={40} height={40} alt={g.gift} />
              <div className="label-container">
                <label>{g.gift}</label>
                <span>{g.addresse}</span>
              </div>
              <label>$ {isNaN(parseInt(g.price).toFixed(2)) ? 0 : parseInt(g.price).toFixed(2)}</label>
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
)

GiftsList.propTypes = {
  gifts: PropTypes.array,
  setGifts: PropTypes.func,
  handleDeleteGifts: PropTypes.func,
  handleEditGifts: PropTypes.func
};

export default GiftsList;
