import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 150px;
  overflow-y: auto;

  .container-icon {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    align-items: center;

    .btn-icon {
      background: none;
      border: none;
      text-align: right;

      &:hover {
        color: red;
      }
    }
  }

  label {
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    text-transform: capitalize;
    text-align: left;

    &:nth-child(2) {
      text-align: center;
      background-color: #26e31d9e;
      color: #fff;
      border-radius: 30%;
    }
  }
`;

export default List;
