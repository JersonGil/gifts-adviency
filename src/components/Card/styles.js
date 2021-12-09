import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 0;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 6px 17px 31px -5px rgba(0, 0, 0, 0.57);
  position: relative;
  box-sizing: border-box;
  transition: 0.3s ease;
`;

CardContainer.Header = styled.div`
  text-align: left;
  margin: 1em 0;
  position: relative;
  z-index: 1;
  margin: 0 0 35px;
  padding: 10px 0 10px 30px;
  border-left: 5px solid #a4c350;
  h1 {
    font-size: 32px;
    letter-spacing: -1px;
    font-weight: 600;
    color: #f21338;
  }
`;

CardContainer.Body = styled.div`
  display: grid;
  gap: 0.9em;
  position: relative;
  margin: 0 30px 35px;
`;

CardContainer.Footer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.8em;
  margin: 0 2em;

  label {
    font-size: 14px;
    letter-spacing: 1px;
  }
`;
export default CardContainer;
