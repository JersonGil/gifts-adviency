import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import Container from "./styles";
import isUndefined from 'lodash/isUndefined'

const Form = ({ setGifts, gifts }) => {
  const [value, setValue] = useState({
    gift: "",
    count: 0
  });

  useEffect(() => {
    setValue({
      gift: "",
      count: 0
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
      localStorage.setItem('gifts', JSON.stringify([...gifts, value]))
    }

    setValue({
      gift: "",
      count: 0
    });
  };

  return (
    <Container autoComplete="off" className="row g-3" onSubmit={onSubmit}>
      <div className="col-11">
        <label htmlFor="gift" className="form-label">
          que deseas para navidad?
        </label>
        <div className="d-flex">
          <div className="col-10">
            <Input
              type="text"
              className="form-control"
              id="gift"
              name="gift"
              value={value.gift}
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
      <div className="col-auto">
        <button type="submit" className="btn btn-success mb-3">
          Agregar Regalo
        </button>
      </div>
    </Container>
  );
};

Form.propTypes = {
  gifts: PropTypes.array,
  setGifts: PropTypes.func
};

export default Form;
