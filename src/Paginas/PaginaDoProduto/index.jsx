import produtos from 'json/produtos.json';
import { useParams } from 'react-router-dom';
import styles from './PaginaDoProduto.module.scss';
import Cards from 'componentes/Cards';

export default function PaginaDoProduto () {
   
    const parametros = useParams (); //um hock do react router dom
    
    const produto = produtos.find ((produto) => { 
        return produto.id === (parametros.id);
    })

        return (
            <article className={styles.paginadoproduto}>
            <section className={styles.paginadoproduto__sessao}>
                <div>
                    <img className={styles.paginadoproduto__imagem} src={`/assets/produtos/${produto.id}/capa.png`}
                    alt={produto.titulo}
                    />
                </div>            
              
                <div className={styles.paginadoproduto__texto}>
                    <h1>{produto.titulo}</h1>
                    <h3>{produto.preco}</h3>
                    <p>{produto.texto}</p>
                </div>
            </section>
            <section className={styles.paginadoproduto__similares}>
                <h2 className={styles.paginadoproduto__tituloSec}>Produtos similares</h2>
                    <ul className={styles.lista}>
                       {produtos.slice(0,6).map((card) => {      
                        return (
                            <li key={card.id}>
                                <Cards card={card} />
                            </li>
                        );
                    })}
                    </ul>
             </section>
             </article>
        )
}