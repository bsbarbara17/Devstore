import styled from "styled-components";

const Botao = styled.div`
  display: flex;
  align-items: flex-end;

  a {
    padding: 11px 16px;

    background: #119fdc;
    border-radius: 44px;
    text-decoration: none;
    color: #ffffff;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    margin: 0px 0px 43px;

    align-self: flex-end;
  }

  .button-create {
  align-self: flex-end;
  justify-self: flex-end;
  padding-bottom: 1.5em;
}

.button-create  button {
  width: 106px;
  height: 36px;

  background: #119FDC;
  border-radius: 44px;
  border: none;
  color: white;
  font-size: 14px;
  margin-left: 2em;
  font-weight: bold;
}
`;

export { Botao };
