import Produto from 'componentes/Produto';
import styles from './Categoria.module.scss';

export default function Categoria (props) {
    return (
        props.produtos.length > 0 && <section className={styles.categoria}>
            <h3>{props.nome}</h3>
            <div className={styles.categoria__card}>
            {props.produtos.map(produto => 
                <Produto 
                    key={produto.nome}
                    imagem={produto.imagem} 
                    nome={produto.nome} 
                    preco={produto.preco}
                /> 
            )}
            </div>
        </section>
    )
}

/*Entendendo o codigo a seguir: 
props.produtos.length > 0 && 
O codigo acima significa, a propriedade da section so vai aparecer se ela for
maior do que zero, ou seja, se ela tiver algum valor, o operador && é condicional

O JSX funciona como se fosse uma linha so

Tambem é possivel escrever da seguinte forma
(props.produtos.length > 0) ?

: ''

O sinal ? é um ternario, 
Lendo tudo fica, se a props for maior que zero, devolva as sessoes, caso contrario
devolva uma string vazia.
*/
