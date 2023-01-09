import Categoria from "componentes/Categoria";
import Formulario from "componentes/Formulario";
import { useState } from "react";


export default function CadastroProduto () {
    
   

    const categorias = [
        {
            nome: 'Star Wars',
        },
        {
            nome: 'Consoles',
        },
        {
            nome: 'Diversos',
        },
    ]
    
    const [produtos, setProdutos] = useState ([])
    
    const aoNovoProdutoAdicionado = (produto) => {
        setProdutos([...produtos, produto])
    }

    return (
        <div>
            <Formulario 
                categorias={categorias.map(categoria => categoria.nome)} 
                aoProdutoAdicionado={produto => aoNovoProdutoAdicionado(produto)}
            />

            {categorias.map(categoria => <Categoria 
                key={categoria.nome}
                nome={categoria.nome}
                produtos={produtos.filter(produto => produto.categoria === categoria.nome)}
            />)}

        
        </div>
    ) 
}