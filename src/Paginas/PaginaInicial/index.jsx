import Banner from "componentes/Banner";
import styles from './PaginaInicial.module.scss';
import produtos from 'json/produtos.json';
import Cards from "componentes/Cards";
import { Link } from "react-router-dom";

export default function PaginaInicial () {
    let count = 0;
    return (
        <main>
            <Banner />

            <div className={styles.paginainicial}>
                         
                <ul className={styles.paginainicial__card}>
                {produtos.map((card) => {
                    count += 1;
                        return (
                       <li key={card.id}>
                        {count === 1 || count === 7 || count === 13 ? 
                        <h2 className={styles.sec}>{card.tag}</h2>:null}
                        {count === 6 || count === 12 || count === 18 ? 
                        <Link to="/todos-produtos"><h2 className={styles.vertudo}>Ver tudo</h2></Link>:null}
                         {count === 4 || count === 10 || count === 16 ? 
                        <Link to="/todos-produtos"><h2 className={styles.vertudotablet}>Ver tudo</h2></Link>:null}
                        <Cards card={card} />
                        </li>
                        );
                    })}
                    </ul>
                    
            </div>
        </main>
    )
}