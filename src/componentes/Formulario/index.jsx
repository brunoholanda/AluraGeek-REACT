
import CampoTexto from 'componentes/CampoTexto'
import ListaSuspensa from 'componentes/ListaSuspensa'
import { useState } from 'react'
import styles from './Formulario.module.scss'

export default function CadastroProduto (props) {
      
    const [imagem, setImagem] = useState ('')
    const [categoria, setCategoria] = useState ('')
    const [nome, setNome] = useState ('')
    const [preco, setPreco] = useState ('')
    const [descircao, setDescricao] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoProdutoAdicionado({
            imagem,
            categoria,
            nome,
            preco,
            descircao
        })
        setImagem('')
        setCategoria('')
        setNome('')
        setPreco('')
        setDescricao('')
            
    }
    
    return (
        <form onSubmit={aoSalvar} className={styles.AdicionarProduto}>
            <h1>Adicionar novo produto</h1>
            <CampoTexto 
                obrigatorio={true} 
                placeholder="Url da Imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa 
                obrigatorio={true}
                itens={props.categorias}
                valor={categoria}
                aoAlterado={valor => setCategoria(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                placeholder="Nome do Produto" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                placeholder="Preco do produto" 
                valor={preco}
                aoAlterado={valor => setPreco(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                placeholder="Descricao do produto" 
                valor={descircao}
                aoAlterado={valor => setDescricao(valor)}
            />
            <button className='botaoprincipal'>Adicionar Produto</button>
        </form>
    )    
}