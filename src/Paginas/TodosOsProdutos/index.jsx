import styles from './TodosOsPorodutos.module.scss';
import produtos from 'json/produtos.json';
import Cards from "componentes/Cards";
import { Link } from 'react-router-dom';

export default function TodosOsPorodutos () {
    return (
        <main>
            <div className={styles.todososprodutos}>
               <div className={styles.todososprodutos__titulo}>
                <h1>Todos os produtos</h1>
                <Link to="/adicionar-produto"><button className='botaoprincipal'>Adicionar produtos</button></Link>
               </div>
                <ul className={styles.todososprodutos__card}>
                {produtos.map((card) => {
                    return (
                       <li key={card.id}>
                            <Cards card={card} />
                        </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    )
}