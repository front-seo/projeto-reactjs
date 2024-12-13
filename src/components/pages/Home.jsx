import styles from './home.module.css';
import saving from './../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton
            text="Criar projeto"
            to="/newproject"
            />
            <img src={saving} alt="Costs imagem" />
        </section>
    )
}