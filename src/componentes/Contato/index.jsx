import styles from './Contato.module.scss'

export default function Contato () {
    return (
        <div className={styles.contato}>
        <h2>Fale Conosco</h2>
        <input className={styles.contato__nome} type="name" placeholder="Insira seu Nome"/>
        <input className={styles.contato__texto} type="text" placeholder="Escreva sua mensagem"/>
        <button className="botaoprincipal">Enviar Mensagem</button>
      </div>
    )
}