import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Input from "../Input/Input"
import Container from "./styles"
import { isUndefined, isEmpty, uniqueId } from 'lodash'
import { INITIAL_VALUE, GIFTS } from '../../utils/constants'

const Form = ({
  gifts,
  editGifts,
  isEdit,
  setGifts,
  closeModal
}) => {
  const [value, setValue] = useState(INITIAL_VALUE);

  useEffect(() => {
    isEdit && setValue(editGifts);
  }, [editGifts, isEdit])

  /**
   * funcion que guarda en el estado lo que se ingresa en un input
   * 
   * @function onChangeInput
   * @param {object} e - input event 
   */
  const onChangeInput = (e) => {
    const valueInput = e.target.value;

    if (valueInput !== "" || valueInput > 0) {
      if (isEdit) {
        setValue({
          ...value,
          [e.target.name]: valueInput
        });
      } else {
        setValue({
          ...value,
          id: uniqueId(),
          [e.target.name]: valueInput
        });
      }
    }
  }

  /**
   * funcion para guardar los regalos que ingresa o edita el usuario
   * 
   * @function onSubmit
   * @param {object} e - event input
   */
  const onSubmit = (e) => {
    e.preventDefault()

    const totalGifts = !isEdit ? gifts.find((gift) => gift.gift === value.gift) : undefined

    if (value.gift !== "" && value.count > 0 && isUndefined(totalGifts)) {
      const price = parseInt(value.count) * parseInt(value.price)
      value.price = price

      if (!isEdit) {
        setGifts((prevState) => [...prevState, value]);
        const oldGifts = JSON.parse(localStorage.getItem('gifts'))
        isEmpty(oldGifts)
          ? localStorage.setItem('gifts', JSON.stringify([value]))
          : localStorage.setItem('gifts', JSON.stringify([...oldGifts, value]))
      } else {
        const gifts = JSON.parse(localStorage.getItem('gifts'))
        const newArrayGifts = gifts.map(gift => {
          if (gift.id === value.id) {
            return value
          } else {
            return gift
          }
        })
        setGifts(newArrayGifts)
        localStorage.setItem('gifts', JSON.stringify(newArrayGifts))
      }
    }

    closeModal(false)

    setValue(INITIAL_VALUE)
  }

  /**
   * Funcion para colocar un regalo random en el input de regalos
   *
   * @function onRandomGifts
   * @param {object} e - input event 
   */
  const onRandomGifts = (e) => {
    e.preventDefault()
    const keys = Object.keys(GIFTS)
    setValue({
      gift: GIFTS[keys[keys.length * Math.random() << 0]]
    })
  }

  return (
    <Container autoComplete="off" className="row g-3" onSubmit={onSubmit}>
      <button
        className="btn btn-primary mb-3 w-50"
        onClick={onRandomGifts}
      >
        Regalo aleatorio
      </button>
      <div className="col-11">
        <div className="d-flex mb-3">
          <div className="col-10">
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
        <div className="d-flex mb-3">
          <div className="col-12 ms-2">
            <Input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={value.price}
              labelText="Precio del regalo:"
              onChange={onChangeInput}
            />
          </div>
        </div>
        <div className="d-flex mb-3">
          <div className="col-6 me-2">
            <Input
              type="text"
              className="form-control"
              id="image"
              name="image"
              placeholder="https://www.google.com/image"
              value={value.image}
              onChange={onChangeInput}
              labelText="Imagen del regalo:"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              className="form-control"
              id="addresse"
              name="addresse"
              placeholder="persona"
              value={value.addresse}
              onChange={onChangeInput}
              labelText="Destinatario:"
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
  editGifts: PropTypes.object,
  isEdit: PropTypes.bool,
  setGifts: PropTypes.func,
  closeModal: PropTypes.func
};

export default Form;
