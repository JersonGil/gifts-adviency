import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Input from "../Input/Input"
import Container from "./styles"
import { isUndefined, isEmpty } from 'lodash'

const Form = ({ setGifts, gifts, closeModal }) => {
  const [value, setValue] = useState({
    gift: '',
    count: 0,
    image: ''
  });

  useEffect(() => {
    setValue({
      gift: '',
      count: 0,
      image: ''
    });
  }, [])

  const onChangeInput = (e) => {
    const valueInput = e.target.value;

    if (valueInput !== "" || valueInput > 0) {
      setValue({
        ...value,
        [e.target.name]: valueInput
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const totalGifts = gifts.find((gift) => gift.gift === value.gift);

    if (value.gift !== "" && value.count > 0 && isUndefined(totalGifts)) {
      setGifts((prevState) => [...prevState, value]);
      const oldGifts = JSON.parse(localStorage.getItem('gifts'))
      isEmpty(oldGifts)
        ? localStorage.setItem('gifts', JSON.stringify([value]))
        : localStorage.setItem('gifts', JSON.stringify([...oldGifts, value]))
    }

    closeModal(false)

    setValue({
      gift: '',
      count: 0,
      image: ''
    });
  };

  return (
    <Container autoComplete="off" className="row g-3" onSubmit={onSubmit}>
      <div className="col-11">
        <div className="d-flex mb-3">
          <div className="col-5">
            <Input
              type="text"
              className="form-control"
              id="gift"
              name="gift"
              placeholder="gatos"
              value={value.gift}
              onChange={onChangeInput}
            />
          </div>
          <div className="col-5 ms-2">
            <Input
                type="text"
                className="form-control"
                id="image"
                name="image"
                placeholder="https://www.google.com/image"
                value={value.image}
                onChange={onChangeInput}
              />
          </div>
          <div className="col-2 ms-2">
            <Input
              type="number"
              className="form-control"
              id="count"
              name="count"
              value={value.count}
              onChange={onChangeInput}
            />
          </div>
        </div>
      </div>
      <div className="col-auto w-100">
        <button type="submit" className="btn btn-success mb-3 w-100">
          Agregar Regalo
        </button>
      </div>
    </Container>
  );
};

Form.propTypes = {
  gifts: PropTypes.array,
  setGifts: PropTypes.func,
  closeModal: PropTypes.func
};

export default Form;
