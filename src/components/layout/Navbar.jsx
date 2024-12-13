import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../../img/costs_logo.png';
import Container from './Container';

export default function Navbar() {
    return (
        <nav className= {styles.navbar}>
            <Container>
                    <Link to="/"><img src={logo} alt="Costs logo" /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/projects">Projects</Link></li>
                    <li className={styles.item}><Link to="/company">Company</Link>         </li>
                    <li className={styles.item}><Link to="/newproject">New Project</Link></li>
                    <li className={styles.item}><Link to="/contato">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    )
}