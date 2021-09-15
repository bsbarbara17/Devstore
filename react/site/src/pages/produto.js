import { Faixa } from "../components/faixa";
import { Cor_diferente } from "../components/cor_diferente";
import { Faixa2 } from "../components/faixa2";
import { Text_Ciano } from "../components/text_ciano";
import { Ladinho_ciano } from "../components/ladinho_ciano";

export default function Produto() {
  return (
    <Faixa>
      <div class="logo">
        <img src="/imgs/logo.png" alt="" />
        <Text_Ciano>Dev</Text_Ciano>Store
      </div>

      <Cor_diferente />

      <div class="menu-gerenciamento">
        Gerenciamento <img src="/imgs/seta.png" alt="" />
      </div>

      <div class="ger-text">
        <Ladinho_ciano />
        Produtos
      </div>

      <Faixa2 />
    </Faixa>
  );
}
