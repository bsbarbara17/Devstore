import React from "react";
import Produto from "./produto";
import Menu from "./menu";
import { Conteiner } from "../components/conteiner";

export default function Index() {
  return (
    <Conteiner>
      <Produto />
      <Menu />
    </Conteiner>
  );
}
