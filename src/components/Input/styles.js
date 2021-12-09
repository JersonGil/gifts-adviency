import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
`;

InputContainer.Input = styled.input`
  width: 100%;
  padding: 1em;
  color: var(--main);
  border-radius: 8px;
  border: 1px solid #c5c2c2;
  font-size: 12px;
  outline: none;
  z-index: 1;
  position: relative;

  &:focus {
    outline: #3f66ff;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #554c4c inset;
    box-shadow: 0 0 0px 1000px #554c4c inset;
    -webkit-text-fill-color: #554c4c;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

InputContainer.Label = styled.label`
  color: #554c4c;
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 400;
  transition: 0.2s ease;
`;

export default InputContainer;
