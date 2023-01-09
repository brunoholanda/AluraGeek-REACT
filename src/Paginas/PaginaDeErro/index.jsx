import styles from "./PaginaDeErro.module.scss"
import erro from '../../assets/erro-404.png';
import { useNavigate } from "react-router-dom";

export default function PaginaDeErro () {
    
    const navegar = useNavigate ();
    
    return (    
        <section className={styles.PaginaDeErro}>
            <img src={erro} className={styles.PaginaDeErro__mike}></img>
            <h1>Ops, não encontramos essa pagina!</h1>
            <div className={styles.PaginaDeErro__botao} onClick={() => navegar(-1)}> 
                <button className="botaoprincipal">Voltar</button>
            </div>
        </section> 
    )
}