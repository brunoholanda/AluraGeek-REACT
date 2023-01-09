import { Link } from 'react-router-dom';
import styles from './Produto.module.scss';

export default function Produto ({imagem, nome, preco}) {
    return(
        <div className={styles.produto}>
            <div className={styles.produto__imagem}>
                <img src={imagem} alt={nome} />
            </div>
            <div className={styles.produto__texto}>
                <h4>{nome}</h4>
                <h5>R$ {preco},00</h5>
                <Link to="*"></Link>
            </div>
        </div>
    )
}