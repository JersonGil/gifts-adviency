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
    grid-template-columns: 40px 1fr 40px 1fr;
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
    margin-left: 10px;

    &.label-container {
      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
        color: #9d8e8e;
        margin: 0;
        line-height: 10px;
      }
    }
  }

  .badge {
    font-size: 14px;
    text-align: center;
    background-color: #26e31d9e;
    color: #fff;
    height: 30px;
    border-radius: 20%;
    width: 25px;
    padding: 7px;
  }
`;

export default List;
