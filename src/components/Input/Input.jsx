import InputContainer from "./styles";
import PropTypes from "prop-types";

const Input = ({ labelText, ...props }) => {
  return (
    <InputContainer>
      {labelText ? (
        <InputContainer.Label>{labelText}</InputContainer.Label>
      ) : null}
      <InputContainer.Input {...props} />
    </InputContainer>
  );
};

Input.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string
};

export default Input;
