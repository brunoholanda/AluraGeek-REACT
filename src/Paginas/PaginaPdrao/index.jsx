import Cabecalho from "componentes/Cabecalho";
import Contato from "componentes/Contato";
import RodapeLinks from "componentes/RodapeLinks";
import { Outlet } from "react-router-dom";
import styles from './PaginaPadrao.module.scss'
import logo from "assets/Logo.svg"
import Rodape from "componentes/Rodape";


export default function PaginaPadrao () {
    return (
        <main>
           <Cabecalho />
            
           <Outlet />
           <div className={styles.rodape}>
             <img src={logo} className={styles.rodape__descktop} />
             <RodapeLinks />
             <Contato />
           </div>
           <Rodape />
        </main>
    )
}