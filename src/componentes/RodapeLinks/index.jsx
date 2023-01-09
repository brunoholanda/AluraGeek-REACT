import { Link } from 'react-router-dom';
import styles from './RodapeLinks.module.scss';
import logo from "assets/Logo.svg"


export default function RodapeLinks () {
    return (
        <section className={styles.rodapelinks}>
            <img src={logo} className={styles.rodapelinks__logo}/>
        <div className={styles.rodapelinks__link}>
            <Link to="/">Quem somos nós</Link>
            <Link to="/">Política de privacidade</Link>
            <Link to="/">Programa fidelidade</Link>
            <Link to="/">Nossas lojas</Link>
            <Link to="/">Quero ser franqueado</Link>
            <Link to="/">Anuncie aqui</Link>
           
        </div>
       
    </section>
    )
}