import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/'
})

export default class Api {
    async listar() {
        let b = await api.get('/produto');
        return b.data;
    }

    async inserir(nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao) {
        let b = await api.post('/produto', {nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao});
        return b.data;
    }

    async alterar(id, nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao) {
        let b = await api.put('/produto/' + id, {nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao});
        return b.data;
    }

    async remover(id) {
        let b = await api.delete('/produto/' + id);
        return b.data;
    }
}