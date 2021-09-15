import styled from "styled-components";

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    font-family: Roboto;
    font-weight: bolder;
    font-size: 18px;
    color: #615858;
    margin: 0px 11px;
  }

  textarea {
    margin: 10px 0px 0px;
  }

  .text-input {
    width: 209px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;

    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  .link-input {
    width: 530px;
    height: 36px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .area-input {
    width: 549px;
    background: #ffffff;
    border: 1px solid #a8a8a8;
    border-radius: 5px;
    justify-content: start;
  }

  .input1 {
    display: flex;
    flex-direction: row;
    padding: 10px 50px 0px;
    margin: 1px 5px 0px 20px;
  }

  .input2 {
    display: flex;
    flex-direction: row;
    padding: 10px 90px 0px;
  }

  .input3 {
    display: flex;
    flex-direction: row;
    padding: 10px 41px 0px;
  }

  .input4 {
    display: flex;
    flex-direction: column;
    padding: 5px 41px 30px;
  }

  .box {
    margin: 0px 0px 0px 0px;
  }

  .box2-descricao {
    display: flex;
    flex-direction: row;
    font-size: 18px;
    color: #615858;
    font-family: Roboto;
    font-weight: bolder;
    outline: none;
    margin-top: 3px;
  }

  .nome-descricao {
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
  }
`;

export { Input };
