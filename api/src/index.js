import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try{
        let produtos = await db.tb_produto.findAll({ order: [['id_produto', 'desc']]})
        resp.send(produtos);
    } catch(b) {
        resp.send({ erro: b.toString() })
    }
})

app.post('/produto', async (req, resp) => {
    try{
        if ( nome === '' || categoria === '' || preco_de === ''|| preco_por === '' || avaliacao === '' || estoque === '' || imagem === '' || descricao === '' )
            return toast.error( "Todos os campos precisa ser preenchido" );

        if (isNaN(avaliacao), isNaN(preco_de), isNaN(preco_por), isNaN(estoque))
            return toast.error( "Os campos de Avaliação, Preços e Estoque só pode ser preenchido com número" );


        let produtoexist= await db.tb_produto.findOne({where: {nm_produto: req.body.nome} });
        if(produtoexist != null) {
            return resp.send({ erro: 'Produto ja existe!'})
        } else {
            let { nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao } = req.body;
            
            let b = await db.tb_produto.create({
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: preco_de,
                vl_preco_por: preco_por,
                vl_avaliacao: avaliacao,
                qtd_estoque: estoque,
                img_produto: imagem,
                ds_produto: descricao,
                bt_ativo: true,
                dt_inclusao: new Date()
            })
            resp.send(b);
        }
    } catch(b) {
        resp.send({ erro: b.toString() })
    }
})

app.put('/produto/:id', async (req, resp) => {
    try{
        let { nome, categoria, preco_de, preco_por, avaliacao, estoque, imagem, descricao } = req.body;
        let { id } = req.params;

        let b = await db.tb_produto.update(
            {
                nm_produto: nome,
                ds_categoria: categoria,
                vl_preco_de: preco_de,
                vl_preco_por: preco_por,
                vl_avaliacao: avaliacao,
                qtd_estoque: estoque,
                img_produto: imagem,
                ds_produto: descricao,
                bt_ativo: true,
                dt_inclusao: new Date()
            },
            {
                where: { id_produto: id }
            }
        )
        resp.sendStatus(200);
    } catch(b) {
        resp.send({ erro: b.toString() })
    }
})

app.delete('/produto/:id', async (req, resp) => {
    try{
        let { id } = req.params;

        let b = await db.tb_produto.destroy({ where: { id_produto: id } })
        resp.sendStatus(200);
    } catch(b) {
        resp.send({ erro: b.toString() })
    }
})

app.listen(process.env.PORT,
            x => console.log(`Server up at port ${process.env.PORT}`))