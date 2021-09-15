import { Turma } from "../components/turma";
import { Perfil } from "../components/perfil";
import { Cadastro } from "../components/cadastro";
import { Faixa3 } from "../components/faixa3";
import { Botao } from "../components/botao";
import { Titulo } from "../components/titulo";
import { Input } from "../components/input";
import { Cab } from "../components/cab";
import { Tabela } from "../components/tabela";
import { Tab1 } from "../components/tab1";
import { Font_Bold } from "../components/font-bold";
import { Traco_Ciano } from "../components/traco_ciano";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

import { useState, useEffect, useRef} from "react";

import Api from '../service/api';
const api = new Api();

export default function Menu() {

  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [preco_de, setPreco_de] = useState('');
  const [preco_por, setPreco_por] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [estoque, setEstoque] = useState('');
  const [imagem, setImagem] = useState('');
  const [descricao, setDescricao] = useState('');
  const [idAlterando, setIdAlterando] = useState('');

  const loading = useRef(null);

  const atualizar = async() => {
    loading.current.continuousStart();

    const produtos = await api.listar(1);
    setProdutos(produtos)

    loading.current.complete();
  }

  async function listar() {
    let b = await api.listar();
    setProdutos(b);
  }

  async function inserir() {

    if(idAlterando == '') {
      let b = await api.inserir(nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao);

      if(b.erro)
        toast.error(b.erro);
      else
        toast.dark('Produto Cadastrado!');
    } else {
      let b = await api.alterar(idAlterando, nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao);

      if(b.erro)
        toast.error(b.erro);
      else
        toast.dark('Produto Alterado!');
    }

    limparCampos();
    listar();
    await atualizar();
  }

  function limparCampos() {
    setNome('');
    setPreco_de('');
    setCategoria('');
    setPreco_por('');
    setAvaliacao('');
    setEstoque('');
    setImagem('');
    setDescricao('');
    setIdAlterando(0);
  }

  function remover(id) {
    confirmAlert({
        title: 'Remover Produto',
        message: `Tem certeza que deseja remover o produto ${id} ?`,
        buttons: [
          {
            label: 'Sim',
            onClick: async() => {
                let b = await api.remover(id);
                if (b.erro) 
                    toast.error(`${b.erro}`);
                else {
                    toast.dark('Produto removido!');
                    listar();
                }
            }
          },
          {
            label: 'Não'
          }
        ]
    });   
  }

  async function editar(item) {
    setNome(item.nm_produto);
    setPreco_de(item.vl_preco_de);
    setCategoria(item.ds_categoria);
    setPreco_por(item.vl_preco_por);
    setAvaliacao(item.vl_avaliacao);
    setEstoque(item.qtd_estoque);
    setImagem(item.img_produto);
    setDescricao(item.ds_produto);
    setIdAlterando(item.id_produto);
  }

  useEffect(() => {

    listar();
  }, [])


  return (
    <Turma>
      <ToastContainer />
      <LoadingBar color="#10eaea" ref={loading} />
      <Perfil>
        <div class="foto-admin">
          <img src="/imgs/fotobruninho.png" alt="" />
          Olá, <Font_Bold> Bruno de Oliveira </Font_Bold>
          <div class="notificacao">3</div>
        </div>

        <div class="botoes">
          <button className="botao-azul">
            <img src="/imgs/atualizar.svg" alt="" />
          </button>
          <button className="botao-azul">
            <img src="/imgs/sair.svg" alt="" />
          </button>
        </div>
      </Perfil>

      <Cadastro />

      <Faixa3>
        <Titulo>
          {" "}
          <Traco_Ciano /> {idAlterando == 0 ? "Novo Produto" : "Alterando Produto" + idAlterando } {" "}
        </Titulo>

        <div className="alinhar">
          <Input>
            <div class="input1">
              <div class="box">
                <label for="nome">Nome:</label>
                <div className="text-input"> <input type="text" value={nome} onChange={e => setNome(e.target.value)} /> </div> 
              </div>

              <div class="box">
                <label for="nome">Preço De:</label>
                <div className="text-input"> <input type="text" value={preco_de} onChange={e => setPreco_de(e.target.value)} /> </div>
              </div>
            </div>

            <div class="input2">
              <div class="box">
                <label for="nome"> Categoria:</label>
                <div className="text-input"> <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)} /> </div>
              </div>

              <div class="box">
                <label for="nome">Preço POR:</label>
                <div className="text-input"> <input type="text" value={preco_por} onChange={e => setPreco_por(e.target.value)} /> </div> 
              </div>
            </div>

            <div class="input3">
              <div class="box">
                <label for="nome">Avaliação:</label>
                <div className="text-input"> <input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} /> </div>
              </div>

              <div class="box">
                <label for="nome">Estoque:</label>
                <div className="text-input"> <input type="text" value={estoque} onChange={e => setEstoque(e.target.value)} /> </div>
              </div>
            </div>

            <div class="input4">
              <div class="box2">
                <label for="nome">Link Imagem:</label>
                <div className="text-input"> <input type="text" value={imagem} onChange={e => setImagem(e.target.value)} /> </div>
              </div>

              <div class="box2-descricao">
                <label for="nome-descricao">Descrição:</label>
                <textarea
                  id="nome"
                  name="nome"
                  rows="5"
                  cols="33"
                  class="area-input"
                  value={descricao} onChange={e => setDescricao(e.target.value)}
                ></textarea>
              </div>
            </div>
          </Input>

          <Botao>
            <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button>
          </Botao>
        </div>
      </Faixa3>

      <Faixa3>
        <div class="row-bar">
          <div class="bar-new-student"></div>
          <Titulo>
            {" "}
            <Traco_Ciano /> Produtos Cadastrados{" "}
          </Titulo>
        </div>

        <Tabela>
          <thead>
            <Cab>
              <th>ID</th>
              <th>Produto</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th></th>
              <th></th>
            </Cab>
          </thead>

          <tbody>
            {produtos.map((item, i) =>
              <Tab1>
                  <tr className={i % 2 == 0 ? "linha-alterada" : "linha-alterada2"}>
                  <td>
                    {" "}
                    <img src={item.img_produto} style={{ width: '40px', height:'40px'}} /> {" "}
                  </td>
                  <td> {item.id_produto}</td>
                  <td title={item.nm_produto}>
                    {item.nm_produto != null && item.nm_produto.length >= 12
                    ? item.nm_produto.substr(0, 12) + '...'
                    : item.nm_produto}
                  </td>
                  <td> {item.ds_categoria} </td>
                  <td> {item.vl_preco_por} </td>
                  <td> {item.qtd_estoque} </td>
                  <td className="coluna-acao"> <button onClick={() => editar(item)}> <img src="/imgs/editar.svg" alt="" /> </button> </td>
                  <td className="coluna-acao"> <button onClick={() => remover(item.id_produto)}> <img src="/imgs/lixeira.svg" alt="" /> </button> </td>
                </tr>
              </Tab1>
            )}
          </tbody>
        </Tabela>
      </Faixa3>
    </Turma>
  );
}
