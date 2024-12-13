import loading from '../../img/loading.svg';

import styles from './loading.module.css';

export default function Loading() {
    return (
        <div className={styles.loading_container}>
            <img className={styles.loader} src={loading} alt="Loading..." />
        </div>
    );
}
    