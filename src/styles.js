import styled from "styled-components";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: auto;

  h1 {
    font-family: "Gwendolyn", cursive;
    font-size: 45px;
    margin: 0;
    text-align: left;
  }

  h3 {
    margin: 0;
    text-align: left;
  }

  .image {
    background-image: url("https://cdn.dribbble.com/users/225098/screenshots/14819388/media/448c404fc0df81a1a6c7ab20bbe3ae7f.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    background-position: center;
  }
`;

Container.Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`

export default Container;
