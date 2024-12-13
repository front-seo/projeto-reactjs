import styles from './submitButton.module.css';

export default function SubmitButton({ text }) {
    return (
        <div >
           <button className={styles.btn}>{text}</button>
        </div>
    )
}