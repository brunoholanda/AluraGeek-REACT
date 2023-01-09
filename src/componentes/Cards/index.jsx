import { Link } from "react-router-dom";
import styles from './Cards.module.scss';

export default function Cards ({ card }) {
    return (
        
            <div className={styles.cards}>
                <Link to={`/produto/${card.id}`}><img className={styles.cards__imagem} 
                src={`/assets/produtos/${card.id}/capa.png`}
                alt={card.titulo}
                /></Link>
                <div className={styles.cards__textos}>
                    <h2>{card.titulo}</h2>
                    <h3>{card.preco}</h3>
                    <Link to={`/produto/${card.id}`}> <h4>Ver Produto</h4></Link>
                </div>

            </div>
        
    )
}