import styles from './TerceiraEtapa.module.scss';
import finish from 'assets/celebracao.png';
import qrcode from 'assets/qrcode.png'
import etapac from 'assets/status-3.png';

export default function TerceiraEtapa () {
    return (
        <section className={styles.finalizado}>
            <div className={styles.status}>
                <img src={etapac} alt="Etapa um de tres cadastro alura geek" />
            </div>
            <div className={styles.concluido}>
                <h1>Cadastro concluido com sucesso</h1>
                <img src={finish} alt="imagem de comemoracao" />
                <p>Seu cadastro foi finalizado e você vai receber todos os dados por email. Confirme o link enviado por lá para começar a Comprar na AluraGeek!</p>
                <p>Se quiser baixar nosso aplicativo, escaneie o código QR abaixo com a câmera do seu celular!</p>
                <img src={qrcode}/>
            </div>
            

        </section>
    )
}
