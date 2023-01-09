import styles from './Cabecalho.module.scss';
import logo from 'assets/Logo.svg';
import BotaoLogin from 'componentes/BotaoLogin';
import { Link } from 'react-router-dom';
import lupa from 'assets/Lupa.svg';

export default function Cabecalho () {
    return (
        <div className={styles.cabecalho}>
            <Link to="/"><img className={styles.cabecalho__logo} src={logo} alt="Logo da AluraGeek"/></Link>
            <input className={styles.cabecalho__pesquisa} type="text" placeholder="O que deseja encontrar?"></input>
            <BotaoLogin />
            <img src={lupa} className={styles.cabecalho__lupa} />
        </div>
    )
}