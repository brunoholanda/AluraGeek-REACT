import styles from './PrimeiraEtapa.module.scss';
import etapaa from 'assets/status-1.png';
import { Link } from 'react-router-dom';


export default function PrimeiraEtapa () {
    return (
        <section className={styles.cordefundo}>
            <div className={styles.formulario}>
                <div className={styles.formalario__container}>
                    <img src={etapaa} alt="Etapa um de tres cadastro alura geek" />
                    <h2>Preencha os campos abaixo para criar seu cadastro</h2>
                </div>
                <form className={styles.formulario__principal}>
                    <div className={styles.divisao}>
                        <input className={styles.formulario__inputs} name="nome" id="nome" type="name" placeholder="Insira seu Nome Completo" minLength="3" required />
                        <input className={styles.formulario__inputs} name="email" id="email" type="email" placeholder="Insira seu E-mail" minLength="4" required />
                    </div>
                    <div className={styles.divisao}>
                        <input className={styles.formulario__inputs} name="rg" id="rg" type="text" placeholder="Insira seu RG" minLength="3" required />
                        <input className={styles.formulario__inputs} name="cpf" id="cpf" type="text" placeholder="CPF (apenas numeros)" minLength="11" required />
                    </div>
                    <h3>Sua data de nascimento</h3>
                    <input className={styles.formulario__inputs} name="aniversario" id="aniversario" type="date" required />
                    <div>
                    <Link to="/etapab"><input value="Avançar" className={styles.formulario__botao} id="enviar" type="submit"/></Link>
                   
                </div>
            
                </form>
            </div>
        </section>
    )
}