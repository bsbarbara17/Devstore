import styled from "styled-components";

const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: #ffffff;
  width: 1005px;
  height: 79px;

  .foto-admin {
    display: flex;
    align-items: center;
    font-family: Roboto;
    color: #615858;

    padding-left: 1em;
    font-size: 16px;
  }

  .foto-admin img {
    border-radius: 50%;
    width: 57px;
    height: 57px;
    margin: 0px 15px 0px 0px;
  }

  .foto-admin b {
    color: #4a4a4a;
  }

  .notificacao {
    color: white;
    background-color: #db21bd;
    border: 3px solid white;
    border-radius: 50%;
    position: absolute;
    margin: 8px 0px 50px 40px;
    width: 20px;
    height: 20px;
    text-align: center;
    font-size: 0.7em;
  }

  .botoes {
    display: flex;
    align-items: center;
  }

  button {
    border: none;
    margin: 0px 5px;
  }

  .botao-azul img {
    width: 30px;
    height: 24px;
  }

  .botao-azul {
    background-color: #119fdc;
    border-radius: 50px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export { Perfil };
