import styled from "styled-components";

const Tab1 = styled.tr`
img {
  width: 31px;
  height: 31px;
}

td {
  height: 61.93px;
  width: 119px;
  text-align: center;
}

.linha-alternada {
  background-color: #FFFFFF;
}

.linha-alternada2 {
  background-color: #F5F5F5;
}

.coluna-acao img {
  width: 20px;
  heiht: 25px;
}

.coluna-acao > button {
  visibility: hidden;
}

tr:hover {
  .coluna-acao > button {
    visibility: visible;
  }
}
`;

export { Tab1 };
