import styles from './SegundaEtapa.module.scss';
import etapab from 'assets/status-2.png';
import { Link } from 'react-router-dom';


export default function SegundaEtapa () {
    return (

        <section className={styles.cordefundo}>
            <div className={styles.formulario}>
            <div className={styles.formalario__container}>
            <img src={etapab} alt="Etapa um de tres cadastro alura geek" />
            <h3>Informacoes de endereco</h3>
            <div className={styles.divisao}>
                <input className={styles.formulario__inputs} name="cep" id="cep" placeholder="Seu CEP" required />
                <input className={styles.formulario__inputs} name="endereco" id="endereco" placeholder="Seu Endereco" required />
            </div>
            <div className={styles.divisaob}>
                <input className={styles.formulario__inputsb} name="numero" id="numero" placeholder="Numero da residencia" required />
                <input className={styles.formulario__inputsb} name="complemento" id="complemento" placeholder="Complemento" />
                <input className={styles.formulario__inputsb} name="bairro" id="bairro" placeholder="insira seu bairro" required />
            </div>
            <div className={styles.formulario__termos}>
                    <input name="termos" type="checkbox" required/>
                    <p>Li e estou ciente quanto às condições de tratamento dos meus dados conforme
                    descrito na Política
                    de
                    Privacidade da Alura Geek.</p>
                </div>
                 <div>
                    <Link to="/etapac"><input value="Avançar" className={styles.formulario__botao} id="enviar" type="submit"/></Link>
                   
                </div>
            </div>
            </div>
        </section>
    )
}