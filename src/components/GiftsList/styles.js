import styled from "styled-components";

const List = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .gift-container {
    width: 100%;
    max-height: 150px;
    overflow-y: auto;
    padding: 0 10px;

    .container-icon {
      display: grid;
      grid-template-columns: 40px 1fr 40px 50px 1fr;
      align-items: center;
  
      .btn-icon {
        background: none;
        border: none;
        text-align: right;
  
        &.delete:hover {
          color: red;
        }
      }
    }
  }

  .label-container {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;

    label {
      width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      font-family: "Roboto", sans-serif;
      text-transform: capitalize;
      line-height: 14px;
    }

    span {
      font-size: 12px;
      color: #9d8e8e;
      line-height: 14px;
      width: 120px;
      white-space: nowrap;
      overflow: hidden;
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
