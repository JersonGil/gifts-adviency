import PropTypes from "prop-types";

/** CHILD COMPONENTS */
import EmptyList from "./EmptyList";
import List from "./styles";
import { BsTrash } from "react-icons/bs";
import Images from "../Image/Images";

const GiftsList = ({ handleDeleteGifts, handleDeleteAllGifts, gifts }) => {
  const newGifts = JSON.parse(localStorage.getItem('gifts')) ?? gifts

  return (
    <List>
      {newGifts.length > 0 ? (
        <div className="w-100">
          {newGifts.map((g, index) => (
            <div className="container-icon" key={index}>
              <Images img={g.image} width={40} height={40} alt={g.gift} />
              <label className="label-container">
                {g.gift}
                <span>{g.addresse}</span>
              </label>
              <span className="badge">{g.count}</span>
              <button
                onClick={() => handleDeleteGifts(index)}
                className="btn-icon"
              >
                <BsTrash />
              </button>
            </div>
          ))}
          <button
            onClick={handleDeleteAllGifts}
            className="btn btn-danger mt-3"
          >
            Eliminar los Regalos
          </button>
        </div>
      ) : (
        <EmptyList />
      )}
    </List>
  );
};

GiftsList.propTypes = {
  gifts: PropTypes.array,
  handleDeleteGifts: PropTypes.func,
  handleDeleteAllGifts: PropTypes.func
};

export default GiftsList;
