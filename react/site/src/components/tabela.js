import styled from "styled-components";

const Tabela = styled.table`
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 29px 0px;
  padding: 0px 45px;
  justify-content: center;

  tbody {
    font-family: Roboto;
    font-size: 18px;
    color: #6d6868;
  }

  table {
    border: none;
    background-color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  th {
    border: none;
    color: #ffffff;
    height: 61.93px;
    width: 150px;
    text-align: left;
    padding: 1em;
    font-weight: 800;
  }


  button {
    border: none;
    border-radius: 50px;
    background-color: #565656;
  }

  .botao img {
    width: 25px;
    height: 30px;
  }

  .a {
    width: -.5em;
  }
`;

export { Tabela };
